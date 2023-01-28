import React from "react";
import { ProfileProps } from "./types";

function Profile({ profile, icon }: ProfileProps) {
  return (
    <div className="flex items-center">
      {icon}
      <div className="mx-4">{profile.fullName}</div>
      <img src={profile.image} className='rounded-full' />
    </div>
  );
}

export default Profile;
