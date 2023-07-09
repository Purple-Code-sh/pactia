import type { AccordionProps } from "../../types/types";

export default function Accordion({ header, description }: AccordionProps) {
  return (
    <div className="accordion w-fit max-w-[23rem] desktop:max-w-[18rem] h-fit min-h-[20rem] max-h-96 border p-4 border-ssTheme-orange flex flex-col">
      <div className=" flex-none">{header}</div>
      <div className="flex-grow">
        <div>box with flexible height</div>
      </div>
      <div className="flex-none">
        <p>{description}</p>
      </div>
    </div>
  );
}
