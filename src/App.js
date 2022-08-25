import React from "react";

import Header from "./components/Header/Header";
import Content from "./components/Content/Content";
import Footer from "./components/Footer/Footer";
import Paper from "@material-ui/core/Paper";

const styles = {
  paperContainer: {
      backgroundImage: `url(${"images/background.webp"})`,
      width : "100%",
      height : "100%"
  }
};

function App() {
  return (
    <Paper style={styles.paperContainer}>
  
      <Header />
      <Content />
      <Footer />
   
    </Paper>
  );
}

export default App;
