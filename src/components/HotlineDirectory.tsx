import React from "react";
import { EMERGENCY_CONTACTS } from "@/lib/constants";
import { Phone, MessageSquare, Clock, MapPin, ShieldAlert } from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function HotlineDirectory() {
  return (
    <div className="space-y-8">
      <div className="border-b border-border pb-6 space-y-2">
        <div className="flex items-center gap-2 mb-1">
          <ShieldAlert className="h-5 w-5 text-destructive" aria-hidden="true" />
          <Badge variant="destructive" className="text-xs font-mono font-bold uppercase tracking-wider">
            Direktori Siaga 24 Jam
          </Badge>
        </div>
        <h2 className="text-2xl sm:text-3xl font-black text-foreground tracking-tight">
          Hotline Kontak Darurat Balai TNGC & Posko Jalur
        </h2>
        <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
          Nomor telepon resmi posko lapangan untuk panggilan darurat bahaya kebakaran, evakuasi medis pendaki, dan laporan tindak pidana kehutanan.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        {EMERGENCY_CONTACTS.map((contact) => (
          <Card
            key={contact.id}
            className="flex flex-col justify-between shadow-sm transition-all hover:border-primary/50 rounded-2xl overflow-hidden hover:shadow-md bg-card"
          >
            <div>
              <CardHeader className="p-6 pb-4 space-y-3 border-b border-border/40 bg-muted/15">
                <div className="flex items-center justify-between gap-2">
                  <Badge variant="secondary" className="text-[11px] font-mono font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-md">
                    {contact.agency}
                  </Badge>
                  <span className="text-xs font-mono font-bold text-emerald-700 dark:text-emerald-400 flex items-center gap-1.5">
                    <Clock className="h-3.5 w-3.5" aria-hidden="true" />
                    <span>{contact.availableHours}</span>
                  </span>
                </div>

                <div>
                  <CardTitle className="text-lg font-black text-foreground leading-snug tracking-tight">
                    {contact.name}
                  </CardTitle>
                  <p className="text-xs text-muted-foreground mt-1">{contact.role}</p>
                </div>
              </CardHeader>

              <CardContent className="p-6 pt-4 pb-4">
                <div className="flex items-center gap-2 text-xs text-muted-foreground bg-muted/40 rounded-xl px-3 py-2 border border-border/60 font-mono">
                  <MapPin className="h-4 w-4 text-primary shrink-0" aria-hidden="true" />
                  <span>Lokasi :</span>
                  <span className="font-bold text-foreground">{contact.location}</span>
                </div>
              </CardContent>
            </div>

            <CardFooter className="p-4 px-6 border-t border-border/60 bg-muted/10 flex items-center gap-3">
              <a
                href={`tel:${contact.phone.replace(/[^0-9]/g, "")}`}
                className={cn(buttonVariants({ variant: "destructive", size: "sm" }), "flex-1 h-11 gap-2 text-xs font-bold shadow-sm rounded-xl")}
              >
                <Phone className="h-4 w-4" aria-hidden="true" />
                <span className="tabular-nums font-mono">{contact.phone}</span>
              </a>

              {contact.whatsapp && (
                <a
                  href={`https://wa.me/${contact.whatsapp.replace(/[^0-9]/g, "")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(buttonVariants({ variant: "outline", size: "sm" }), "h-11 px-4 gap-1.5 text-xs font-bold rounded-xl")}
                  aria-label={`Kirim WhatsApp ke ${contact.name}`}
                >
                  <MessageSquare className="h-4 w-4 text-emerald-600" aria-hidden="true" />
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
