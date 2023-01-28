import React, { useEffect } from "react";
import { IoCaretDown } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { sagaActions } from "redux/actions";
import { InitialState } from "redux/types";
import Profile from "../components/profile";
import { persianTranslate } from "dictionary/persianTranslate";
import Button from "components/button";
import ListItems from "components/listItems";
import CreateQuestionModal from "components/createQuestionModal";

function Home() {
  const { profile, questionsLists, answersLists } = useSelector(
    (state: InitialState) => state
  );
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({
      type: sagaActions.getDefaultData,
    });
  }, []);
  console.log(new Date(), "questionsLists");

  return (
    <div className="font-Yekan ">
      <header className="border flex px-8 py-4">
        <div className="w-1/2 flex">
          <Profile
            profile={profile}
            icon={<IoCaretDown className="mx-4 mt-1" />}
          />
          <Button
            title={persianTranslate.home.newQuestion}
            onClick={() => {}}
            variant="fill"
            hasIcon
            size="md"
          />
        </div>
        <div className="w-1/2  flex justify-end">
          {persianTranslate.home.questionList}
        </div>
      </header>
      <main className="py-4 px-8">
        {questionsLists?.map((item) => (
          <ListItems
            key={item.ID}
            listItem={item}
            commentsLength={answersLists.length}
          />
        ))}
      </main>
      <CreateQuestionModal />
    </div>
  );
}

export default Home;
