import { useState } from "react";

import "./accordionStyle.css";

import type { AccordionProps } from "../../types/types";

export default function Accordion({ title, children }: AccordionProps) {
  const [open, setOpen] = useState(true);

  return (
    <div className="accordion">
      <div className="cardHeader">
        <h3>{title}</h3>

        {/* If "open" state it's true show "Close" text, else show "Open" */}
        <button
          onClick={() => {
            setOpen(!open);
          }}
          className="actionButton"
        >
          {open ? "Close" : "Open"}
        </button>
      </div>

      {/* If "open" state it's true show div with children */}
      {open && <div className="card ">{children}</div>}
    </div>
  );
}
