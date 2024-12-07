import { useEffect } from "react";
import AddToDoForm from "./AddToDoForm";
import BackgroundHeading from "./BackgroundHeading";
import Container from "./Container";
import Footer from "./Footer";
import Header from "./Header";
import ListContainer from "./ListContainer";
import { usetodoAppStore } from "../stores/todoAppStore";

function App() {
  const darkMode = usetodoAppStore((state) => state.darkMode);

  useEffect(() => {
    if (!darkMode) document.body.classList.remove("dark");
    else document.body.classList.add("dark");
  }, [darkMode]);

  return (
    <div className=" bg-lTVeryLightGrayishBlue dark:bg-dm171823 h-screen w-[90rem] flex justify-center text-xs -tracking-[0.010rem] medium:-tracking-[0.015rem] medium:text-lg">
      <BackgroundHeading />
      <Container>
        <Header />
        <AddToDoForm />
        <ListContainer />
        <Footer />
      </Container>
    </div>
  );
}

export default App;
