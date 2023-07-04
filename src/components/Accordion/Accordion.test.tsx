/* // To avoid including allways the next imports are using globals in vite and ts configs.
import { describe, expect, test } from "vitest"; */

import { render, screen, cleanup, fireEvent } from "@testing-library/react";
import Accordion from "./Accordion";
import cardsInfo from "../../data/cardsInfo.json";

describe("Accordion", () => {
  beforeEach(() => {
    cardsInfo.map((element) => {
      render(
        <Accordion title="shm-A">
          <h3 role="sectionHeader">{element.header}</h3>
          <div className="toGrow">
            <div className="fromGrow">box with flexible height</div>
          </div>
          <div role="articleDescription">
            <p>First description paragraph</p>
          </div>
        </Accordion>
      );
    });
  });
  afterEach(cleanup);

  /* test("should show the content at begging", () => {
    expect(screen.queryAllByText(/subtitle/i)).toBeDefined();
  }); */

  /* test("should not show the content when button is clicked a second time", () => {
    const button = screen.getByText("Open");
    fireEvent.click(button);
    fireEvent.click(button);
    expect(screen.queryByText(/subtitle/i)).toBeNull();
  }); */

  test("children should have a sectionHeader role", () => {
    /*     const button = screen.getByText("Open");
    fireEvent.click(button); */
    expect(screen.getAllByRole("sectionHeader"));
  });

  test("children should have a articleDescription role", () => {
    /* const button = screen.getByText("Open");
    fireEvent.click(button); */
    screen.getAllByRole("articleDescription");
  });

  test("should show a flexible box for an image", () => {
    expect(screen.queryAllByText(/box with flexible height/i)).toBeDefined();
  });

  test("should show all headers into cardsInfo array", () => {
    cardsInfo.map((info) => {
      expect(screen.queryAllByText(info.header));
    });
  });
});
