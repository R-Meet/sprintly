export function ProductStrip() {
  const items = [
    "PROJECT MANAGEMENT",
    "TASK ORGANIZATION",
    "TEAM COLLABORATION",
    "PROGRESS TRACKING",
  ];

  return (
    <section className="border-y border-border">
      <div className="mx-auto flex max-w-360 flex-wrap items-center justify-between gap-x-8 gap-y-5 px-6 py-9 md:px-10 lg:px-12">
        <p className="max-w-32.5 text-[10px] font-bold leading-5 tracking-[0.13em] text-muted-foreground">
          EVERYTHING IN ONE PLACE
        </p>

        {items.map((item) => (
          <div
            key={item}
            className="text-[10px] font-semibold tracking-[0.12em] text-muted-foreground md:text-xs"
          >
            {item}
          </div>
        ))}
      </div>
    </section>
  );
}