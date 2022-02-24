import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";
import {TitleSection}  from './TitleSection';

describe("<TitleSection />", () => {
  let view;

  beforeEach(() => {
    view = render(
      <TitleSection>
        <div style={{backgroundColor:'red'}}>testDivContent</div>
      </TitleSection>
    );
  });

  test("should render its children", () => {
    // view.getByText("testDivContent");
    const el = view.getByText("testDivContent");
    expect(el).toHaveStyle("background-color: red")
  });
});
