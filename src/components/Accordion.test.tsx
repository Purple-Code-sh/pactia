/* // To avoid including allways the next imports are using globals in vite and ts configs.
import { describe, expect, test } from "vitest"; */

import { render, screen, cleanup } from "@testing-library/react";
import Accordion from "./Accordion";

describe("Accordion", () => {
  beforeEach(() => {
    render(
      <Accordion title="shm-A">
        <h2>Subtitle</h2>
        <span>Some other content</span>
      </Accordion>
    );
  });
  afterEach(cleanup);

  test("should render the component", () => {
    expect(screen.getByText("shm-B")).toBeDefined();
  });
});
