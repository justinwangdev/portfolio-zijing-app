"use client";
import React, { useState, useRef } from "react";
import ResearchCard from "./ResearchCard";
import ResearchTag from "./ResearchTag";
import { motion, useInView } from "framer-motion";

const researchData = [
  {
    id: 1,
    title: "HIGH ENTROPY NITRIDE",
    description:
      "The Laine group has multiple years of experience in the synthesis of polymer precursors to oxides, nitrides and carbides recently developing simple low temperature synthetic routes to metal nitrides that offers the potential to make large numbers of single source...",
    image: "/imgs/research/1.png",
    tag: ["All", "Current"],
    linkUrl:
      "https://mse.engin.umich.edu/people/talsdad/projects/high-entropy-nitride",
  },
  {
    id: 2,
    title:
      "SILICA-DEPLETED RICE HULL ASH FOR HIGH-PERFORMANCE AND STABLE LI-S BATTERIES",
    description:
      "Unlike current lithium-ion batteries are reaching a limit of ~600 Wh/kg -1 that is insufficient for newer electric vehicles and energy storage systems, lithium-sulfur (Li-S) batteries can offer a high theoretical specific capacity (1675 mAh/g -1 ) and energy density...",
    image: "/imgs/research/2.png",
    tag: ["All", "Current"],
    linkUrl:
      "https://mse.engin.umich.edu/people/talsdad/projects/silica-depleted-rice-hull-ash-for-high-performance-and-stable-li-s-batteries",
  },
  {
    id: 3,
    title:
      "UPCYCLING/VALORIZING A PLENTIFUL AGRICULTURAL WASTE RICE HULL ASH (RHA)",
    description:
      "Global warming provides intense motivation to find ways to supplant commercial-scale CO2 generating processes to offset envisioned catastrophic effects on the environment. Coincidentally, efforts are ongoing to replace fossil fuels, especially coal, with solar, wind and wave sources of energy....",
    image: "/imgs/research/3.png",
    tag: ["All", "Current"],
    linkUrl:
      "https://mse.engin.umich.edu/people/talsdad/projects/upcycling-valorizing-a-plentiful-agricultural-waste-rice-hull-ash-rha",
  },
  {
    id: 4,
    title:
      "INVESTIGATION OF MIXED-METAL OXIDES AND OXYNITRIDE INTERFACES FOR IMPROVED PHOTOCATALYSIS",
    description:
      "Recent efforts involve nitriding metal oxide and mixed-metal oxide nanopowders using a fluidized bed reactor (FBR) at temperatures of 600-1000 °C under NH 3 flow. The nanopowders were produced by Liquid-Feed Flame Spray Pyrolysis (LF-FSP). Reaction conditions in the FBR...",
    image: "/imgs/research/4.png",
    tag: ["All", "Past"],
    linkUrl:
      "https://mse.engin.umich.edu/people/talsdad/projects/investigation-of-mixed-metal-oxides-and-oxynitride-interfaces-for-improved-photocatalysis",
  },
  {
    id: 5,
    title:
      "THERMOPLASTIC EXTRUSION OF CERAMIC PREFORMS FOR TRANSPARENT LASING MEDIA",
    description:
      "Thermoplastic/nanopowder extrusion techniques developed in the Laine group for production of transparent ceramics are ideal for creating near net-shape ceramic monoliths. Extrusion pro-vides low-cost polycrystalline preforms that can then be drawn to single-crystal fiber lasers through laser-heated pedestal growth (LHPG)...",
    image: "/imgs/research/5.png",
    tag: ["All", "Past"],
    linkUrl:
      "https://mse.engin.umich.edu/people/talsdad/projects/thermoplastic-extrusion-of-ceramic-preforms-for-transparent-lasing-media",
  },
  {
    id: 6,
    title:
      "SYNTHESIS OF HIGH SURFACE AREA SILSESQUIOXANE (SQ) GELS TOWARD LOW K DIELECTRIC FILMS",
    description:
      "Energy storage and catalysis is of great importance to solving our energy problems of today and in the future. Silsesquioxanes (SQs) as nanostructured materials have a wide range of potential applications including low-k dielectrics, drug delivery, hydrogen storage, and catalyst...",
    image: "/imgs/research/6.png",
    tag: ["All", "Past"],
    linkUrl:
      "https://mse.engin.umich.edu/people/talsdad/projects/synthesis-of-high-surface-area-silsesquioxane-sq-gels-toward-low-k-dielectric-films",
  },
];

const Research = () => {
  const [tag, setTag] = useState("Current");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredResearch = researchData.filter((research) =>
    research.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section className="text-default-500" id="research">
      <div className="bg-default-100 py-unit-lg">
        <h2 className="text-center text-4xl font-bold text-secondary-500 mt-unit-2xl">
          My Research
        </h2>
        <div className="flex flex-row justify-center items-center gap-2 py-6">
          <ResearchTag
            onClick={handleTagChange}
            name="All"
            isSelected={tag === "All"}
          />
          <ResearchTag
            onClick={handleTagChange}
            name="Current"
            isSelected={tag === "Current"}
          />
          <ResearchTag
            onClick={handleTagChange}
            name="Past"
            isSelected={tag === "Past"}
          />
        </div>
        <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12 mx-unit-xl mb-unit-xl">
          {filteredResearch.map((research, index) => (
            <motion.li
              key={index}
              variants={cardVariants}
              initial="initial"
              animate={isInView ? "animate" : "initial"}
              transition={{ duration: 0.3, delay: index * 0.4 }}
            >
              <ResearchCard
                key={research.id}
                title={research.title}
                description={research.description}
                imgUrl={research.image}
                tags={research.tag}
                linkUrl={research.linkUrl}
              />
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Research;
