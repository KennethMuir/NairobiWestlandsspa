"use client";

import { ArrowLeft, ArrowRight, MessageCircle, Quote } from "lucide-react";
import { useRef } from "react";
import { motion } from "motion/react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function TestimonialsSection() {
  const trackRef = useRef<HTMLDivElement>(null);

  function scrollReviews(direction: "left" | "right") {
    const track = trackRef.current;
    if (!track) return;

    track.scrollBy({
      left: direction === "left" ? -track.clientWidth * 0.8 : track.clientWidth * 0.8,
      behavior: "smooth",
    });
  }

  return (
    <section className="velloria-section overflow-hidden bg-[var(--velloria-ivory)]">
      <Container>
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-2xl">
            <SectionHeading
              eyebrow="Guest Notes"
              title={
                <>
                  Kind words.
                  <br />
                  Real experiences.
                </>
              }
              description="Discover feedback shared by guests who have experienced our care. We are preparing to feature genuine guest reviews here."
            />
          </div>

          <div className="flex shrink-0 gap-2">
            <button
              type="button"
              onClick={() => scrollReviews("left")}
              aria-label="Scroll guest reviews left"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-[var(--velloria-border)] text-[var(--velloria-deep)] transition-colors hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
            >
              <ArrowLeft size={18} />
            </button>
            <button
              type="button"
              onClick={() => scrollReviews("right")}
              aria-label="Scroll guest reviews right"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-[var(--velloria-border)] text-[var(--velloria-deep)] transition-colors hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
            >
              <ArrowRight size={18} />
            </button>
          </div>
        </div>

        <div
          ref={trackRef}
          className="mt-10 flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth pb-4 [scrollbar-width:thin] [&::-webkit-scrollbar]:h-1.5 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-[var(--velloria-border)]"
          aria-label="Guest review cards"
        >
          <motion.article
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5 }}
            className="flex min-h-64 w-[min(88vw,28rem)] shrink-0 snap-start flex-col rounded-[2rem] border border-[var(--velloria-border)] bg-white p-7 sm:p-9"
          >
            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[var(--velloria-cream)] text-[var(--velloria-mocha)]">
              <Quote size={22} strokeWidth={1.4} />
            </div>

            <h3 className="velloria-display mt-7 text-2xl leading-tight text-[var(--velloria-deep)]">
              Your experience could be shared here.
            </h3>

            <p className="mt-3 flex-1 text-sm leading-6 text-[var(--velloria-espresso)]/65">
              We believe guest feedback should speak for itself. Genuine reviews
              will appear here once our review integration is ready.
            </p>

            <div className="mt-6 flex items-center gap-2 border-t border-[var(--velloria-border)] pt-5 text-xs text-[var(--velloria-espresso)]/60">
              <MessageCircle size={15} />
              <span>Guest feedback · Coming soon</span>
            </div>
          </motion.article>
        </div>
      </Container>
    </section>
  );
}
