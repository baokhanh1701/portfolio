import React from "react";
import { CodeBracketIcon, EyeIcon } from "@heroicons/react/16/solid";
import Link from "next/link";

const ProjectCard = ({
  image_url,
  title,
  description,
  git_url,
  preview_url
}: {
  image_url: string;
  title: string;
  description: string;
  git_url: string;
  preview_url: string;
}) => {
  return (
    <div>
      <div
        className="h-52 md:h-72 rounded-t-xl relative group"
        style={{
          background: `url(${image_url})`,
          backgroundSize: "cover",
        }}
      >
        <div className="overlay items-center justify-center absolute top-0 left-0 w-full h-full bg-[#181818] bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-90 duration-500 transition-all">
          <Link href={git_url} className="h-14 w-14 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link mr-2">
            <CodeBracketIcon className="h-10 w-10 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group-hover/link:text-white" />
          </Link>
          <Link href={preview_url} className="h-14 w-14 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link">
            <EyeIcon className="h-10 w-10 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group-hover/link:text-white" />
          </Link>
        </div>
      </div>
      <div className="text-white rounded-b-xl mt-3 bg-[#181818] py-6 px-4">
        <h5 className="font-xl font-semibold">{title}</h5>
        <p className="text-[#ADB7BE]">{description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
