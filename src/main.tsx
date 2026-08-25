import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { ConfigProvider } from "antd";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "#163a19",
          borderRadius: 8,
        },
        components: {
          Input: {
            borderRadius: 999,
          },
          Checkbox: {
            borderRadius: 4,
          },
        },
      }}
    >
      <App />
    </ConfigProvider>
  </StrictMode>,
);
