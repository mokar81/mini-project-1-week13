import React, { useState } from "react";
import "./TabList.css";

function TabsList() {
  const [changeTab, setChangeTab] = useState(0);

  const tabs = [
    { title: "Tab1", content: "this is tab one" },
    { title: "Tab2", content: "this is tab two" },
    { title: "Tab3", content: "this is tab three" },
    { title: "Tab4", content: "this is tab four" },
  ];

  return (
    <div className="container">
      <header>
        <h1>Tabs Components with React</h1>
      </header>

      <div className="buttons">
        {tabs.map((tab, index) => (
          <button
            className={`tab-button${changeTab === index ? "active" : ""}`}
            key={index}
            onClick={() => setChangeTab(index)}
          >
            {tab.title}
          </button>
        ))}
      </div>

      <div className="content">
        <h2>Content{changeTab + 1}</h2>
        <p>{tabs[changeTab].content}</p>
      </div>
    </div>
  );
}

export default TabsList;
