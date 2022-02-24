import { API } from "../api";
import { useMutation, useQuery, useQueryClient } from "react-query";

const getServicesFromAPI = () => {
  return API.get("/services");
};

export const useGetServices = () =>
  useQuery("getServices", getServicesFromAPI, {
    cacheTime: 5000,
    onSuccess: () => console.log("query done"),
    onError: (err) => console.error(err),
  });

// add new service
const addNewServiceToAPI = (service) => {
  return API.post("/services", service);
};

export const useAddNewService = (service) => {

  // to use to invalidate query
  const queryClient = useQueryClient();

  // mutation itself
  return useMutation((service) => addNewServiceToAPI(service), {
    onSuccess: () => {
      // invalidate to refetch datas
      queryClient.invalidateQueries("getServices");
    },
    onError: (err) => console.error("error with mutation", err),
  });
};
