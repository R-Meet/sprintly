import { ArrowRightIcon } from "lucide-react";
import Link from "next/link";

export function About() {
  return (
    <section id="about" className="scroll-mt-24">
      <div className="grid min-h-120 lg:grid-cols-2">
        {/* Empty visual placeholder */}
        <div className="min-h-80 border-y border-border bg-muted/30 lg:border-r" />

        <div className="flex items-center bg-[#102E22] px-8 py-20 text-white md:px-16 lg:px-20">
          <div className="max-w-125">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-emerald-300">
              ABOUT SPRINTLY
            </p>

            <h2 className="mt-7 text-4xl font-medium leading-[1.13] tracking-[-0.045em] md:text-5xl">
              Built for teams that move forward.
            </h2>

            <p className="mt-7 text-sm leading-7 text-white/65 md:text-base">
              We believe great work starts with clarity.
              Sprintly brings structure to your projects and
              helps teams focus on what truly matters.
            </p>

            <Link
              href="#solutions"
              className="mt-9 inline-flex h-11 items-center gap-3 rounded-full border border-white/40 px-5 text-xs font-semibold text-white"
            >
              Discover Sprintly
              <ArrowRightIcon size={15} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}