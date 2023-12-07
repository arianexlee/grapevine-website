import { AssignmentBar } from "../components/AssignmentBar";
import Video from "../imgs/concept.mp4";
import DemoVideo from "../imgs/demo.mp4";
import A1ppt from "../docs/A1.pptx";
import A1pdf from "../docs/A1.pdf";
import A2ppt from "../docs/A2.pptx";
import A2pdf from "../docs/A2.pdf";
import A4ppt from "../docs/A4.pptx";
import A4pdf from "../docs/A4.pdf";
import A5ppt from "../docs/A5.pptx";
import A5pdf from "../docs/A5.pdf";
import A6ppt from "../docs/A6.pptx";
import A6pdf from "../docs/A6.pdf";
import A8ppt from "../docs/A8.pptx";
import A8pdf from "../docs/A8.pdf";
import A10ppt from "../docs/A10.pptx";
import A10pdf from "../docs/A10.pdf";
import A6README from "../docs/A6-README.pdf";
import scriptpdf from "../docs/script.pdf";
import posterpdf from "../docs/poster.pdf";
import A8README from "../docs/A8-README.pdf";
import A9pdf from "../docs/A9.pdf";

export function ProcessSection() {
  const assignmentData = [
    {
      title: "A1: Needfinding",
      links: [
        {
          id: 1,
          text: "ppt",
          link: A1ppt,
        },
        {
          id: 2,
          text: "pdf",
          link: A1pdf,
        },
      ],
    },
    {
      title:
        "A2: Additional Needfinding, POVs, HMWs, Brainstorming & Experience Prototypes",
      links: [
        {
          id: 1,
          text: "ppt",
          link: A2ppt,
        },
        {
          id: 2,
          text: "pdf",
          link: A2pdf,
        },
      ],
    },
    {
      title: "A4: Concept Video",
      links: [
        {
          id: 1,
          text: "mp4",
          link: Video,
        },
        {
          id: 2,
          text: "youtube",
          link: "https://www.youtube.com/watch?v=lRh_K2XxQLI",
        },
        {
          id: 3,
          text: "ppt",
          link: A4ppt,
        },
        {
          id: 4,
          text: "pdf",
          link: A4pdf,
        },
      ],
    },
    {
      title: "A5: Sketching, Low-Fi Prototyping & Usability Testing",
      links: [
        {
          id: 1,
          text: "ppt",
          link: A5ppt,
        },
        {
          id: 2,
          text: "pdf",
          link: A5pdf,
        },
      ],
    },
    {
      title: "A6: Interactive Medium-fi Prototype",
      links: [
        {
          id: 1,
          text: "README",
          link: A6README,
        },
        {
          id: 2,
          text: "figma",
          link: "https://www.figma.com/proto/kYvHrnqoLD0qnNdP5VA7Fs/Grapevine-(Copy)?page-id=0%3A1&type=design&node-id=1467-14731&viewport=9005%2C-1246%2C0.47&t=ctno9AfaTkxUHHDy-9&scaling=scale-down&starting-point-node-id=1467%3A14731&show-proto-sidebar=1",
        },
        {
          id: 3,
          text: "ppt",
          link: A6ppt,
        },
        {
          id: 4,
          text: "pdf",
          link: A6pdf,
        },
      ],
    },
    {
      title: "A8: Interactive High-fi Prototype",
      links: [
        {
          id: 1,
          text: "README",
          link: A8README,
        },
        {
          id: 2,
          text: "prototype link",
          link: "https://www.figma.com/proto/kYvHrnqoLD0qnNdP5VA7Fs/Grapevine-(Copy)?page-id=0%3A1&type=design&node-id=1467-14731&viewport=9005%2C-1246%2C0.47&t=ctno9AfaTkxUHHDy-9&scaling=scale-down&starting-point-node-id=1467%3A14731&show-proto-sidebar=1",
        },
        {
          id: 3,
          text: "ppt",
          link: A8ppt,
        },
        {
          id: 4,
          text: "pdf",
          link: A8pdf,
        },
      ],
    },
    {
      title: "A9: Heuristic Evaluation Synthesis ",
      links: [
        {
          id: 1,
          text: "pdf",
          link: A9pdf,
        },
      ],
    },
    {
      title: "A10: Poster, Pitch & Demo Video",
      links: [
        {
          id: 1,
          text: "mp4",
          link: DemoVideo,
        },
        {
          id: 2,
          text: "youtube",
          link: "https://youtu.be/Ko--GuLZMxI",
        },
        {
          id: 3,
          text: "slides ppt",
          link: A10ppt,
        },
        {
          id: 4,
          text: "slides pdf",
          link: A10pdf,
        },
        {
          id: 5,
          text: "script",
          link: scriptpdf,
        },
        {
          id: 6,
          text: "poster figma",
          link: "https://www.figma.com/file/hmIURsDWNeX8lXYgE1Bdxl/Grapevine-Poster?type=design&node-id=0%3A1&mode=design&t=ClYWNEge8eaHwVI2-1",
        },
        {
          id: 6,
          text: "poster pdf",
          link: posterpdf,
        },
      ],
    },
    {
      title: "A11: Final Report",
      links: [
        {
          id: 1,
          text: "docx",
          link: A6README,
        },
        {
          id: 2,
          text: "pdf",
          link: A6README,
        },
      ],
    },
  ];

  return (
    <div className="w-full px-[60px] py-20 md:px-[110px] " id="process">
      <h1 className="font-chivo text-3xl">PROCESS</h1>
      {assignmentData.map((item) => (
        <AssignmentBar title={item.title} links={item.links} key={item.title} />
      ))}
    </div>
  );
}
