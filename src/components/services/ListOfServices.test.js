import { renderWithClient } from "../../tests/utils";
import { ListOfServices } from "./ListOfServices";
import { prettyDOM } from "@testing-library/react";
import { server } from "../../setupTests";
import { rest } from "msw";

describe("<ListOfServices/>", () => {
  test("should render services when fetching services", async () => {
    const view = renderWithClient(
      <ListOfServices>
        <b>Hello leo</b>
      </ListOfServices>
    );
    // console.log(prettyDOM (view.container));
    expect(await view.findByText(/Corte de pelo hombre/)).toBeInTheDocument();
    expect(await view.findByText(/Corte de pelo mujer/)).toBeInTheDocument();
    expect(await view.findByText(/Pintado de uñas/)).toBeInTheDocument();
  });

  test("should render an error message when request fails", async () => {
    server.use(
      rest.get("*", (req, res, ctx) => {
        return res(ctx.status(500));
      })
    );

    const view = renderWithClient(<ListOfServices />);
    expect(await view.findByText(/Error/)).toBeInTheDocument();
  });
});
