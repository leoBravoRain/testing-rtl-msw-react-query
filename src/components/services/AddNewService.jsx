import { useState } from "react";
import { useAddNewService } from "../../services/services/services";

export const AddNewService = ({ children }) => {
  const [serviceName, setServiceName] = useState("");
  const mutation = useAddNewService();

  const addNewService = () => {
    // do mutation
    mutation.mutate({
      // id: 100,
      name: serviceName,
      worker: {
        id: "test",
        name: "test worker",
      },
    });

  };

  return (
    <div style={{ backgroundColor: "orange", padding: 10 }}>
      <h3>Add New Service</h3>
      <div>
        <label>Service Name</label>
        <input type="text" onChange={(e) => setServiceName(e.target.value)} />
        <button onClick={addNewService}>Agregar</button>
        {mutation.isSuccess && <p>Servicio Agregado: {serviceName}</p>}
        {children}
      </div>
    </div>
  );
};
