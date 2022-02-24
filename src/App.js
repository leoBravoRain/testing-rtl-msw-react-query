import { ReactQueryDevtools } from "react-query/devtools";
import { QueryClient, QueryClientProvider } from "react-query";

import { Services } from "./pages/services/Services";

// to start service worker in development mode
// this will intercept the request and return the mock data
if (process.env.NODE_ENV === "development") {
  const { worker } = require("./mocks/browser");
  worker.start();
}

const App = () => {
  
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <Services />
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
};

export default App;
