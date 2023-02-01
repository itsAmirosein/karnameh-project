import Button from "components/button";
import ListItems from "components/listItems";
import { persianTranslate } from "dictionary/persianTranslate";
import { useDispatch, useSelector } from "react-redux";
import { sagaActions } from "redux/actions";
import { InitialState } from "redux/types";
import { setAnswerText } from "redux/reducer";
import { useEffect } from "react";

function Answers() {
  const { questionsLists, answersLists, newAnswerText } = useSelector(
    (state: InitialState) => state
  );
  const dispatch = useDispatch();
  const param = window.location.pathname.slice(
    1,
    window.location.pathname.length
  );

  useEffect(() => {
    if (questionsLists.length === 0 && answersLists.length === 0) {
      dispatch({
        type: sagaActions.getDefaultData,
      });
    }
  }, [questionsLists, answersLists]);
  useEffect(() => {
    window.scrollTo(0, 0)
  }, []);

  const questionItem = questionsLists.find((item) => +item.ID === +param);

  const filteredAnswers = answersLists.filter((item) => +item.Q_ID === +param);

  const handleOnReactionClick = (ID: number, value: boolean) => {
    dispatch({
      type: sagaActions.setLikeOrDislikeToServer,
      payload: {
        ID,
        value,
      },
    });
  };
  const handleSendAnswerClick = () => {
    dispatch({
      type: sagaActions.setNewAnswerToServer,
      payload: newAnswerText,
    });
  };
  const handleNewAnswertext = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    dispatch(setAnswerText(e.target.value));
  };

  return (
    <div className=" font-Yekan">
      <main className="py-4 px-8 bg-smooky-1 min-h-screen">
        {questionItem && (
          <ListItems
            questionCart
            listItem={questionItem}
            commentsLength={filteredAnswers.length}
          />
        )}
        {filteredAnswers.length > 0 && (
          <div className="text-right font-bold text-[24px]">
            {persianTranslate.answers.answers}
          </div>
        )}
        <div>
          {filteredAnswers.map((item) => (
            <ListItems
              listItem={item}
              questionCart={false}
              onlikeOrDislikeClick={handleOnReactionClick}
              key={item.Q_ID}
            />
          ))}
        </div>
        <div className="flex flex-col items-end">
          <h2 className="text-right font-extrabold text-[24px] my-4">
            {persianTranslate.answers.submitYourAnswer}
          </h2>
          <h4 className="text-right font-bold text-[12px] my-2">
            {persianTranslate.answers.writeYourAnswer}
          </h4>
          <textarea
            className="w-full min-h-[160px] py-4 rounded-lg outline-0 text-right px-3 resize-none	mb-4"
            placeholder={persianTranslate.answers.asnwerText}
            onChange={handleNewAnswertext}
            value={newAnswerText}
          />
          <div className="mb-4 text-red-500 text-[10px]">
            {persianTranslate.answers.errorTextForTextarea}
          </div>
          <Button
            title={persianTranslate.answers.sendAnswer}
            onClick={handleSendAnswerClick}
            variant="fill"
            size={"lg"}
          />
        </div>
      </main>
    </div>
  );
}

export default Answers;
