import React from "react";
import SocialItem from "./SocialItem";

const SocialList: React.FC = () => {
  const socialItemList = [
    "Gmail",
    "社員イントラ",
    "勤怠",
    "チャット",
    "Slack",
    "Confluence",
    "ドライブ",
    "more",
  ];

  return (
    <div className="flex flex-row p-9 ">
      {socialItemList.map((itemName, index) => (
        <SocialItem key={index} name={itemName} />
      ))}
    </div>
  );
};
export default SocialList;
