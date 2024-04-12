import React, { useState } from "react";
import GptField from "./InputBox/GptField";
import Author from "./Chat/Author";

const Chat: React.FC = () => {
  const aiData =
    "SONSHI AIについて SONSHI AIについて SONSHI AIについて SONSHI AIについて SONSHI AIについて SONSHI AIについて SONSHI AIについて SONSHI AIについて SONSHI AIについて SONSHI AIについて SONSHI AIについて SONSHI AIについて SONSHI AIについて SONSHI AIについて SONSHI AIについて SONSHI AIについて SONSHI AIについて SONSHI AIについて SONSHI AIについて SONSHI AIについて SONSHI AIについて SONSHI AIについて SONSHI AIについて SONSHI AIについて SONSHI AIについて SONSHI AIについて SONSHI AIについて SONSHI AIについて SONSHI AIについて SONSHI AIについて SONSHI AIについて SONSHI AIについて SONSHI AIについてAIについて SONSHI AIについて SONSHI AIについて SONSHI AIについて SONSHI AIについて SONSHI AIについて SONSHI AIについて SONSHI AIについて SONSHI AIについて SONSHI AIについて SONSHI AIについて SONSHI AIについて SONSHI AIについてSONSHI AIについて SONSHI AIについて SONSHI AIについて SONSHI AIについて SONSHI AIについて SONSHI AIについてSONSHI AIについてSONSHI AIについて SONSHI AIについて SONSHI AIについて SONSHI AIについて SONSHI AIについて SONSHI AIについてSONSHI AIについてSONSHI AIについて SONSHI AIについて SONSHI AIについて SONSHI AIについて SONSHI AIについて SONSHI AIについてSONSHI AIについてSONSHI AIについて SONSHI AIについて SONSHI AIについて SONSHI AIについて SONSHI AIについて SONSHI AIについて";
  const [displayedText, setDisplayedText] = useState("");
  const handleEnterPress = (inputText: string) => {
    setDisplayedText(inputText);
  };

  return (
    <div className="w-full relative px-24 pt-32 pb-12">
      {displayedText && (
        <div>
          <Author type={true} authorName="Toru Tano" data={displayedText} />
          <Author type={false} authorName="SONSHI AI" data={aiData} />
        </div>
      )}
      {/* <h1>{(displayedText && <Author />) || "Chat Component"}</h1> */}
      <GptField onEnterPress={handleEnterPress} />
    </div>
  );
};

export default Chat;
