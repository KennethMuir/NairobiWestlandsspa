import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight, Check } from "lucide-react";
import { notFound } from "next/navigation";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/ui/Container";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { teamMembers, getTeamMemberBySlug } from "@/data/team";
import { spaPhotography } from "@/data/photography";

type ExpertPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return teamMembers.map((member) => ({ slug: member.slug }));
}

export async function generateMetadata({ params }: ExpertPageProps): Promise<Metadata> {
  const { slug } = await params;
  const member = getTeamMemberBySlug(slug);

  if (!member) {
    return { title: "Expert profile" };
  }

  return {
    title: `${member.name} | Spa Expert in Westlands, Nairobi`,
    description: `Meet ${member.name}, specialising in ${member.specialties.join(", ").toLowerCase()} at Nairobi Westlands Spa.`,
    alternates: { canonical: `/team/${member.slug}` },
  };
}

export default async function ExpertProfilePage({ params }: ExpertPageProps) {
  const { slug } = await params;
  const member = getTeamMemberBySlug(slug);

  if (!member) {
    notFound();
  }

  const memberIndex = teamMembers.findIndex((item) => item.slug === member.slug);
  const portrait = member.image ?? spaPhotography.team[memberIndex].src;
  const otherExperts = teamMembers.filter((item) => item.slug !== member.slug).slice(0, 3);

  return (
    <>
      <Header />
      <main className="bg-[#F7F5F0]">
        <section className="bg-[#192B43] pt-32 text-white sm:pt-36">
          <Container>
            <Link href="/team" className="inline-flex items-center gap-2 text-sm font-medium text-[#DCE6F0] transition-colors hover:text-[#C5AA78]">
              <ArrowLeft size={16} strokeWidth={1.7} />
              Back to The Experts
            </Link>

            <div className="grid items-center gap-10 py-12 sm:py-16 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16 lg:py-20">
              <div className="relative mx-auto aspect-[4/5] w-full max-w-md overflow-hidden rounded-[1.75rem]">
                <Image src={portrait} alt={`${member.name} — ${member.role}`} fill priority sizes="(max-width: 1024px) 100vw, 40vw" className="object-cover" />
              </div>

              <div className="max-w-2xl">
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#C5AA78]">Meet your expert</p>
                <h1 className="velloria-display mt-5 text-5xl leading-[0.95] sm:text-6xl lg:text-7xl">{member.name}</h1>
                <p className="mt-5 text-lg text-[#DCE6F0]">{member.role}</p>
                <p className="mt-3 text-sm text-white/70">{member.experience} experience</p>
                <p className="mt-8 max-w-xl text-base leading-8 text-[#DCE6F0]">
                  Hi, I’m {member.name}. My focus is on {member.specialties.join(", ").toLowerCase()}. I aim to make every session feel considered, comfortable, and shaped around your treatment preferences.
                </p>
                <div className="mt-8 flex flex-wrap gap-3">
                  <Link href={`/book?expert=${member.slug}`} className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#C5AA78] px-6 py-3 text-sm font-semibold text-[#192B43] transition-colors hover:bg-[#D8C49E]">
                    Book a session <ArrowUpRight size={16} />
                  </Link>
                  <WhatsAppButton label="Ask a question" />
                </div>
              </div>
            </div>
          </Container>
        </section>

        <section className="velloria-section">
          <Container>
            <div className="grid gap-12 lg:grid-cols-[1fr_0.8fr] lg:gap-20">
              <div>
                <p className="velloria-eyebrow mb-4">My approach</p>
                <h2 className="velloria-display text-4xl leading-tight text-[#192B43] sm:text-5xl">A treatment shaped around you.</h2>
                <p className="mt-6 max-w-2xl text-base leading-8 text-[#526174]">
                  {member.description} Before your session, you can discuss your preferences and the areas you would like your treatment to focus on.
                </p>
              </div>

              <div className="rounded-[1.5rem] border border-[#192B43]/10 bg-white p-7 sm:p-9">
                <p className="velloria-eyebrow mb-5">Areas of focus</p>
                <ul className="space-y-4">
                  {member.specialties.map((specialty) => (
                    <li key={specialty} className="flex items-center gap-3 text-sm text-[#192B43]">
                      <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#DCE6F0] text-[#192B43]"><Check size={15} /></span>
                      {specialty}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Container>
        </section>

        <section className="bg-[#DCE6F0]/60 py-16 sm:py-20">
          <Container>
            <div className="mb-9 flex items-end justify-between gap-5">
              <div>
                <p className="velloria-eyebrow mb-3">Discover the team</p>
                <h2 className="velloria-display text-4xl text-[#192B43] sm:text-5xl">Meet more experts</h2>
              </div>
              <Link href="/team" className="inline-flex items-center gap-2 text-sm font-semibold text-[#192B43] hover:text-[#7D6A43]">
                All experts <ArrowUpRight size={16} />
              </Link>
            </div>

            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {otherExperts.map((expert) => {
                const index = teamMembers.findIndex((item) => item.slug === expert.slug);
                const image = expert.image ?? spaPhotography.team[index].src;

                return (
                  <Link key={expert.slug} href={`/team/${expert.slug}`} className="group overflow-hidden rounded-2xl bg-white">
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <Image src={image} alt={`${expert.name}, ${expert.role}`} fill sizes="(max-width: 1024px) 100vw, 33vw" className="object-cover transition-transform duration-500 group-hover:scale-105" />
                    </div>
                    <div className="p-5">
                      <h3 className="velloria-display text-2xl text-[#192B43]">{expert.name}</h3>
                      <p className="mt-2 text-sm text-[#526174]">{expert.role}</p>
                    </div>
                  </Link>
                );
              })}
            </div>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
}


