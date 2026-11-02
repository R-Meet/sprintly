import { ArrowRightIcon, BarChart3Icon, CheckCircle2Icon, FolderIcon, TargetIcon, UsersIcon, ZapIcon } from "lucide-react";
import Link from "next/link";

const features = [
  {
    icon: FolderIcon,
    title: "Organize Projects",
    description:
      "Keep your work structured with flexible project management.",
  },
  {
    icon: CheckCircle2Icon,
    title: "Manage Tasks",
    description:
      "Turn goals into actionable tasks and track progress.",
  },
  {
    icon: UsersIcon,
    title: "Collaborate Seamlessly",
    description:
      "Work together with your team and keep everyone aligned.",
  },
  {
    icon: BarChart3Icon,
    title: "Track Progress",
    description:
      "Get insights and stay on top of every milestone.",
  },
  {
    icon: TargetIcon,
    title: "Stay Focused",
    description:
      "Prioritize your work and focus on what matters.",
  },
  {
    icon: ZapIcon,
    title: "Be More Productive",
    description:
      "Achieve more with a streamlined workflow.",
  },
];

export function Features() {
  return (
    <section
      id="features"
      className="scroll-mt-24 py-28 md:py-36"
    >
      <div className="mx-auto grid max-w-360 gap-14 px-6 md:px-10 lg:grid-cols-[0.65fr_1.35fr] lg:gap-20 lg:px-12">
        <div className="max-w-92.5">
          <p className="text-xs font-bold uppercase tracking-[0.17em] text-primary">
            WHY SPRINTLY
          </p>

          <h2 className="mt-6 text-4xl font-medium leading-[1.12] tracking-[-0.045em] md:text-5xl">
            A complete workspace for your team.
          </h2>

          <p className="mt-6 text-sm leading-7 text-muted-foreground">
            Bring projects, tasks and people together in one
            powerful platform. Everything stays organized,
            connected and moving forward.
          </p>

          <Link
            href="/onboard"
            className="mt-8 inline-flex items-center gap-3 text-sm font-semibold text-primary"
          >
            Get started
            <ArrowRightIcon size={16} />
          </Link>
        </div>

        <div className="grid gap-px border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="min-h-55 bg-background p-7 md:p-8"
            >
              <feature.icon
                size={25}
                strokeWidth={1.5}
                className="text-primary"
              />

              <h3 className="mt-9 text-base font-semibold tracking-tight">
                {feature.title}
              </h3>

              <p className="mt-3 text-[13px] leading-6 text-muted-foreground">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}