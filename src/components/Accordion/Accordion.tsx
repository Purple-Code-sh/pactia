import React, { useState } from "react";

import "./accordionStyle.css";

type AccordionProps = {
  title: string;
  children: React.ReactNode;
};

export default function Accordion({ title, children }: AccordionProps) {
  const [open, setOpen] = useState(false);

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
