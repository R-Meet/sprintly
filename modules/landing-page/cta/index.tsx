import { ArrowRightIcon } from "lucide-react";
import Link from "next/link";

export function CTA() {
  return (
    <section className="px-6 pb-24 md:px-10 lg:px-12">
      <div className="mx-auto max-w-360 bg-primary px-7 py-16 text-primary-foreground md:px-16 md:py-20">
        <div className="flex flex-col justify-between gap-10 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.17em] text-primary-foreground/70">
              YOUR NEXT CHAPTER STARTS HERE
            </p>

            <h2 className="mt-6 text-4xl font-medium leading-tight tracking-[-0.045em] md:text-5xl">
              Make room for better work.
            </h2>

            <p className="mt-5 max-w-lg text-sm leading-7 text-primary-foreground/75">
              Get your projects organized, bring your team
              together and start making progress with Sprintly.
            </p>
          </div>

          <Link
            href="/onboard"
            className="inline-flex h-12 shrink-0 items-center gap-3 self-start rounded-full bg-background px-6 text-sm font-semibold text-foreground md:self-auto"
          >
            Create your workspace
            <ArrowRightIcon size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}
