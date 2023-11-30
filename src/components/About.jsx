"use client";
import React, { useState, useTransition } from "react";
import {Image} from "@nextui-org/react";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>MS in Material Science, University of Michigan</li>
        <li>PHD Candidate in Material Science, University of Michigan</li>
      </ul>
    ),
  },
  {
    title: "Publication",
    id: "publication",
    content: (
      <ul className="list-disc pl-2">
        <li>
          J. J. R.Arias, Z. Zhang, Y. Liu, M.Takahashi, R. Murata, M. Unno,
          N.Yodsin, P. Pimbaotham, S. Jungsuttiwong, M. Paramasivam, J. Azoulay,
          M. Rammo, A. Rebane, R. M. Laine, “Conjugation through Si-O-Si bonds,
          extended examples via SiO0.5/SiO1.5 units. Multiple emissive states in
          violation of Kasha’s Rule. Possible dπ-pπ conjugation,”
        </li>
        <li>
          Z. Zhang, H. Kaehr, R. M. Laine, Polysiloxane copolymers demonstrate
          conjugation through Si-O-Si bonds,” to be submitted
        </li>
      </ul>
    ),
  },
];

const About = () => {
  const [tab, setTab] = useState("education");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-primary-500" id="about">
      <div className="sm:h-screen md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image src="/imgs/about.png" width={500} height={500} alt="about image"/>
        <div className="mt-6 md:mt-0 flex flex-col">
          <h2 className="text-4xl font-bold mb-4 text-primary-500"> About Me </h2>
          <div className="text-base space-y-3 lg:text-lg">
            <p>
              {" "}
              My focus is on the functionalization and polymerization of SQs
              with various conjugated chromophores.{" "}
            </p>
            <p>
              {" "}
              The synthesized polymers/oligomers exhibit conjugation through
              siloxane bonds.{" "}
            </p>
            <p>
              {" "}
              The potential applications of the synthesized SQs as
              semiconducting polymers for FETs and OLEDs are also under
              exploration with collaborative groups.{" "}
            </p>
          </div>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("publication")}
              active={tab === "publication"}
            >
              {" "}
              Publications{" "}
            </TabButton>
          </div>
          <div className="mt-8 text-secondary-600">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
