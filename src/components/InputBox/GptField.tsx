import React, { useState } from "react";
import GptBrain from "../../assets/img/GptBrain.jpg";
import GptSend from "../Icon/GptSend";

interface GptFieldProps {
  onEnterPress: (inputText: string) => void;
}

const GptField: React.FC<GptFieldProps> = ({ onEnterPress }) => {
  const [inputText, setInputText] = useState<string>("");
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputText(event.target.value);
  };

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      onEnterPress(inputText);
      setInputText("");
    }
  };

  const handleClick = () => {
    onEnterPress(inputText);
    setInputText("");
  };

  return (
    <div className="flex fixed w-gpt-field bg-white bottom-12 items-center pl-5 pr-1 py-4 rounded-search shadow-gpt-search">
      <img src={GptBrain} alt="GptBrain" className="h-8 mr-2" />
      <input
        type="text"
        placeholder="なんでも聞いてください。"
        value={inputText}
        className="w-full text-lg focus:outline-none mr-2"
        onChange={handleChange}
        onKeyPress={handleKeyPress}
      />
      <div
        className="flex flex-shrink-0 items-center justify-center w-12 h-12 bg-send rounded-send cursor-pointer"
        onClick={handleClick}
      >
        <GptSend />
      </div>
    </div>
  );
};
export default GptField;
