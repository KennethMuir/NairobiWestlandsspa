"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "motion/react";
import {
  ArrowLeft,
  ArrowRight,
  Maximize2,
  X,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";
import {
  galleryCategories,
  galleryItems,
} from "@/data/gallery";

export function GalleryCatalogue() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const dialogRef = useRef<HTMLDivElement | null>(null);
  const closeButtonRef = useRef<HTMLButtonElement | null>(null);
  const activeTriggerRef = useRef<HTMLButtonElement | null>(null);
  const previousActiveIndexRef = useRef<number | null>(null);

  const filteredItems =
    activeCategory === "All"
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeCategory);

  const activeItem =
    activeIndex === null ? null : filteredItems[activeIndex] ?? null;

  useEffect(() => {
    if (activeIndex === null) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setActiveIndex(null);

      if (event.key === "ArrowRight") {
        setActiveIndex((current) =>
          current === null ? current : (current + 1) % filteredItems.length,
        );
      }

      if (event.key === "ArrowLeft") {
        setActiveIndex((current) =>
          current === null
            ? current
            : (current - 1 + filteredItems.length) % filteredItems.length,
        );
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [activeIndex, filteredItems.length]);

  useEffect(() => {
    const wasOpen = previousActiveIndexRef.current !== null;
    const isOpen = activeIndex !== null;

    if (!wasOpen && isOpen) {
      requestAnimationFrame(() => closeButtonRef.current?.focus());
    }

    if (wasOpen && !isOpen) {
      requestAnimationFrame(() => activeTriggerRef.current?.focus());
    }

    previousActiveIndexRef.current = activeIndex;
  }, [activeIndex]);

  useEffect(() => {
    if (activeIndex === null) return;

    const dialog = dialogRef.current;
    if (!dialog) return;

    const handleTabKey = (event: KeyboardEvent) => {
      if (event.key !== "Tab") return;

      const focusableElements = Array.from(
        dialog.querySelectorAll<HTMLElement>(
          'button:not([disabled]), a[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])',
        ),
      );

      if (focusableElements.length === 0) {
        event.preventDefault();
        return;
      }

      const firstElement = focusableElements[0];
      const lastElement = focusableElements[focusableElements.length - 1];

      if (event.shiftKey && document.activeElement === firstElement) {
        event.preventDefault();
        lastElement.focus();
      } else if (!event.shiftKey && document.activeElement === lastElement) {
        event.preventDefault();
        firstElement.focus();
      }
    };

    dialog.addEventListener("keydown", handleTabKey);
    return () => dialog.removeEventListener("keydown", handleTabKey);
  }, [activeIndex]);

  function handleCategoryChange(category: string) {
    setActiveCategory(category);
    setActiveIndex(null);
  }

  function showPrevious() {
    setActiveIndex((current) =>
      current === null
        ? current
        : (current - 1 + filteredItems.length) % filteredItems.length,
    );
  }

  function showNext() {
    setActiveIndex((current) =>
      current === null ? current : (current + 1) % filteredItems.length,
    );
  }

  return (
    <>
      <section className="velloria-section bg-[#F5F0E8]">
        <div className="velloria-container">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl">
              <p className="velloria-eyebrow text-[#7C3AED]">
                A visual journey
              </p>

              <h2 className="velloria-display mt-5 text-5xl leading-[0.92] text-[#171717] sm:text-6xl lg:text-7xl">
                Inside the spa&apos;s atmosphere.
              </h2>

              <p className="mt-6 text-sm leading-7 text-[#625A54] sm:text-base sm:leading-8">
                Explore the textures, rituals and atmosphere that shape a
                slower kind of spa experience.
              </p>
            </div>

            <div
              className="flex max-w-full gap-2 overflow-x-auto pb-1 lg:max-w-[50%] lg:justify-end"
              aria-label="Gallery categories"
            >
              {galleryCategories.map((category) => {
                const isActive = activeCategory === category;

                return (
                  <button
                    key={category}
                    type="button"
                    onClick={() => handleCategoryChange(category)}
                    aria-pressed={isActive}
                    className={`shrink-0 rounded-full border px-4 py-2.5 text-xs font-semibold tracking-wide transition-all duration-300 ${
                      isActive
                        ? "border-[#7C3AED] bg-[#7C3AED] text-white"
                        : "border-[#171717]/15 bg-transparent text-[#625A54] hover:border-[#C08457] hover:text-[#7C3AED]"
                    }`}
                  >
                    {category}
                  </button>
                );
              })}
            </div>
          </div>

          <motion.div
            layout
            className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-12"
          >
            <AnimatePresence mode="popLayout">
              {filteredItems.map((item, index) => {
                const featured = item.featured || index === 0;

                return (
                  <motion.button
                    key={item.id}
                    type="button"
                    layout
                    initial={{ opacity: 0, y: 18 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 18 }}
                    transition={{ duration: 0.35 }}
                    onClick={(event) => {
                      activeTriggerRef.current = event.currentTarget;
                      setActiveIndex(index);
                    }}
                    className={`group relative overflow-hidden rounded-[1.75rem] border border-[#C08457]/20 bg-[#171717] text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7C3AED] focus-visible:ring-offset-4 ${
                      featured
                        ? "sm:col-span-2 lg:col-span-7"
                        : "lg:col-span-5"
                    }`}
                  >
                    <div
                      className={`relative overflow-hidden ${
                        featured ? "aspect-[16/11]" : "aspect-[4/5]"
                      }`}
                    >
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        sizes={
                          featured
                            ? "(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 58vw"
                            : "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 42vw"
                        }
                        className="object-cover transition-transform duration-700 group-hover:scale-[1.035]"
                      />

                      <Image
                        src={item.secondaryImage}
                        alt=""
                        aria-hidden="true"
                        fill
                        sizes={
                          featured
                            ? "(max-width: 640px) 100vw, 58vw"
                            : "(max-width: 640px) 100vw, 42vw"
                        }
                        className="object-cover opacity-0 transition-opacity duration-700 ease-in-out group-hover:opacity-100"
                      />

                      <div className="absolute inset-0 bg-gradient-to-t from-[#171717]/85 via-[#171717]/5 to-transparent opacity-75 transition-opacity duration-500 group-hover:opacity-90" />

                      <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6">
                        <div className="flex items-end justify-between gap-4 text-white">
                          <div>
                            <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#F5F0E8]/75">
                              {item.category}
                            </p>

                            <h3 className="velloria-display mt-2 text-3xl leading-none sm:text-4xl">
                              {item.title}
                            </h3>

                            <p className="mt-3 text-xs font-medium text-[#F5F0E8]/70 transition-colors group-hover:text-[#C08457]">
                              Hover to explore · Click to view both
                            </p>
                          </div>

                          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#C08457]/70 bg-[#171717]/30 text-white backdrop-blur-md transition-all duration-300 group-hover:border-[#7C3AED] group-hover:bg-[#7C3AED]">
                            <Maximize2 size={16} strokeWidth={1.5} />
                          </span>
                        </div>
                      </div>
                    </div>
                  </motion.button>
                );
              })}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      <AnimatePresence>
        {activeItem && (
          <motion.div
            ref={dialogRef}
            className="fixed inset-0 z-[100] flex items-center justify-center overflow-y-auto bg-[#171717]/95 p-4 sm:p-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            role="dialog"
            aria-modal="true"
            aria-label={`${activeItem.title} gallery images`}
            onClick={() => setActiveIndex(null)}
          >
            <motion.div
              className="relative flex min-h-full w-full max-w-7xl flex-col items-center justify-center py-12"
              initial={{ scale: 0.96, y: 12 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.96, y: 12 }}
              transition={{ duration: 0.3 }}
              onClick={(event) => event.stopPropagation()}
            >
              <div className="absolute right-0 top-0 z-10">
                <button
                  ref={closeButtonRef}
                  type="button"
                  onClick={() => setActiveIndex(null)}
                  aria-label="Close gallery"
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-[#C08457]/50 bg-white/10 text-white backdrop-blur-md transition-all duration-300 hover:border-[#7C3AED] hover:bg-[#7C3AED]"
                >
                  <X size={20} strokeWidth={1.5} />
                </button>
              </div>

              <div className="grid w-full max-w-6xl grid-cols-1 gap-4 pt-5 md:grid-cols-2">
                <div className="relative aspect-[4/3] overflow-hidden rounded-[1.25rem] border border-[#C08457]/40 bg-[#171717]">
                  <Image
                    src={activeItem.image}
                    alt={activeItem.title}
                    fill
                    sizes="(max-width: 768px) 95vw, 48vw"
                    className="object-contain"
                    priority
                  />
                  <span className="absolute bottom-3 left-3 rounded-full bg-[#171717]/75 px-3 py-1 text-[10px] uppercase tracking-[0.15em] text-[#F5F0E8]">
                    Image one
                  </span>
                </div>

                <div className="relative aspect-[4/3] overflow-hidden rounded-[1.25rem] border border-[#7C3AED]/50 bg-[#171717]">
                  <Image
                    src={activeItem.secondaryImage}
                    alt={`${activeItem.title} — second view`}
                    fill
                    sizes="(max-width: 768px) 95vw, 48vw"
                    className="object-contain"
                  />
                  <span className="absolute bottom-3 left-3 rounded-full bg-[#171717]/75 px-3 py-1 text-[10px] uppercase tracking-[0.15em] text-[#F5F0E8]">
                    Image two
                  </span>
                </div>
              </div>

              <div className="mt-6 flex w-full max-w-6xl items-end justify-between gap-5 text-white">
                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#C08457]">
                    {activeItem.category}
                  </p>

                  <h3 className="velloria-display mt-2 text-3xl sm:text-4xl">
                    {activeItem.title}
                  </h3>

                  <p className="mt-2 max-w-xl text-sm leading-6 text-white/65">
                    {activeItem.description}
                  </p>
                </div>

                <div className="flex shrink-0 items-center gap-2">
                  <button
                    type="button"
                    onClick={showPrevious}
                    aria-label="Previous gallery item"
                    className="flex h-11 w-11 items-center justify-center rounded-full border border-[#C08457]/50 text-white transition-all duration-300 hover:border-[#7C3AED] hover:bg-[#7C3AED]"
                  >
                    <ArrowLeft size={18} strokeWidth={1.5} />
                  </button>

                  <button
                    type="button"
                    onClick={showNext}
                    aria-label="Next gallery item"
                    className="flex h-11 w-11 items-center justify-center rounded-full border border-[#C08457]/50 text-white transition-all duration-300 hover:border-[#7C3AED] hover:bg-[#7C3AED]"
                  >
                    <ArrowRight size={18} strokeWidth={1.5} />
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
