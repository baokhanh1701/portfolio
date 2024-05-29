"use client";
import React, { useState } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";

const projects_data = [
  {
    id: "1",
    title: "Project 1",
    description: "Project 1 description",
    image: "https://picsum.photos/200/300",
    git_url: "/",
    preview_url: "/",
    tag: ["All", "Web"],
  },
  {
    id: "2",
    title: "Project 2",
    description: "Project 2 description",
    image: "https://picsum.photos/200/300",
    git_url: "/",
    preview_url: "/",
    tag: ["All", "Web"],
  },
  {
    id: "3",
    title: "Project 3",
    description: "Project 3 description",
    image: "https://picsum.photos/200/300",
    git_url: "/",
    preview_url: "/",
    tag: ["All", "Mobile"],
  },
  {
    id: "4",
    title: "Project 4",
    description: "Project 4 description",
    image: "https://picsum.photos/200/300",
    git_url: "/",
    preview_url: "/",
    tag: ["All", "Web"],
  },
  {
    id: "5",
    title: "Project 4",
    description: "Project 4 description",
    image: "https://picsum.photos/200/300",
    git_url: "/",
    preview_url: "/",
    tag: ["All", "Mobile"],
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");

  const handleTagChange = (new_tag: string) => {
    setTag(new_tag);
  };

  const filteredProjects = projects_data.filter((project) =>
    project.tag.includes(tag)
  );
  return (
    <div>
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-4">
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
        <ProjectTag
          onClickFunc={handleTagChange}
          name="Mobile"
          isSelected={tag === "Mobile"}
        />
      </div>
      <div className="grid gap-8 md:grid-cols-3 md:gap-12">
        {filteredProjects.map((project, index) => (
          <ProjectCard
            key={index}
            image_url={project.image}
            title={project.title}
            description={project.description}
            git_url={project.git_url}
            preview_url={project.preview_url}
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectsSection;
