import React, { useEffect } from "react";
import { IoCaretDown } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { sagaActions } from "redux/actions";
import { InitialState } from "redux/types";
import Profile from "../components/profile";
import { persianTranslate } from "dictionary/persianTranslate";

function Home() {
  const { profile } = useSelector((state: InitialState) => state);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({
      type: sagaActions.getDefaultData,
    });
  }, []);

  return (
    <div>
      <header className="border flex px-8">
        <div className="w-1/2">
          <Profile
            profile={profile}
            icon={<IoCaretDown className="mx-4 mt-1" />}
          />
        </div>
        <div className="w-1/2  flex justify-end">
          {persianTranslate.home.questionList}
        </div>
      </header>
      <main>
        
      </main>
    </div>
  );
}

export default Home;
