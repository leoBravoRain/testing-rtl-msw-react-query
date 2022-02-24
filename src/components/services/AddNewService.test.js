import { renderWithClient } from "../../tests/utils";
import { AddNewService } from "./AddNewService";
import { fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { prettyDOM } from "@testing-library/dom";

describe("<AddNewService/>", () => {
  test("should display new service when it's created", async () => {
    const view = renderWithClient(<AddNewService />);

    const serviceName = "test service";

    // input service name
    userEvent.type(view.getByRole("textbox"), serviceName);

    // get button and simulate add new service click
    userEvent.click(view.getByRole("button", { name: /agregar/i }));

    // check if new service is rendered
    expect(await view.findByText(/Servicio Agregado: /)).toBeInTheDocument();

  });
});
