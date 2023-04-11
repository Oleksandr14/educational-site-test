import { Route, Routes } from "react-router-dom";

import SharedLayout from "./SharedLayout/SharedLayout";

import Home from "./pages/Home";
import Courses from "./pages/Courses";
import About from "./pages/About";
import Contacts from "./pages/Contacts";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="about" element={<About />} />
          <Route path="/contacts" element={<Contacts />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
