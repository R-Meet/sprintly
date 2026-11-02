import { ArrowRightIcon, ArrowUpRightIcon } from "lucide-react";
import Link from "next/link";

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Subtle geometric background */}
      <div className="pointer-events-none absolute right-0 top-0 -z-10 h-full w-[48%] bg-primary/[0.035]" />
      <div className="pointer-events-none absolute -right-20 -top-40 -z-10 h-137.5 w-137.5 rounded-full bg-primary/[0.07] blur-[100px]" />

      <div className="mx-auto grid max-w-360 items-center gap-14 px-6 py-24 md:px-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-12 lg:px-12 lg:py-32">
        {/* Hero content */}
        <div className="max-w-142.5">
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-primary/20 px-3 py-1.5">
            <span className="size-1.5 rounded-full bg-primary" />
            <span className="text-[11px] font-semibold tracking-wide">
              BUILT FOR MODERN TEAMS
            </span>
          </div>

          <h1 className="text-[clamp(3.25rem,5.4vw,5.3rem)] font-medium leading-[1.04] tracking-[-0.065em]">
            Plan.
            <br />
            Collaborate.
            <br />
            <span className="text-primary">Achieve more.</span>
          </h1>

          <p className="mt-8 max-w-115 text-base leading-8 text-muted-foreground md:text-lg">
            Sprintly helps teams stay organized, move faster,
            and turn ideas into meaningful progress.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-6">
            <Link
              href="/onboard"
              className="inline-flex h-12 items-center gap-3 rounded-full bg-primary px-7 text-sm font-semibold text-primary-foreground"
            >
              Get Started Free
              <ArrowRightIcon size={16} />
            </Link>

            <Link
              href="#features"
              className="inline-flex items-center gap-2 text-sm font-semibold"
            >
              Explore Product
              <ArrowUpRightIcon size={16} />
            </Link>
          </div>

          <div className="mt-12 flex items-center gap-4 border-t pt-6">
            <div className="flex -space-x-2">
              {["M", "A", "J"].map((letter) => (
                <div
                  key={letter}
                  className="flex size-8 items-center justify-center rounded-full border-2 border-background bg-muted text-xs font-semibold"
                >
                  {letter}
                </div>
              ))}
            </div>

            <p className="text-xs leading-5 text-muted-foreground">
              Bring your projects and people
              <br />
              together in one workspace.
            </p>
          </div>
        </div>

        {/* Empty product preview placeholder */}
        <div className="relative w-full">
          <div className="aspect-[1.2/0.9] w-full rounded-2xl border border-border bg-muted/30 shadow-sm" />
        </div>
      </div>
    </section>
  );
}