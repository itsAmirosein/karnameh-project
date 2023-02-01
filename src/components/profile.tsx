import React from "react";
import { ProfileProps } from "./types";

function Profile({ profile, icon }: ProfileProps) {

  return (
    <div className="flex items-center mr-8 text-red">
      {icon}
      <div className="mx-4">{profile.name}</div>
      <div className="rounded-full w-[44px] h-[44px] border overflow-hidden ">
        <img src={profile.image} className="w-full h-full" />
      </div>
    </div>
  );
}

export default Profile;
