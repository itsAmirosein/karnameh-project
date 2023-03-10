import React, { useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { sagaActions } from "redux/actions";
import { InitialState } from "redux/types";
import { persianTranslate } from "dictionary/persianTranslate";
import ListItems from "components/listItems";
import Modal from "components/modal";
import {
  setModalState,
  setModalDescription,
  setModalSubject,
  modalSubmit,
} from "redux/reducer";
import { useNavigate, useParams } from "react-router-dom";

function Home() {
  const { profile, questionsLists, answersLists, modalVisibility, modalData } =
    useSelector((state: InitialState) => state);

  const navigate = useNavigate();

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
    dispatch({
      type: sagaActions.setNewQuestionToServer,
    });
  };
  const handleOnModalCloseClick = () => {
    dispatch(setModalState(false));
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

  const handleOnShowDetailsClick = (ID: number) => {
    navigate(`/${ID}`);
  };

  const answerCommentsCount = (ID: number) => {
    return answersLists.filter((item) => +item.Q_ID === ID).length;
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
      <main className="py-4 px-8 bg-smooky-1 h-screen">
        {questionsLists?.map((item) => (
          <ListItems
            questionCart
            onMoreDetailsClick={handleOnShowDetailsClick}
            key={item.ID}
            listItem={item}
            commentsLength={answerCommentsCount(+item.ID)}
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
