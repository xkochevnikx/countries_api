import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Details from "./pages/Details";
import HomePages from "./pages/HomePages";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <>
      <Header />
      <Main>
        <Routes>
          <Route path="/homepages" element={<HomePages />} />
          <Route path="/country/:name" element={<Details />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Main>
    </>
  );
}

export default App;
