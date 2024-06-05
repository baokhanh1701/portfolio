"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projects_data = [
  {
    id: "1",
    title: "Weafore - Weather Forecast Project",
    description: "ReactJS, NodeJS, AdaFruitIO with custom IoT kits. Outcome project of HCMUT's Multidisciplinary Project Course.",
    image: "/img/weafore.jpg",
    git_url: "https://github.com/baokhanh1701/weafore-frontend",
    preview_url: "https://weafore-frontend.vercel.app/",
    tag: ["All", "Web"],
  },
  {
    id: "2",
    title: "NKBK Portfolio Website",
    description: "NextJS, TaiwindCSS, TypeScript, Framer Motion. Tutored project to learn the basic of NextJS and Web Design.",
    image: "/img/portfolio.jpg",
    git_url: "https://github.com/baokhanh1701/portfolio",
    preview_url: "portfolio-lilac-alpha-21.vercel.app",
    tag: ["All", "Web"],
  },
  {
    id: "3",
    title: "AVSQ Landing Page",
    description: "Collab on designing and building a website for The Association of Vietnamese Students in Queensland, Australia (AVSQ).",
    image: "/img/avsq.jpg",
    git_url: "/",
    preview_url: "https://www.avsq.info/",
    tag: ["All", "Web"],
  },
  {
    id: "4",
    title: "reCollect - Web app for trading old items",
    description: "GDSC Hackathon 2023 Finalist - Web app for trading or giveaway old items to increase the product's usage lifecycle.",
    image: "/img/recollect.jpg",
    git_url: "/",
    preview_url: "https://recollect-380404.web.app/",
    tag: ["All", "Web"],
  },
  {
    id: "5",
    title: "Event Easier - A Web App for hosting technical events",
    description: "MindX Graduation Project - A Web App for hosting events for developers and students, currently not available for preview.",
    image: "/img/event-easier.jpg",
    git_url: "https://github.com/event-easier",
    preview_url: "/",
    tag: ["All", "Web"],
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (new_tag: string) => {
    setTag(new_tag);
  };

  const filteredProjects = projects_data.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  }
  return (
    <section id="projects" className="lg:pt-16">
      <h2 className="text-center text-4xl font-bold text-white mt-8 mb-4">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClickFunc={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClickFunc={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        {/* <ProjectTag
          onClickFunc={handleTagChange}
          name="Mobile"
          isSelected={tag === "Mobile"}
        /> */}
      </div>
      <ul ref={ref} className="grid gap-8 md:grid-cols-3 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.2, delay: index * 0.1 + 0.2 }}
          >
            <ProjectCard
              key={project.id}
              image_url={project.image}
              title={project.title}
              description={project.description}
              git_url={project.git_url}
              preview_url={project.preview_url}
            />
          </motion.li>

        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
