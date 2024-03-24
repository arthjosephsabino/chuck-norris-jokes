import { ITabKeys } from "../../types/tab";
import { TABS } from "../../util/consts";
import "./tab-header.css";

interface ITabHeader {
  currentTab: ITabKeys;
  onTabClick: (tab: ITabKeys) => void;
}
export default function TabHeader({ currentTab, onTabClick }: ITabHeader) {
  return (
    <div className="tab-layout">
      {Object.keys(TABS).map((key) => (
        <button
          key={key}
          className={`btn tab ${key === currentTab ? "active" : ""}`}
          onClick={() => {
            onTabClick(key as ITabKeys);
          }}
        >
          {TABS[key as ITabKeys]}
        </button>
      ))}
    </div>
  );
}
