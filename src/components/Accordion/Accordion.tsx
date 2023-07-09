import type { AccordionProps } from "../../types/types";

export default function Accordion({
  header,
  howGrow,
  description,
}: AccordionProps) {
  return (
    <div className="accordion w-fit h-fit max-h-96 border border-ssTheme-orange ">
      {header}
      <div className="toGrow">
        <div className={howGrow}>box with flexible height</div>
      </div>
      <div role="articleDescription">
        <p>{description}</p>
      </div>
    </div>
  );
}
