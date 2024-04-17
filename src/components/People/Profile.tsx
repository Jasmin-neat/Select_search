import React from "react";
interface ProfileProps {
  name: string;
  avatar: string;
  data: string;
}

const Profile: React.FC<ProfileProps> = ({ name, avatar, data }) => {
  const imgPath = `/svg/profile/${avatar}.svg`;
  return (
    <div className="w-full max-w-80 min-h-60 flex flex-col items-center bg-slate-200 rounded-md p-5">
      <img className="w-32 mb-5" src={imgPath} alt="avatar" />
      <h1 className="text-3xl text-join mb-3">{name}</h1>
      <div>{data}</div>
    </div>
  );
};

export default Profile;
