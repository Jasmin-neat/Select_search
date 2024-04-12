import React, { useState } from "react";
import SuggestedItem from "./SuggestedItem";

const Suggest: React.FC = () => {
  const [activeTitle, setActiveTitle] = useState("サジェスト");
  const titles = ["サジェスト", "履歴"];

  const onTitleClick = (title: string) => {
    setActiveTitle(title);
  };

  const suggestedList = [
    { icon: "Yellow", name: "2023/04/04 SONSHI AIについて" },
    { icon: "Green", name: "2023/04/04 SONSHI について" },
    { icon: "Blue", name: "2023/04/04 SONSHI について" },
    { icon: "Drive", name: "2023/04/04 SONSHI について" },
    { icon: "Purple", name: "2023/04/04 SONSHI について" },
    { icon: "Yellow", name: "2023/04/04 SONSHI について" },
  ];

  return (
    <div className="grow min-w-tab min-h-80 rounded-lg bg-white p-8">
      <div className="flex ">
        {titles.map((title) => (
          <div
            key={title}
            className={` cursor-pointer text-table-item mr-12 ${
              activeTitle === title ? "border-b-2 border-tab" : ""
            }`}
            onClick={() => onTitleClick(title)}
          >
            {title}
          </div>
        ))}
      </div>

      {activeTitle === "サジェスト" ? (
        <div className="mt-6">
          {/* Content for サジェスト */}
          {suggestedList.map((suggestedItem, index) => (
            <SuggestedItem
              key={index}
              icon={suggestedItem.icon}
              name={suggestedItem.name}
            />
          ))}
        </div>
      ) : (
        <div>
          {/* Content for 履歴 */}
          <p>履歴の内容がここに入ります。</p>
        </div>
      )}
    </div>
  );
};

export default Suggest;
