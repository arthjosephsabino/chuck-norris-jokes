import { useState } from "react";
import "./app.module.css";
import TabHeader from "./components/tabs/tab-header";
import { ITabKeys } from "./types/tab";

function App() {
  const [tab, setTab] = useState<ITabKeys>("CATEGORY");
  const handleTabClick = (tabKey: ITabKeys) => {
    setTab(tabKey);
  };
  return (
    <div className="App">
      <h1>Chuck Norris joke</h1>
      <TabHeader currentTab={tab} onTabClick={handleTabClick} />
    </div>
  );
}

export default App;
