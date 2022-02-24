import { AddNewService } from "../../components/services/AddNewService";
import { ListOfServices } from "../../components/services/ListOfServices";

export const Services = () => {

  return (
    <>
      <h1>Servicios</h1>
      <AddNewService>
        <div>This is a child component</div>
      </AddNewService>
      <ListOfServices>
        <h1>Esta es otra sección</h1>
      </ListOfServices>
    </>
  );
};
