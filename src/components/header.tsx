import { persianTranslate } from "dictionary/persianTranslate";
import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import Button from "./button";
import Profile from "./profile";
import { HeaderProps } from "./types";

function Header({ newQuestionClick, profile }: HeaderProps) {
  const navigate = useNavigate();
 
  const handleOnProfileImageClick = () => {
    navigate("/");
  };

  return (
    <header className="border flex items-center px-8 py-4">
      <div className="w-1/2 flex ">
        <Profile
          onProfileImageClick={handleOnProfileImageClick}
          profile={profile}
          icon={<img src="/assets/Arrow-down.png" className="mr-2 mt-1" />}
        />
        <Button
          title={persianTranslate.home.newQuestion}
          onClick={newQuestionClick}
          variant="fill"
          icon={<img src="/assets/Plus.png" />}
          size="md"
        />
      </div>
      <div className="w-1/2 text-[24px] font-bold flex justify-end">
        {window.location.pathname.slice(1,window.location.pathname.length)===''?persianTranslate.home.questionList:persianTranslate.answers.answerDetails}
      </div>
    </header>
  );
}

export default Header;
