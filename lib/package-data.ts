// Deprecated fixed categories, keeping for backward compatibility if needed elsewhere,
// but we will use dynamic categories in the package specs instead.
export type SpecCategory = string;

export interface PackageSpec {
  grade: string;
  multiplier: string;
  description: string;
  specs: {
    category: string;
    items: string[];
  }[];
}

export type IndustryType = "residential" | "commercial" | "industrial";

export const packageData: Record<IndustryType, PackageSpec[]> = {
  commercial: [
    {
      grade: "Standard",
      multiplier: "1.0x",
      description: "Focus on durability, functional efficiency, and enterprise baselines.",
      specs: [
        {
          category: "Workspace Layout & Flooring",
          items: [
            "Install commercial-grade porcelain tiles in high-traffic zones",
            "Apply durable epoxy resin in utility corridors",
          ],
        },
        {
          category: "Network & Electrical",
          items: [
            "Implement standard industrial breaker panels",
            "Install energy-efficient LED general lighting",
            "Route baseline structured cabling for workstations",
          ],
        },
        {
          category: "Employee Breakrooms",
          items: [
            "Build modular high-density cabinetry",
            "Fit durable granite countertops",
            "Install standard stainless steel fixtures",
          ],
        },
        {
          category: "Corporate Washrooms",
          items: [
            "Install standard ceramic sanitaryware",
            "Mount baseline brass plumbing fixtures",
            "Apply slip-resistant floor treatments",
          ],
        },
        {
          category: "Acoustics & Finishes",
          items: [
            "Apply 3-coat acrylic latex on interior walls",
            "Install standard acoustic drop-ceilings",
            "Finish with standard MDF baseboards",
          ],
        },
      ],
    },
    {
      grade: "Luxury",
      multiplier: "2.0x",
      description: "Focus on bespoke materials, deep smart-integration, and imported artisanal finishes.",
      specs: [
        {
          category: "Workspace Layout & Flooring",
          items: [
            "Install imported Italian marble slabs in lobbies",
            "Deploy radiant heating system under floorings",
            "Lay wide-plank artisanal solid wood in executive suites",
          ],
        },
        {
          category: "Network & Electrical",
          items: [
            "Integrate full-scale smart office automation (IoT)",
            "Install bespoke architectural light channels",
            "Deploy invisible integrated acoustic speakers",
          ],
        },
        {
          category: "Employee Breakrooms",
          items: [
            "Build bespoke solid hardwood cabinetry",
            "Mount monolithic natural stone island counters",
            "Install professional-grade hidden appliances",
          ],
        },
        {
          category: "Corporate Washrooms",
          items: [
            "Install touchless cast-iron wash stations",
            "Deploy digital thermostatic rain shower systems",
            "Mount back-lit anti-fog smart mirrors",
          ],
        },
        {
          category: "Acoustics & Finishes",
          items: [
            "Apply specialized Venetian plaster techniques",
            "Execute custom architectural wood paneling",
            "Install flush-to-wall integrated baseboards",
          ],
        },
      ],
    },
    {
      grade: "Premium",
      multiplier: "1.4x",
      description: "Focus on high-end fixtures, tactile materials, and architectural enhancements.",
      specs: [
        {
          category: "Workspace Layout & Flooring",
          items: [
            "Lay engineered hardwood in primary office spaces",
            "Install large-format homogeneous stone tiles in lobbies",
          ],
        },
        {
          category: "Network & Electrical",
          items: [
            "Integrate architectural cove and accent lighting",
            "Deploy zoned climate control systems",
            "Install pre-wired security network drops",
          ],
        },
        {
          category: "Employee Breakrooms",
          items: [
            "Fabricate solid quartz break-room countertops",
            "Install soft-close premium drawer hardware",
            "Mount semi-custom hardwood veneer cabinet faces",
          ],
        },
        {
          category: "Corporate Washrooms",
          items: [
            "Fit imported European sanitaryware",
            "Build frameless tempered glass enclosures",
            "Install thermostatic mixer shower columns",
          ],
        },
        {
          category: "Acoustics & Finishes",
          items: [
            "Apply zero-VOC elastomeric wall coatings",
            "Suspend custom acoustic baffles in open areas",
            "Install solid-wood architectural door casings",
          ],
        },
      ],
    },
  ],
  residential: [
    {
      grade: "Standard",
      multiplier: "1.0x",
      description: "Focus on durability, functional efficiency, and essential residential baselines.",
      specs: [
        {
          category: "Living Spaces & Flooring",
          items: [
            "Install standard-grade porcelain tiles in common areas",
            "Apply durable laminate flooring in bedrooms",
            "Fit standard pile carpeting in secondary rooms",
          ],
        },
        {
          category: "Smart Home & Automation",
          items: [
            "Implement standard residential breaker panels",
            "Install energy-efficient LED general lighting",
            "Route baseline coaxial and CAT6 networking",
          ],
        },
        {
          category: "Kitchen & Appliances",
          items: [
            "Build modular standard-density cabinetry",
            "Fit durable granite countertops",
            "Install standard stainless steel fixtures",
          ],
        },
        {
          category: "Master Suites & Baths",
          items: [
            "Install standard ceramic sanitaryware",
            "Mount baseline brass plumbing fixtures",
            "Apply standard waterproof treatments",
          ],
        },
        {
          category: "Exterior & Finishes",
          items: [
            "Apply 3-coat acrylic latex on interior walls",
            "Seal all weather-facing exterior surfaces",
            "Install standard MDF baseboards",
          ],
        },
      ],
    },
    {
      grade: "Luxury",
      multiplier: "2.0x",
      description: "Focus on bespoke materials, deep smart-integration, and luxury finishes.",
      specs: [
        {
          category: "Living Spaces & Flooring",
          items: [
            "Install imported Italian marble slabs",
            "Deploy radiant heating floor systems",
            "Lay wide-plank artisanal solid wood",
          ],
        },
        {
          category: "Smart Home & Automation",
          items: [
            "Integrate full-scale smart home automation (Control4/Savant)",
            "Install bespoke architectural light channels",
            "Deploy invisible integrated acoustic speakers",
          ],
        },
        {
          category: "Kitchen & Appliances",
          items: [
            "Build bespoke solid hardwood cabinetry",
            "Mount monolithic natural stone island counters",
            "Install professional-grade hidden appliances (Sub-Zero/Wolf)",
          ],
        },
        {
          category: "Master Suites & Baths",
          items: [
            "Install freestanding cast-iron soaking tubs",
            "Deploy digital thermostatic rain shower systems",
            "Mount back-lit anti-fog smart mirrors",
          ],
        },
        {
          category: "Exterior & Finishes",
          items: [
            "Apply specialized Venetian plaster techniques",
            "Execute custom architectural oak paneling",
            "Install flush-to-wall integrated baseboards",
          ],
        },
      ],
    },
    {
      grade: "Premium",
      multiplier: "1.4x",
      description: "Focus on high-end fixtures, tactile materials, and residential comfort.",
      specs: [
        {
          category: "Living Spaces & Flooring",
          items: [
            "Lay engineered hardwood in living spaces",
            "Install large-format homogeneous stone tiles in bathrooms",
          ],
        },
        {
          category: "Smart Home & Automation",
          items: [
            "Integrate architectural cove and accent lighting",
            "Deploy smart climate control systems (e.g., Nest/Ecobee)",
            "Install residential security network drops",
          ],
        },
        {
          category: "Kitchen & Appliances",
          items: [
            "Fabricate solid quartz countertops",
            "Install soft-close premium drawer hardware",
            "Mount semi-custom hardwood veneer cabinet faces",
          ],
        },
        {
          category: "Master Suites & Baths",
          items: [
            "Fit imported European sanitaryware",
            "Build frameless tempered glass enclosures",
            "Install thermostatic mixer shower columns",
          ],
        },
        {
          category: "Exterior & Finishes",
          items: [
            "Apply zero-VOC elastomeric wall coatings",
            "Finish with satin-grade enamel window trims",
            "Install solid-wood architectural door casings",
          ],
        },
      ],
    },
  ],
  industrial: [
    {
      grade: "Standard",
      multiplier: "1.0x",
      description: "Focus on maximum durability, functional efficiency, and industrial baselines.",
      specs: [
        {
          category: "Heavy-Duty Surfacing",
          items: [
            "Pour and cure heavy-duty concrete flooring",
            "Apply durable epoxy resin in utility corridors",
            "Install metal grating platforms",
          ],
        },
        {
          category: "Power & HVAC Systems",
          items: [
            "Implement heavy-duty industrial breaker panels",
            "Install energy-efficient high-bay LED lighting",
            "Route robust armored cabling overhead",
          ],
        },
        {
          category: "Control Systems & Safety",
          items: [
            "Deploy baseline industrial fire-suppression sprinklers",
            "Mount standard perimeter security cameras",
            "Install industrial-grade emergency lighting",
          ],
        },
        {
          category: "Utility & Wash Stations",
          items: [
            "Install institutional ceramic sanitaryware",
            "Mount heavy-duty brass plumbing fixtures",
            "Apply maximum-strength slip-resistant treatments",
          ],
        },
        {
          category: "Structural Coatings",
          items: [
            "Apply 3-coat heavy-duty latex on interior walls",
            "Apply anti-corrosion sealant on structural steel",
            "Install high-impact rubber baseboards",
          ],
        },
      ],
    },
    {
      grade: "Luxury",
      multiplier: "2.0x",
      description: "Focus on top-tier materials, comprehensive systems, and premium finishes.",
      specs: [
        {
          category: "Heavy-Duty Surfacing",
          items: [
            "Install premium heavy-traffic terrazzo flooring",
            "Deploy embedded radiant heating systems for warehouse floors",
            "Lay specialized acoustic control flooring in control rooms",
          ],
        },
        {
          category: "Power & HVAC Systems",
          items: [
            "Integrate full-scale industrial plant automation (SCADA)",
            "Install specialized clean-room lighting channels",
            "Deploy comprehensive integrated PA and alert speakers",
          ],
        },
        {
          category: "Control Systems & Safety",
          items: [
            "Deploy specialized chemical fire-suppression systems",
            "Install AI-powered thermal perimeter security grids",
            "Mount integrated environmental air-quality monitors",
          ],
        },
        {
          category: "Utility & Wash Stations",
          items: [
            "Install luxury touchless wash stations and lockers",
            "Deploy digital commercial shower systems for staff",
            "Mount robust anti-fog smart mirrors",
          ],
        },
        {
          category: "Structural Coatings",
          items: [
            "Apply specialized antimicrobial wall finishes",
            "Execute custom metal architectural paneling",
            "Apply advanced polyurea protective coatings",
          ],
        },
      ],
    },
    {
      grade: "Premium",
      multiplier: "1.4x",
      description: "Focus on enhanced materials, advanced systems, and industrial efficiency.",
      specs: [
        {
          category: "Heavy-Duty Surfacing",
          items: [
            "Lay heavy-duty polished concrete with anti-dust seal",
            "Install anti-static raised access flooring in server rooms",
            "Deploy thermal shock resistant urethane floors",
          ],
        },
        {
          category: "Power & HVAC Systems",
          items: [
            "Integrate automated motion-sensing high-bay lighting",
            "Deploy centralized heavy-duty climate control",
            "Install extensive pre-wired network drops on busways",
          ],
        },
        {
          category: "Control Systems & Safety",
          items: [
            "Implement multi-zone dry-pipe fire suppression",
            "Install comprehensive biometric access controls",
            "Deploy automated gas-detection sensors",
          ],
        },
        {
          category: "Utility & Wash Stations",
          items: [
            "Fit automated institutional sanitaryware",
            "Build solid phenolic partition enclosures",
            "Install automated thermostatic mixer columns",
          ],
        },
        {
          category: "Structural Coatings",
          items: [
            "Apply zero-VOC elastomeric industrial coatings",
            "Finish with impact-resistant wall protection",
            "Apply intumescent fireproofing on exposed beams",
          ],
        },
      ],
    },
  ],
};
