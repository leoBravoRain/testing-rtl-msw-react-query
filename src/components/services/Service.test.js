import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { fireEvent, prettyDOM } from "@testing-library/react";
import { render } from "@testing-library/react";
import { Service } from "./Service";

describe("<Service />", () => {
    
  test("should render the service", async () => {
    const service = {
      id: "1",
      name: "Service 1",
      worker: {
        id: "1",
        name: "Worker 1",
      },
    };

    const view = render(<Service service={service} />);

    // console.log(view.container);

    // const b = view.container.querySelector("div");
    // console.log(prettyDOM(b));

    // Implicit assertion
    view.getByText(service.name);

    // explicit assertion
    // expect(view.container).toHaveTextContent(service.name);
  });


  test("should execute function when click on button", () => {
    const service = {
      id: "1",
      name: "Service 1",
      worker: {
        id: "1",
        name: "Worker 1",
      },
    };

    const mockHandler = jest.fn();

    const view = render(
      <Service service={service} onClickButton={mockHandler} />
    );

    const button = view.getByText("Ver detalles");

    // console.log(prettyDOM(button));

    fireEvent.click(button);

    // expect(mockHandler.mock.calls).toHaveLength(1);
    expect(mockHandler).toHaveBeenCalledTimes(1);

  })
});
