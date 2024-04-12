import React from "react";

interface ScheduleItemProps {
  meetingTime: string;
  meetingName: string;
}

const ScheduleItem: React.FC<ScheduleItemProps> = ({
  meetingTime,
  meetingName,
}) => {
  return (
    <div className="mb-5">
      <h1 className="font-bold mb-1">{meetingTime} </h1>
      <h2 className=" mb-2">{meetingName}</h2>
      <div className="flex items-center">
        <button className="bg-join-color text-white p-1 rounded-lg mr-3">
          参加する
        </button>
        <p className="text-xs bg-detail">詳細</p>
      </div>
    </div>
  );
};

export default ScheduleItem;
