import React from "react";
import { EMERGENCY_CONTACTS } from "@/lib/constants";
import { Phone, MessageSquare, Clock, MapPin, ShieldAlert } from "lucide-react";

export default function HotlineDirectory() {
  return (
    <div className="space-y-6">
      <div className="border-b border-border pb-4">
        <div className="flex items-center gap-2 mb-1">
          <ShieldAlert className="h-5 w-5 text-red-600" aria-hidden="true" />
          <span className="text-xs font-bold uppercase tracking-wider text-red-600">
            Direktori Siaga 24 Jam
          </span>
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
          <div
            key={contact.id}
            className="flex flex-col justify-between rounded-xl border border-border bg-card p-5 shadow-sm transition-all hover:border-primary/50"
          >
            <div>
              <div className="flex items-center justify-between gap-2 mb-2">
                <span className="text-[11px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-muted text-muted-foreground">
                  {contact.agency}
                </span>
                <span className="text-[11px] font-semibold text-emerald-700 dark:text-emerald-400 flex items-center gap-1">
                  <Clock className="h-3 w-3" aria-hidden="true" />
                  <span>{contact.availableHours}</span>
                </span>
              </div>

              <h3 className="text-base font-bold text-foreground mb-1 leading-snug">
                {contact.name}
              </h3>
              <p className="text-xs text-muted-foreground mb-3">{contact.role}</p>

              <div className="flex items-center gap-1.5 text-xs text-muted-foreground bg-muted/30 rounded px-2.5 py-1.5 mb-4 border border-border/40">
                <MapPin className="h-3.5 w-3.5 text-primary shrink-0" aria-hidden="true" />
                <span>Lokasi :</span>
                <span className="font-medium text-foreground">{contact.location}</span>
              </div>
            </div>

            <div className="pt-3 border-t border-border/60 flex items-center gap-2">
              <a
                href={`tel:${contact.phone.replace(/[^0-9]/g, "")}`}
                className="flex-1 inline-flex h-10 items-center justify-center gap-1.5 rounded-lg bg-red-600 px-3 text-xs font-bold text-white shadow-sm hover:bg-red-700 transition-colors"
              >
                <Phone className="h-3.5 w-3.5" aria-hidden="true" />
                <span className="tabular-nums">{contact.phone}</span>
              </a>

              {contact.whatsapp && (
                <a
                  href={`https://wa.me/${contact.whatsapp.replace(/[^0-9]/g, "")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-10 items-center justify-center gap-1.5 rounded-lg border border-border bg-background px-3 text-xs font-bold text-foreground hover:bg-muted transition-colors"
                  aria-label={`Kirim WhatsApp ke ${contact.name}`}
                >
                  <MessageSquare className="h-3.5 w-3.5 text-emerald-600" aria-hidden="true" />
                  <span>WA</span>
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
