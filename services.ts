export type Service = {
  index: string;
  name: string;
  description: string;
};

export const services: Service[] = [
  {
    index: "01",
    name: "Interior Design",
    description:
      "A complete interior scheme — spatial planning, material palette and furnishing — for a single home or a single room.",
  },
  {
    index: "02",
    name: "Full-Service Design",
    description:
      "End-to-end guidance from first concept through to final installation, with a single point of contact throughout.",
  },
  {
    index: "03",
    name: "Spatial Concept",
    description:
      "Architectural and layout strategy for renovations, extensions and structural reconfiguration.",
  },
  {
    index: "04",
    name: "Material & Lighting",
    description:
      "Considered selection of materials, finishes, colour and lighting design tuned to how a space is actually used.",
  },
  {
    index: "05",
    name: "Custom Furniture",
    description:
      "Furniture and joinery designed and produced to measure, built for the proportions of a specific room.",
  },
  {
    index: "06",
    name: "Home Styling",
    description:
      "Final styling — art, textiles, objects and finishing touches — that brings a finished interior to life.",
  },
];
