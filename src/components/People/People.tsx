import React from "react";
import Profile from "./Profile";

const People: React.FC = () => {
  const profileList = [
    {
      id: 1,
      name: "Toru",
      avatar: "Toru",
      data: "CTO",
    },
    {
      id: 2,
      name: "SONSHI",
      avatar: "Sonshi",
      data: "AI Engine",
    },

    {
      id: 3,
      name: "Toru",
      avatar: "Toru",
      data: "CTO",
    },
    {
      id: 4,
      name: "SONSHI",
      avatar: "Sonshi",
      data: "AI Engine",
    },
    {
      id: 4,
      name: "SONSHI",
      avatar: "Sonshi",
      data: "AI Engine",
    },
  ];

  return (
    <div className="w-full h-full flex flex-wrap gap-10 justify-between p-10 pt-20">
      {profileList.map((profileItem, index) => (
        <Profile
          id={profileItem.id}
          name={profileItem.name}
          avatar={profileItem.avatar}
          data={profileItem.data}
        />
      ))}
    </div>
  );
};

export default People;
