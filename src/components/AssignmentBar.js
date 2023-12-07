import React from "react";
export function AssignmentBar({ title, links }) {
  const AssignmentLink = ({ id, text, link }) => {
    return (
      <div key={id}>
        <a
          href={link}
          target="_blank"
          rel="noreferrer"
          className="underline leading-9"
          download
        >
          {text}
        </a>
      </div>
    );
  };

  return (
    <div className="w-full py-[40px] border-b-4 border-black">
      <div className="flex flex-col gap-4 sm:flex-row justify-between">
        <h1 className="font-sans text-lg font-bold ">{title}</h1>
        <div className="flex flex-row flex-wrap space-x-10 items-center justify-center">
          {links.map((item) => (
            <AssignmentLink
              key={item.id}
              id={item.id}
              text={item.text}
              link={item.link}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
