/* // To avoid including allways the next imports are using globals in vite and ts configs.
import { describe, expect, test } from "vitest"; */

import { render, screen, cleanup, fireEvent } from "@testing-library/react";
import Accordion from "./Accordion";

describe("Accordion", () => {
  beforeEach(() => {
    render(
      <Accordion title="shm-A">
        <h4>Subtitle</h4>
        <span>Some other content</span>
      </Accordion>
    );
  });
  afterEach(cleanup);

  test("should render the component and show title", () => {
    expect(screen.getByText("shm-A")).toBeDefined();
  });

  test("should not show the content at begging", () => {
    expect(screen.queryByText(/subtitle/i)).toBeNull();
  });

  test("should show the content when button is clicked", () => {
    const button = screen.getByText("Open");
    fireEvent.click(button);
    expect(screen.queryByText(/subtitle/i)).toBeDefined();
  });

  test("should show the content when button is clicked", () => {
    const button = screen.getByText("Open");
    fireEvent.click(button);
    fireEvent.click(button);
    expect(screen.queryByText(/subtitle/i)).toBeNull();
  });
});
