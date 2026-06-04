// src/main.tsx
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "@computas/designsystem/global-styles.css";
import { addIcons } from "@computas/designsystem/icon";
import {
  bin,
  download,
  time,
  calendar,
  edit,
  location,
  laptop,
  star,
  book,
  down,
  chess,
  soccer,
  beer,
  close,
} from "@computas/designsystem/icon/iconRegistry";
import "./index.css"; // Optional: Global styles

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

addIcons(
  bin,
  download,
  time,
  calendar,
  edit,
  location,
  laptop,
  star,
  book,
  down,
  chess,
  soccer,
  beer,
  close,
);

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  </React.StrictMode>,
);
