'use client'

import * as React from 'react'
import { ArrowRight, ChevronLeft, ChevronRight, Megaphone, Terminal, X } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { cn } from '@/lib/utils'

export interface AnnouncementItem {
  id: string
  category: 'release' | 'security' | 'maintenance' | 'feature'
  badgeText: string
  title: string
  actionLabel: string
  actionUrl?: string
  cliSnippet?: string
}

export interface AnnouncementBannerProps {
  items?: AnnouncementItem[]
  variant?: 'floating-pill' | 'top-bar' | 'interactive-ticker'
  autoplay?: boolean
  className?: string
}

const defaultAnnouncements: AnnouncementItem[] = [
  {
    id: 'ann-1',
    category: 'release',
    badgeText: 'Sentra Nasional',
    title: '24 Drop-point aktif: 184.6 ton timbulan sampah terkelola dan 132.8 ton emisi CO2e terhindar.',
    actionLabel: 'Pantau Sentra',
    actionUrl: '/pantau',
    cliSnippet: 'bun run test',
  },
  {
    id: 'ann-2',
    category: 'feature',
    badgeText: 'Waste-to-Value',
    title: 'Pabrikasi sirkular kemitraan KSM memproduksi eco-paving block SNI K-250 dan pupuk bio-kasgot.',
    actionLabel: 'Kalkulator Nilai',
    actionUrl: '/pantau',
  },
  {
    id: 'ann-3',
    category: 'maintenance',
    badgeText: 'Pemberitahuan Drop-Point',
    title: 'Layanan penimbangan sampah terpilah dan penukaran reward buka setiap hari pukul 07.00 - 18.00 WIB.',
    actionLabel: 'Setor Sampah',
    actionUrl: '/lapor',
  },
]

export function AnnouncementBanner({
  items,
  variant = 'interactive-ticker',
  autoplay = true,
  className,
}: AnnouncementBannerProps) {
  const activeAnnouncements = items && items.length > 0 ? items : defaultAnnouncements
  const [currentIndex, setCurrentIndex] = React.useState(0)
  const [dismissed, setDismissed] = React.useState(false)
  const [isPaused, setIsPaused] = React.useState(false)
  const [copiedCli, setCopiedCli] = React.useState(false)

  React.useEffect(() => {
    if (!autoplay || isPaused) return
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % activeAnnouncements.length)
    }, 6000)
    return () => clearInterval(timer)
  }, [autoplay, isPaused, activeAnnouncements.length])

  const nextAnnouncement = () => {
    setCurrentIndex((prev) => (prev + 1) % activeAnnouncements.length)
  }

  const prevAnnouncement = () => {
    setCurrentIndex((prev) => (prev - 1 + activeAnnouncements.length) % activeAnnouncements.length)
  }

  const copyCliSnippet = (snippet?: string) => {
    if (!snippet) return
    navigator.clipboard.writeText(snippet)
    setCopiedCli(true)
    setTimeout(() => setCopiedCli(false), 2000)
  }

  if (dismissed) return null

  const current = activeAnnouncements[currentIndex] || activeAnnouncements[0]

  return (
    <div
      data-slot="announcement-banner"
      data-variant={variant}
      role="region"
      aria-label="Announcement"
      className={cn('relative z-50 transition-colors duration-200', className)}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* 1. Interactive Ticker Mode (Default) */}
      {variant === 'interactive-ticker' && (
        <div className="bg-muted/30 border-border/70 text-foreground flex items-center justify-between gap-3 overflow-hidden border-b px-4 sm:px-6 lg:px-8 py-1.5 text-xs shadow-xs backdrop-blur-md">
          <div className="mx-auto flex w-full max-w-7xl items-center justify-between gap-4">
            {/* Left: Status Beacon & Item Indicator */}
            <div className="flex shrink-0 items-center gap-2.5">
              <div className="flex items-center gap-1.5 font-mono text-[11px] text-muted-foreground">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
                </span>
                <span className="font-bold text-foreground tracking-wider uppercase font-mono">CircuLife Telemetri</span>
              </div>

              <Badge
                variant="outline"
                className={cn(
                  'px-2 py-0.5 font-mono text-[10px] uppercase font-bold tracking-wider',
                  current.category === 'release' && 'bg-primary/10 text-primary border-primary/30',
                  current.category === 'security' && 'border-warning/30 bg-warning/10 text-warning',
                  current.category === 'feature' && 'border-primary/40 bg-primary/15 text-primary',
                  current.category === 'maintenance' && 'border-muted-foreground/30 bg-muted/40 text-foreground',
                )}
              >
                {current.badgeText}
              </Badge>
            </div>

            {/* Center: Dynamic Headline & Action Link */}
            <div className="flex flex-1 items-center justify-center gap-2 truncate px-2 font-mono text-[11px]">
              <p className="text-foreground truncate font-medium">{current.title}</p>
              {current.actionUrl && (
                <a
                  href={current.actionUrl}
                  className="text-primary hidden shrink-0 items-center gap-1 font-bold hover:underline sm:inline-flex"
                >
                  <span>{current.actionLabel}</span>
                  <ArrowRight className="size-3" />
                </a>
              )}
            </div>

            {/* Right: Ticker Navigation & CLI / Dismiss */}
            <div className="flex shrink-0 items-center gap-2 font-mono text-[11px]">
              {current.cliSnippet && (
                <button
                  type="button"
                  className="bg-background/80 border-border/80 text-muted-foreground hover:text-foreground hidden items-center gap-1.5 rounded border px-2 py-0.5 font-mono text-[10px] transition-colors md:inline-flex"
                  onClick={() => copyCliSnippet(current.cliSnippet)}
                >
                  <Terminal className="text-primary size-3" />
                  <span>{copiedCli ? 'Tersalin!' : 'Copy CLI'}</span>
                </button>
              )}

              <div className="border-border/80 bg-background/80 flex items-center overflow-hidden rounded-md border">
                <button
                  type="button"
                  className="hover:bg-muted text-muted-foreground hover:text-foreground p-1 transition-colors"
                  aria-label="Previous announcement"
                  onClick={prevAnnouncement}
                >
                  <ChevronLeft className="size-3.5" />
                </button>
                <span className="text-muted-foreground px-1.5 font-mono text-[10px] tabular-nums">
                  {currentIndex + 1}/{activeAnnouncements.length}
                </span>
                <button
                  type="button"
                  className="hover:bg-muted text-muted-foreground hover:text-foreground p-1 transition-colors"
                  aria-label="Next announcement"
                  onClick={nextAnnouncement}
                >
                  <ChevronRight className="size-3.5" />
                </button>
              </div>

              <button
                type="button"
                aria-label="Tutup banner pemberitahuan"
                className="text-muted-foreground hover:text-foreground hover:bg-muted rounded-md p-1 transition-colors"
                onClick={() => setDismissed(true)}
              >
                <X className="size-3.5" />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* 2. Floating Pill Mode */}
      {variant === 'floating-pill' && (
        <div className="mx-auto w-fit max-w-2xl px-4 py-2">
          <div className="bg-card/90 border-border text-foreground hover:border-primary/40 flex items-center gap-3 rounded-full border py-1.5 pr-2 pl-3 text-xs shadow-md backdrop-blur-md transition-colors">
            <Badge
              variant="secondary"
              className="bg-primary/10 text-primary border-primary/20 px-2 py-0.5 font-mono text-xs"
            >
              {current.badgeText}
            </Badge>
            <p className="text-foreground max-w-sm truncate font-medium">{current.title}</p>
            {current.actionUrl && (
              <a
                href={current.actionUrl}
                className="text-primary inline-flex shrink-0 items-center gap-1 font-semibold hover:underline"
              >
                {current.actionLabel} <ArrowRight className="size-3" />
              </a>
            )}
            <button
              type="button"
              aria-label="Dismiss announcement"
              className="text-muted-foreground hover:text-foreground hover:bg-muted rounded-full p-1 transition-colors"
              onClick={() => setDismissed(true)}
            >
              <X className="size-3.5" />
            </button>
          </div>
        </div>
      )}

      {/* 3. Top Solid Bar Mode */}
      {variant === 'top-bar' && (
        <div className="bg-primary text-primary-foreground flex items-center justify-between gap-3 px-4 py-2 text-xs shadow-xs">
          <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-4">
            <div className="flex items-center gap-2 truncate">
              <Megaphone className="size-4 shrink-0" />
              <span className="font-mono font-bold">[{current.badgeText}]</span>
              <span className="truncate">{current.title}</span>
            </div>
            <div className="flex shrink-0 items-center gap-3">
              {current.actionUrl && (
                <a
                  href={current.actionUrl}
                  className="inline-flex items-center gap-1 font-semibold underline-offset-4 hover:underline"
                >
                  {current.actionLabel} <ArrowRight className="size-3" />
                </a>
              )}
              <button
                type="button"
                aria-label="Dismiss banner"
                className="text-primary-foreground/80 hover:text-primary-foreground hover:bg-primary-foreground/15 rounded p-1 transition-colors"
                onClick={() => setDismissed(true)}
              >
                <X className="size-3.5" />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
export default AnnouncementBanner
