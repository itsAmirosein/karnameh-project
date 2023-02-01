import Button from "components/button";
import ListItems from "components/listItems";
import { persianTranslate } from "dictionary/persianTranslate";
import { useDispatch, useSelector } from "react-redux";
import { sagaActions } from "redux/actions";
import { InitialState } from "redux/types";
import {setAnswerText} from 'redux/reducer'

function Answers() {
  const { questionsLists, param, answersLists,newAnswerText } = useSelector(
    (state: InitialState) => state
  );
  const dispatch = useDispatch();

  const questionItem = questionsLists.find(
    (item) => param && +item.ID === +param
  );

  const filteredAnswers = answersLists.filter(
    (item) => param && +item.Q_ID === +param
  );

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
            commentsLength={answersLists.length}
          />
        )}
        <div className="text-right font-bold text-[24px]">
          {persianTranslate.answers.answers}
        </div>
        <div>
          {filteredAnswers.map((item) => (
            <ListItems
              listItem={item}
              questionCart={false}
              onlikeOrDislikeClick={handleOnReactionClick}
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
