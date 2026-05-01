export type SpecCategory = "Flooring" | "Electrical & Smart Tech" | "Kitchen/Pantry" | "Bathrooms" | "Paint/Finishing";

export interface PackageSpec {
  grade: string;
  multiplier: string;
  description: string;
  specs: Record<SpecCategory, string[]>;
}

export const packageData: PackageSpec[] = [
  {
    grade: "Standard",
    multiplier: "1.0x",
    description: "Focus on durability, functional efficiency, and enterprise baselines.",
    specs: {
      Flooring: ["Install commercial-grade porcelain tiles", "Apply durable epoxy resin in utility corridors"],
      "Electrical & Smart Tech": [
        "Implement standard industrial breaker panels",
        "Install energy-efficient LED general lighting",
        "Route baseline structured cabling",
      ],
      "Kitchen/Pantry": [
        "Build modular high-density cabinetry",
        "Fit durable granite countertops",
        "Install standard stainless steel fixtures",
      ],
      Bathrooms: [
        "Install standard ceramic sanitaryware",
        "Mount baseline brass plumbing fixtures",
        "Apply slip-resistant floor treatments",
      ],
      "Paint/Finishing": [
        "Apply 3-coat acrylic latex on interior walls",
        "Seal all weather-facing exterior surfaces",
        "Install standard MDF baseboards",
      ],
    },
  },
  {
    grade: "Premium",
    multiplier: "1.4x",
    description: "Focus on high-end fixtures, tactile materials, and architectural enhancements.",
    specs: {
      Flooring: ["Lay engineered hardwood in primary spaces", "Install large-format homogeneous stone tiles"],
      "Electrical & Smart Tech": [
        "Integrate architectural cove and accent lighting",
        "Deploy zoned climate control systems",
        "Install pre-wired security network drops",
      ],
      "Kitchen/Pantry": [
        "Fabricate solid quartz countertops",
        "Install soft-close premium drawer hardware",
        "Mount semi-custom hardwood veneer cabinet faces",
      ],
      Bathrooms: [
        "Fit imported European sanitaryware",
        "Build frameless tempered glass enclosures",
        "Install thermostatic mixer shower columns",
      ],
      "Paint/Finishing": [
        "Apply zero-VOC elastomeric wall coatings",
        "Finish with satin-grade enamel window trims",
        "Install solid-wood architectural door casings",
      ],
    },
  },
  {
    grade: "Luxury",
    multiplier: "2.0x",
    description: "Focus on bespoke materials, deep smart-integration, and imported artisanal finishes.",
    specs: {
      Flooring: [
        "Install imported Italian marble slabs",
        "Deploy radiant heating floor systems",
        "Lay wide-plank artisanal solid wood",
      ],
      "Electrical & Smart Tech": [
        "Integrate full-scale smart home/office automation",
        "Install bespoke architectural light channels",
        "Deploy invisible integrated acoustic speakers",
      ],
      "Kitchen/Pantry": [
        "Build bespoke solid hardwood cabinetry",
        "Mount monolithic natural stone island counters",
        "Install professional-grade hidden appliances",
      ],
      Bathrooms: [
        "Install freestanding cast-iron soaking tubs",
        "Deploy digital thermostatic rain shower systems",
        "Mount back-lit anti-fog smart mirrors",
      ],
      "Paint/Finishing": [
        "Apply specialized Venetian plaster techniques",
        "Execute custom architectural wood paneling",
        "Install flush-to-wall integrated baseboards",
      ],
    },
  },
];
