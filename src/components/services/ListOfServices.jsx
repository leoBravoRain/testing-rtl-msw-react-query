import { useGetServices } from "../../services/services/services";
import { TitleSection } from "../general/TitleSection";
import { Service } from "./Service";

export const ListOfServices = ({ children }) => {
  const { isLoading, isError, data, error } = useGetServices();

  return (
    <div>
      <TitleSection>
        <h6>New title children</h6>
      </TitleSection>
      {children}
      <ul>
        {!isLoading ? (
          !isError ? (
            data.data.data.map((service) =>
              service ? <Service service={service} key={service.id} /> : null
            )
          ) : (
            <li>Error</li>
          )
        ) : (
          <li>Cargando...</li>
        )}
      </ul>
    </div>
  );
};
