import { Route, Routes } from "react-router";
import "./App.css";
import Home from "./pages/Home/Home";
// import WebWrapper from "./layout/WebWrapper/WebWrapper";

function App() {
  // return <WebWrapper>App</WebWrapper>;
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
