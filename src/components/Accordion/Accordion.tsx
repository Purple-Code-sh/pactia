import type { AccordionProps } from "../../types/types";

export default function Accordion({ header, description }: AccordionProps) {
  return (
    <div className="flex flex-col grow w-[17rem] max-w-[22rem] h-[25rem] border p-4 mr-6 mb-6 border-ssTheme-orange minDesktop:border-ssTheme-darkerBlue">
      <div className=" flex-grow-0 bg-ssTheme-blue font-medium ">{header}</div>
      <div className="flex-grow">box with flexible height</div>
      <div className="flex-grow-0 bg-ssTheme-blue">
        <p>{description}</p>
      </div>
    </div>
  );
}
