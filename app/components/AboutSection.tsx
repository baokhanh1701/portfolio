"use client";
import React, { useTransition, useState, useRef } from "react";
import Image from "next/image";
import TabButton from "./TabButton";
import { motion, useInView } from "framer-motion";

const tab_data = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>NodeJS</li>
        <li>React</li>
        <li>NextJS</li>
        <li>TypeScript</li>
        <li>PostgreSQL</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>MindX Technology School</li>
        <li>Ho Chi Minh University of Technology</li>
        <li>Le Hong Phong High School for the Gifted</li>
      </ul>
    ),
  },
  {
    title: "Certificates",
    id: "certificates",
    content: (
      <ul className="list-disc pl-2">
        <li>Fullstack Developer Certificate - MindX Technology School</li>
        <li> Top 100 National Excellent Students of FPT Telecom - Nextgen Leaders 2024</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const aboutRef = useRef(null)
  const [isPending, startTransition] = useTransition();
  const isAboutInView = useInView(aboutRef, { once: true });
  const handleTabChange = (id: string) => {
    startTransition(() => {
      setTab(id);
    });
  };
  return (
    <section id="about" className="lg:pt-16">
      <div ref={aboutRef} className="grid sm:grid-cols-1 lg:grid-cols-2 gap-8 items-center py-16 px-4 xl:gap-16 sm:py-16">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={isAboutInView ? { opacity: 1, scale: 1 } : "initial"}
          transition={{ duration: 0.5 }}
        >
          <Image alt="nkbk" src="/nkbk.jpeg" width={500} height={500} />
        </motion.div>
        <motion.div
          initial={{ x: 50, opacity: 0 }}
          animate={isAboutInView ? { opacity: 1, x: 0 } : "initial"}
          transition={{ duration: 0.5 }}
          className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-white text-center text-4xl font-bold mb-4">About Me</h2>
          <p className="text-white text-base md:text-lg text-pretty">
            As a dedicated and detail-oriented university undergraduate majoring in Computer Science and with 1 year of experience in SWE,
            I have my passion towards SWE, Data Analysis, Business Integration, and Scrum/Agile project management.
            With a keen interest in creating impactful products, I thrive in collaborative team environments.
          </p>
          <div className="flex flex-row justify-start mt-8 text-white">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certificates")}
              active={tab === "certificates"}
            >
              {" "}
              Certificates{" "}
            </TabButton>
          </div>
          <div className="mt-8">
            {tab_data.find((item) => item.id === tab)?.content}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
