import React from "react";
import FileIcon from "../Icon/FileIcon";
interface KnowledgeProps {
  name: string;
  data: string;
  itemNumber: number;
  editor: string;
  date: string;
}

const KnowledgeItem: React.FC<KnowledgeProps> = ({
  name,
  data,
  itemNumber,
  editor,
  date,
}) => {
  return (
    <div className="flex flex-row mb-10">
      <div className="w-fit h-fit mr-3">
        <FileIcon />
      </div>

      <div className="w-80 mr-14 grow">
        <h1 className="text-xl text-knowledge-name mb-2 leading-7 font-medium">{name}</h1>
        <h1 className="text-sm text-knowledge-data">{data}</h1>
      </div>

      <div className="flex items-center mr-20">
        <h1>{itemNumber}</h1>
      </div>

      <div className="flex flex-row items-center mr-40 font-medium">
        <div className="w-12 h-12 rounded-3xl bg-gray-300 mr-5"></div>
        <h1>{editor}</h1>
      </div>

      <div className="flex items-center text-knowledge-data">
        <h1>{date}</h1>
      </div>
    </div>
  );
};

export default KnowledgeItem;
