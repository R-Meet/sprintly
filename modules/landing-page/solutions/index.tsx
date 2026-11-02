export function Solutions() {
  return (
    <section
      id="solutions"
      className="scroll-mt-24 py-28 md:py-36"
    >
      <div className="mx-auto max-w-360 px-6 md:px-10 lg:px-12">
        <div className="grid gap-12 md:grid-cols-2 md:items-end">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.17em] text-primary">
              A BETTER WAY TO WORK
            </p>
            <h2 className="mt-6 max-w-lg text-4xl font-medium leading-tight tracking-[-0.045em] md:text-5xl">
              Less confusion. More meaningful progress.
            </h2>
          </div>

          <p className="max-w-md text-sm leading-7 text-muted-foreground md:justify-self-end">
            From organizing your first project to managing
            an entire team's workload, Sprintly gives everyone
            a shared understanding of what's happening.
          </p>
        </div>

        <div className="mt-16 grid gap-8 border-t pt-8 md:grid-cols-2 lg:grid-cols-4">
          {[
            {
              number: "01",
              title: "Clarity",
              description: "Know what needs to be done and who's responsible.",
            },
            {
              number: "02",
              title: "Ownership",
              description: "Give every task a clear owner and direction.",
            },
            {
              number: "03",
              title: "Alignment",
              description: "Keep your entire team working towards shared goals.",
            },
            {
              number: "04",
              title: "Momentum",
              description: "See progress and keep moving towards completion.",
            },
          ].map((item) => (
            <div key={item.number}>
              <span className="text-xs text-primary">{item.number}</span>
              <h3 className="mt-7 text-xl font-medium tracking-tight">
                {item.title}
              </h3>
              <p className="mt-3 max-w-60 text-sm leading-6 text-muted-foreground">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}