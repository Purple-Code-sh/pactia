/* // To avoid including allways the next imports are using globals in vite and ts configs.
import { describe, expect, test } from "vitest"; */

import { render, screen } from "@testing-library/react";
import Accordion from "./Accordion";

describe("Accordion", () => {
  test("should render the component", () => {
    render(
      <Accordion title="shm-A">
        <h2>Subtitle</h2>
        <span>Some other content</span>
      </Accordion>
    );
    expect(screen.getByText("shm-A")).toBeDefined();
  });
});
