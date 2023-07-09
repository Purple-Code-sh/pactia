import type { AccordionProps } from "../../types/types";

export default function Accordion({ header, description }: AccordionProps) {
  return (
    <div className=" grow w-[17rem] max-w-[22rem] max-h-96 border p-4  mr-6 mb-6 border-ssTheme-orange minDesktop:border-ssTheme-darkerBlue flex flex-col">
      <div className=" flex-grow-0">{header}</div>
      <div className="flex-grow">
        <div>box with flexible height</div>
      </div>
      <div className="flex-grow-0">
        <p>{description}</p>
      </div>
    </div>
  );
}
