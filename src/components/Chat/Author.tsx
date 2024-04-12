import React from "react";
import Toru from "../../assets/img/Toru.jpg";
import GptIcon from "../../assets/img/GptIcon.jpg";

interface AuthorProps {
  type: boolean;
  authorName: string;
  data: string;
}

const Author: React.FC<AuthorProps> = ({ type, authorName, data }) => {
  return (
    <div className="mb-11">
      <div className="flex items-center">
        {type && <img src={Toru} alt="Toru" className="mr-2" />}
        {!type && <img src={GptIcon} alt="GptIcon" className="mr-2" />}
        <h1 className="text-xl font-medium">{authorName}</h1>
      </div>

      <h3 className="pt-6 pl-9 text-base font-medium">{data}</h3>
    </div>
  );
};
export default Author;
