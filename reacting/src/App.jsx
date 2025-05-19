import React from "react";
import { Link, Route, Routes, useLocation } from "react-router-dom";
import Home from "./Components/Home";
import Details from "./Components/Details";
import Create from "./Components/Create";
import Edit from "./Components/Edit";

function App() {
  const { search, pathname } = useLocation();

  return (
    <div className="h-screen w-screen flex">
      {(pathname != "/" || search.length > 0) && (
        <Link to="/" className="absolute left-[17%] top-[3%] text-red-300">
          Home
        </Link>
      )}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/details/:id" element={<Details />} />
        <Route path="/create" element={<Create />}/>
        <Route path="/edit/:id" element={<Edit/>}/>
      </Routes>
    </div>
  );
}

export default App;
