import { ITabKeys } from "../../types/tab";
import { TABS } from "../../util/consts";

interface ITabHeader {
  currentTab: ITabKeys;
  onTabClick: (tab: ITabKeys) => void;
}
export default function TabHeader({ currentTab, onTabClick }: ITabHeader) {
  return (
    <div>
      {Object.keys(TABS).map((key) => (
        <button
          style={{
            color: currentTab === key ? "red" : "blue",
          }}
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
