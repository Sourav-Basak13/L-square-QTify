import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router";
import MuiThemeProvider from "./mui-theme/MuiThemeProvider";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import EventListener from "./components/EventListener/EventListener";
import { Toaster } from "sonner";

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      refetchOnMount: true,
      refetchOnReconnect: true,
      retry: 0,
    },
  },
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <MuiThemeProvider>
          <Toaster position="top-center" />
          <EventListener />
          <App />
        </MuiThemeProvider>
      </QueryClientProvider>
    </BrowserRouter>
  </React.StrictMode>
);
