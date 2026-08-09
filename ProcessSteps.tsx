import Reveal from "./Reveal";

const STEPS = [
  {
    index: "01",
    name: "Discover",
    description:
      "We begin by listening — to how you live, what the space demands, and what timeless means to you.",
  },
  {
    index: "02",
    name: "Define",
    description:
      "Brief, budget and site constraints are distilled into a clear design direction before a single drawing is made.",
  },
  {
    index: "03",
    name: "Design",
    description:
      "Spatial concept, materials and furnishing are developed together, tested against how the space will actually be used.",
  },
  {
    index: "04",
    name: "Deliver",
    description:
      "We oversee execution to completion, from contractor coordination to the final placement of the last object.",
  },
];

export default function ProcessSteps() {
  return (
    <div>
      {STEPS.map((step, i) => (
        <Reveal key={step.index} delay={i * 0.05}>
          <div className="group hairline flex flex-col gap-4 py-10 transition-colors duration-500 md:flex-row md:items-center md:gap-10 md:py-12">
            <span className="font-display text-lg text-taupe transition-colors duration-500 group-hover:text-bronze md:w-16">
              {step.index}
            </span>
            <h3 className="font-display text-3xl text-ink transition-transform duration-500 md:w-64 md:text-4xl md:group-hover:translate-x-2">
              {step.name}
            </h3>
            <p className="max-w-xl text-[15px] leading-relaxed text-ink/60">
              {step.description}
            </p>
          </div>
        </Reveal>
      ))}
      <div className="hairline" />
    </div>
  );
}
