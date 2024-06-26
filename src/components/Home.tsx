// import React, { useState } from "react";
import React from "react";
import SearchField from "./InputBox/SearchField";
import SocialList from "./SocialList/SocialList";
import Suggest from "./Suggest/Suggest";
import Schedule from "./Schedule/Schedule";

const Home: React.FC = () => {
  return (
    <div className="w-full">
      <div className="bg-home-background bg-center h-screen w-full py-24 px-52">
        <SearchField />
        <SocialList />

        <div className="flex justify-between gap-8 ">
          <Suggest />
          <Schedule />
        </div>
      </div>
    </div>
  );
};
export default Home;
