import React, { useState } from "react";
import Navbar from "./Components/Navbar";
import Card from "./Components/Card";

function App() {
  const data = [
    {
      image:
        "https://images.unsplash.com/photo-1746304153031-c98a7f27bbae?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "Challenger",
      artist: "Vinayak",
      added: false,
    },
    {
      image:
        "https://images.unsplash.com/photo-1746713915201-4eed01ca887a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "One Day",
      artist: "Hitesh",
      added: false,
    },
    {
      image:
        "https://images.unsplash.com/photo-1745282480794-10427e218c76?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "One Love",
      artist: "Yash",
      added: false,
    },
    {
      image:
        "https://images.unsplash.com/photo-1746121813274-50f7f8d4bad4?q=80&w=2103&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "Together",
      artist: "Mansi",
      added: false,
    },
  ];

  const [songData, setSongData] = useState(data);
  const handleClick = (index) => {
    setSongData((prev) => {
      return prev.map((item, itemIndex) => {
        if (itemIndex === index) return { ...item, added: !item.added };
        return item;
      });
    });
  };

  return (
    <div>
      <Navbar data={songData} />
      <div className="px-20 flex gap-10 mt-10 flex-wrap">
        {songData.map((obj, index) => (
          <Card
            key={index}
            data={obj}
            handleClick={handleClick}
            index={index}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
