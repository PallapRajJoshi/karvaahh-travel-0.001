// components/layout/TopBar.tsx
import { MapPin, Phone, Mail } from "lucide-react";
import { contactInfo, socialLinks } from "@/lib/navigation-data";

// lucide-react's core icon set no longer ships brand/logo marks (Facebook, LinkedIn,
// Instagram, etc.), so these are small inline SVGs sized to match lucide's stroke style.

function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path
        d="M14 9h2V6h-2c-1.7 0-3 1.3-3 3v2H9v3h2v6h3v-6h2.2l.8-3H14V9.5c0-.3.2-.5.5-.5H14V9Z"
        fill="currentColor"
      />
    </svg>
  );
}

function LinkedinIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <rect x="4" y="4" width="16" height="16" rx="2.5" stroke="currentColor" strokeWidth="1.5" />
      <path
        d="M8.2 10.5v5.3M8.2 8.2v.02M11.6 15.8v-3.1c0-1.1.7-1.9 1.8-1.9s1.8.8 1.8 1.9v3.1"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <rect x="4" y="4" width="16" height="16" rx="4.5" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="12" cy="12" r="3.2" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="16.2" cy="7.8" r="0.9" fill="currentColor" />
    </svg>
  );
}

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path
        d="M17.5 14.4c-.3-.1-1.6-.8-1.9-.9-.2-.1-.4-.1-.6.1-.2.3-.7.9-.8 1-.2.2-.3.2-.5.1-1.5-.7-2.5-1.3-3.5-3-.3-.5.3-.4.7-1.4.1-.2 0-.4 0-.5-.1-.1-.6-1.4-.8-1.9-.2-.5-.4-.4-.6-.4h-.5c-.2 0-.5.1-.7.3-.3.3-1 1-1 2.4s1 2.8 1.2 3c.1.2 2 3.1 5 4.3.7.3 1.2.5 1.7.6.7.2 1.3.2 1.8.1.6-.1 1.6-.7 1.9-1.3.2-.6.2-1.1.2-1.2-.1-.1-.3-.2-.6-.3Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 21a9 9 0 1 0-7.8-4.5L3 21l4.6-1.2A9 9 0 0 0 12 21Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const socialIconMap = {
  facebook: FacebookIcon,
  linkedin: LinkedinIcon,
  instagram: InstagramIcon,
  whatsapp: WhatsAppIcon,
};

function ContactCluster({
  data,
}: {
  data: (typeof contactInfo)["india"];
}) {
  return (
    <div className="flex items-center gap-4 whitespace-nowrap">
      <span className="flex items-center gap-1.5 text-[13px] font-medium text-white/90">
        <MapPin className="h-3.5 w-3.5 text-emerald-400" strokeWidth={2} />
        {data.city}
      </span>
      <a
        href={data.phoneHref}
        className="flex items-center gap-1.5 text-[13px] text-white/80 transition-colors hover:text-white"
      >
        <Phone className="h-3.5 w-3.5 text-emerald-400" strokeWidth={2} />
        {data.phone}
      </a>
      <a
        href={`mailto:${data.email}`}
        className="hidden items-center gap-1.5 text-[13px] text-white/80 transition-colors hover:text-white lg:flex"
      >
        <Mail className="h-3.5 w-3.5 text-emerald-400" strokeWidth={2} />
        {data.email}
      </a>
    </div>
  );
}

export default function TopBar() {
  return (
    <div className="hidden bg-[#0A2540] text-white md:block">
      <div className="mx-auto flex max-w-[1440px] items-center justify-between gap-6 px-6 py-2 lg:px-10">
        <div className="flex items-center gap-8 overflow-x-auto">
          <ContactCluster data={contactInfo.india} />
          <span className="hidden h-4 w-px bg-white/15 lg:block" />
          <ContactCluster data={contactInfo.nepal} />
        </div>

        <div className="flex shrink-0 items-center gap-2.5">
          {socialLinks.map((social) => {
            const Icon = socialIconMap[social.icon];
            return (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="flex h-7 w-7 items-center justify-center rounded-full border border-white/20 text-white/80 transition-all duration-200 hover:border-emerald-400/60 hover:text-white"
              >
                <Icon className="h-3.5 w-3.5" />
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
}
