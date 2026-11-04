import React from "react";
import { EMERGENCY_CONTACTS } from "@/lib/constants";
import { Phone, MessageSquare, Clock, MapPin, ShieldAlert } from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function HotlineDirectory() {
  return (
    <div className="space-y-6">
      <div className="border-b border-border pb-4">
        <div className="flex items-center gap-2 mb-1">
          <ShieldAlert className="h-5 w-5 text-destructive" aria-hidden="true" />
          <Badge variant="destructive" className="text-xs font-bold uppercase tracking-wider">
            Direktori Siaga 24 Jam
          </Badge>
        </div>
        <h2 className="text-2xl font-black text-foreground">
          Hotline Kontak Darurat Balai TNGC & Posko Jalur
        </h2>
        <p className="text-xs sm:text-sm text-muted-foreground mt-1">
          Nomor telepon resmi posko lapangan untuk panggilan darurat bahaya kebakaran, evakuasi medis pendaki, dan laporan tindak pidana kehutanan.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {EMERGENCY_CONTACTS.map((contact) => (
          <Card
            key={contact.id}
            className="flex flex-col justify-between shadow-sm transition-all hover:border-primary/50"
          >
            <div>
              <CardHeader className="pb-2 space-y-2">
                <div className="flex items-center justify-between gap-2">
                  <Badge variant="secondary" className="text-[11px] font-bold uppercase tracking-wider">
                    {contact.agency}
                  </Badge>
                  <span className="text-[11px] font-semibold text-emerald-700 dark:text-emerald-400 flex items-center gap-1">
                    <Clock className="h-3 w-3" aria-hidden="true" />
                    <span>{contact.availableHours}</span>
                  </span>
                </div>

                <div>
                  <CardTitle className="text-base font-bold text-foreground leading-snug">
                    {contact.name}
                  </CardTitle>
                  <p className="text-xs text-muted-foreground mt-0.5">{contact.role}</p>
                </div>
              </CardHeader>

              <CardContent className="pt-0 pb-3">
                <div className="flex items-center gap-1.5 text-xs text-muted-foreground bg-muted/40 rounded-md px-2.5 py-1.5 border border-border/50">
                  <MapPin className="h-3.5 w-3.5 text-primary shrink-0" aria-hidden="true" />
                  <span>Lokasi :</span>
                  <span className="font-medium text-foreground">{contact.location}</span>
                </div>
              </CardContent>
            </div>

            <CardFooter className="pt-3 border-t border-border/60 flex items-center gap-2">
              <a
                href={`tel:${contact.phone.replace(/[^0-9]/g, "")}`}
                className={cn(buttonVariants({ variant: "destructive", size: "sm" }), "flex-1 h-10 gap-1.5 text-xs font-bold shadow-sm")}
              >
                <Phone className="h-3.5 w-3.5" aria-hidden="true" />
                <span className="tabular-nums">{contact.phone}</span>
              </a>

              {contact.whatsapp && (
                <a
                  href={`https://wa.me/${contact.whatsapp.replace(/[^0-9]/g, "")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(buttonVariants({ variant: "outline", size: "sm" }), "h-10 gap-1.5 text-xs font-bold")}
                  aria-label={`Kirim WhatsApp ke ${contact.name}`}
                >
                  <MessageSquare className="h-3.5 w-3.5 text-emerald-600" aria-hidden="true" />
                  <span>WA</span>
                </a>
              )}
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
