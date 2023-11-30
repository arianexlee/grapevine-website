import { AssignmentBar } from "../components/AssignmentBar";
import Video from "../imgs/concept.mp4";
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
import A6README from "../docs/A6-README.pdf";
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
          link: Video,
        },
        {
          id: 2,
          text: "youtube",
          link: "https://www.canva.com/design/DAFzbkW1HQM/E2a1D9B1ZKRLCnTk70jbzg/edit?utm_content=DAFzbkW1HQM&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton",
        },
        {
          id: 3,
          text: "slides ppt",
          link: A5ppt,
        },
        {
          id: 4,
          text: "slides pdf",
          link: A5pdf,
        },
        {
          id: 5,
          text: "script",
          link: A6README,
        },
        {
          id: 6,
          text: "poster docx",
          link: A6README,
        },
        {
          id: 6,
          text: "poster pdf",
          link: A6README,
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
