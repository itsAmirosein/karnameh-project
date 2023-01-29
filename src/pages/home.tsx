import React, { useEffect } from "react";
import { IoCaretDown } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { sagaActions } from "redux/actions";
import { InitialState } from "redux/types";
import Profile from "../components/profile";
import { persianTranslate } from "dictionary/persianTranslate";
import Button from "components/button";
import ListItems from "components/listItems";
import Modal from "components/modal";
import {
  setModalState,
  setModalDescription,
  setModalSubject,
  modalSubmit,
} from "redux/reducer";

function Home() {
  const { profile, questionsLists, answersLists, modalVisibility, modalData } =
    useSelector((state: InitialState) => state);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({
      type: sagaActions.getDefaultData,
    });
  }, []);

  const handleOnModalCancelClick = (
    e: React.MouseEvent<HTMLElement, MouseEvent>
  ) => {
    dispatch(setModalState(false));
  };
  const handleOnModalConfirmClick = (
    e: React.MouseEvent<HTMLElement, MouseEvent>
  ) => {
    dispatch(modalSubmit());
  };
  const handleOnModalCloseClick = () => {
    dispatch(setModalState(false));
  };

  const handleOnNewQuestionClick = () => {
    dispatch(setModalState(true));
  };

  const handleOnModalSubjectChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    dispatch(setModalSubject(e.target.value));
  };
  const handleOnModalDescribtionChange = (
    e: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    dispatch(setModalDescription(e.target.value));
  };

  const modalContent = (
    <div className="text-right">
      <div className="pb-4">{persianTranslate.home.subject}</div>
      <input
        className="w-full h-[44px] py-4 rounded-lg outline-0	text-right px-3"
        onChange={handleOnModalSubjectChange}
        value={modalData.subject}
      />
      <div className="py-4">{persianTranslate.home.questionText}</div>
      <textarea
        onChange={handleOnModalDescribtionChange}
        className="w-full h-[144px] py-4 rounded-lg outline-0 text-right px-3 resize-none	 "
        value={modalData.description}
      />
    </div>
  );

  return (
    <div className="font-Yekan ">
      <header className="border flex items-center px-8 py-4">
        <div className="w-1/2 flex ">
          <Profile
            profile={profile}
            icon={<IoCaretDown className="mr-2 mt-1" />}
          />
          <Button
            title={persianTranslate.home.newQuestion}
            onClick={handleOnNewQuestionClick}
            variant="fill"
            hasIcon
            size="md"
          />
        </div>
        <div className="w-1/2 text-[24px] font-bold flex justify-end">
          {persianTranslate.home.questionList}
        </div>
      </header>
      <main className="py-4 px-8 bg-smook-1 h-screen">
        {questionsLists?.map((item) => (
          <ListItems
            key={item.ID}
            listItem={item}
            commentsLength={answersLists.length}
          />
        ))}
      </main>
      {modalVisibility && (
        <Modal
          title={persianTranslate.home.createNewQuestion}
          content={modalContent}
          onCancel={handleOnModalCancelClick}
          onClose={handleOnModalCloseClick}
          onConfirm={handleOnModalConfirmClick}
        />
      )}
    </div>
  );
}

export default Home;
