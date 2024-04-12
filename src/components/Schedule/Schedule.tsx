import React from "react";
import ScheduleItem from "./ScheduleItem";

interface Meeting {
  id: number;
  meetingTime: string;
  meetingName: string;
}

interface DaySchedule {
  title: string;
  events: Meeting[];
}

const Schedule: React.FC = () => {
  const ScheduleDataList: DaySchedule[] = [
    {
      title: "今日",
      events: [
        {
          id: 1,
          meetingTime: "10:00~11:00",
          meetingName: "お打ち合わせ/〇〇様",
        },
        {
          id: 2,
          meetingTime: "11:00~12:00",
          meetingName: "営業定例MTG",
        },
      ],
    },
    // {
    //   title: "tomorrow",
    //   events: [
    //     {
    //       id: 1,
    //       meetingTime: "17:00~18:00",
    //       meetingName: "お打ち合わせ/〇〇様",
    //     },
    //   ],
    // },
  ];

  return (
    <div className="shrink-0 grow-0 min-w-80 h-fit min-h-72 rounded-lg bg-white p-8">
      {ScheduleDataList.map((ScheduleData, index) => (
        <div key={index} className="text-left">
          <h2 className="text-xl font-bold mb-2">{ScheduleData.title}</h2>
          {ScheduleData.events.map((meeting, meetingIndex) => (
            <ScheduleItem
              key={meetingIndex}
              meetingTime={meeting.meetingTime}
              meetingName={meeting.meetingName}
            />
          ))}
          <div className="border-t-2 border-black px-2 py-2 text-xs bg-detail">
            さらに予定を表示する
          </div>
        </div>
      ))}
    </div>
  );
};

export default Schedule;
