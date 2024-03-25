import { useState } from "react";
import "./app.css";
import JokesByCategory from "./components/tabs/joke-by-category";
import JokesByFreeText from "./components/tabs/jokes-by-free-text";
import TabHeader from "./components/tabs/tab-header";
import { ITabKeys } from "./types/tab";

function App() {
  const [tab, setTab] = useState<ITabKeys>("CATEGORY");
  const handleTabClick = (tabKey: ITabKeys) => {
    setTab(tabKey);
  };
  return (
    <div className="app-layout">
      <div className="content-layout">
        <h1 className="app-header">Chuck Norris joke</h1>
        <TabHeader currentTab={tab} onTabClick={handleTabClick} />
        {tab === "CATEGORY" ? <JokesByCategory /> : null}
        {tab === "FREE_TEXT" ? <JokesByFreeText /> : null}
      </div>
    </div>
  );
}

export default App;
