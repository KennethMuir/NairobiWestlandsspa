import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { spaPhotography } from "@/data/photography";
import { teamMembers } from "@/data/team";

const teamImages = spaPhotography.team;

export function TeamCatalogue() {
  return (
    <section id="featured-team" className="velloria-section bg-[#F7F5F0]">
      <div className="velloria-container">
        <div className="max-w-3xl">
          <p className="velloria-eyebrow text-[#C5AA78]">Meet the experts</p>
          <h2 className="velloria-display mt-5 text-5xl leading-[0.92] text-[#192B43] sm:text-6xl lg:text-7xl">
            Skilled hands. A quieter pace.
          </h2>
          <p className="mt-7 max-w-2xl text-sm leading-7 text-[#526174] sm:text-base sm:leading-8">
            Get to know the people behind your experience. Explore each expert&apos;s treatment specialties and approach to wellness.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {teamMembers.map((member, index) => (
            <Link
              key={member.slug}
              href={`/team/${member.slug}`}
              aria-label={`Meet ${member.name}, ${member.role}`}
              className="group block overflow-hidden rounded-[1.75rem] bg-white transition-all duration-500 hover:-translate-y-1 hover:shadow-xl focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#C5AA78]"
            >
              <div className="relative aspect-[4/5] overflow-hidden">
                <Image
                  src={member.image ?? teamImages[index].src}
                  alt={`${member.name}, ${member.role}`}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#192B43]/90 via-[#192B43]/25 to-transparent p-5 pt-20">
                  <div className="flex items-end justify-between gap-4 text-white">
                    <div>
                      <p className="velloria-display text-3xl leading-none">{member.name}</p>
                      <p className="mt-2 text-xs uppercase tracking-[0.12em] text-white/80">{member.experience} experience</p>
                    </div>
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/15 backdrop-blur-sm transition-all duration-300 group-hover:bg-[#C5AA78] group-hover:text-[#192B43]">
                      <ArrowUpRight size={17} strokeWidth={1.5} />
                    </span>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <p className="text-sm font-semibold text-[#192B43]">{member.role}</p>
                <p className="mt-3 text-sm leading-6 text-[#526174]">{member.description}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {member.specialties.map((specialty) => (
                    <span key={specialty} className="rounded-full border border-[#192B43]/10 px-3 py-1.5 text-[11px] uppercase tracking-[0.08em] text-[#7D6A43]">
                      {specialty}
                    </span>
                  ))}
                </div>
                <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[#192B43]">
                  View expert profile
                  <ArrowUpRight size={16} strokeWidth={1.7} className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}



