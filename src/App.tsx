import React from "react";
import { ThemeProvider } from "styled-components";

import { GlobalStyles, globalTheme } from "./theme";
import { Layout } from "./layout";
import { Dashboard } from "./pages";

const App = () => {
  return (
    <ThemeProvider theme={globalTheme}>
      <GlobalStyles />
      <Layout>
        <Dashboard />
      </Layout>
    </ThemeProvider>
  );
};

export default App;
