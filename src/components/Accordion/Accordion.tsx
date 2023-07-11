import type { AccordionProps } from "../../types/types";

export default function Accordion({
  header,
  description,
  action,
}: AccordionProps) {
  return (
    <div className="flex flex-col grow w-[17rem] max-w-[22rem] h-[26rem] bg-white text-sm font-regular border  p-4 mr-6 mb-6 border-ssTheme-orange minDesktop:border-black/10 ">
      <div className=" flex-grow-0 font-semibold text-lg">{header}</div>
      <div className="flex-grow flex items-center justify-center bg-ssTheme-blue my-3">
        image box with flexible height
      </div>
      <div className="flex-grow-0">
        <p className=" mb-3">{description}</p>
        <a
          href="#"
          className=" text-ssTheme-orange hover:text-ssTheme-blue2 hover:underline "
        >
          {action}
        </a>
      </div>
    </div>
  );
}
