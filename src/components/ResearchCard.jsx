import React from "react";
import { Link } from "@nextui-org/react";
import { LinkIcon } from "@heroicons/react/24/outline";

const ResearchCard = ({ imgUrl, title, description, tag, linkUrl }) => {
  return (
    <div>
      <div
        className="h-72 rounded-t-xl relative group border-secondary-500 border-2 border-b-0"
        style={{ background: `url(${imgUrl})`, backgroundSize: "cover" }}
      >
        <div className="overlay items-center justify-center absolute top-0 left-0 w-full h-full bg-default-300 bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-80 transition-all duration-500">
          <Link
            href={linkUrl}
            rel="noopener noreferrer"
            target="_blank"
            className="h-14 w-14 border-2 relative rounded-full border-secondary-500 hover:border-white group/link"
          >
            <LinkIcon className="h-10 w-10 text-secondary-500 absolute transform top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 cursor-pointer group-hover/link:text-white" />
          </Link>
        </div>
      </div>
      <div className="text-background rounded-b-xl bg-secondary-500 py-6 px-4">
        <h5 className="tont-xl font-semibold mb-2 line-clamp-2 md:line-clamp-4">
          {title}
        </h5>
        <p className="text-background line-clamp-2 md:line-clamp-4">
          {description}
        </p>
      </div>
    </div>
  );
};

export default ResearchCard;
