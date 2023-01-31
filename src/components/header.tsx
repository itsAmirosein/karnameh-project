import { persianTranslate } from "dictionary/persianTranslate";
import React from "react";
import { IoCaretDown } from "react-icons/io5";
import { useParams } from "react-router-dom";
import Button from "./button";
import Profile from "./profile";
import { HeaderProps } from "./types";

function Header({newQuestionClick,profile,title}:HeaderProps) {

const params = useParams()

  return (
    <header className="border flex items-center px-8 py-4">
      <div className="w-1/2 flex ">
        <Profile
          profile={profile}
          icon={<IoCaretDown className="mr-2 mt-1" />}
        />
        <Button
          title={persianTranslate.home.newQuestion}
          onClick={newQuestionClick}
          variant="fill"
          hasIcon
          size="md"
        />
      </div>
      <div className="w-1/2 text-[24px] font-bold flex justify-end">
        {persianTranslate.home.questionList}
      </div>
    </header>
  );
}

export default Header;
