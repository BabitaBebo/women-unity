/* eslint-disable no-unused-vars */
import { BrowserRouter, Route, Routes } from "react-router-dom";

import RoomSelect from "./components/RoomSelect";
import PropertyLocation from "./components/PropertyLocation";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<RoomSelect />} />
          <Route path="/property" element={<PropertyLocation />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
