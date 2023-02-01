import ListItems from "components/listItems";
import { persianTranslate } from "dictionary/persianTranslate";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { sagaActions } from "redux/actions";
import { InitialState } from "redux/types";
import { API } from "services/api";
import { LikeOrDislik } from "services/apiCall";

function Answers() {
  const { questionsLists, param, answersLists } = useSelector(
    (state: InitialState) => state
  );
  const dispatch = useDispatch()

  const questionItem = questionsLists.find(
    (item) => param && +item.ID === +param
  );

  const filteredAnswers = answersLists.filter(item=>param&&+item.Q_ID===+param)

const handleOnReactionClick=(ID:number ,value:boolean)=>{
  dispatch({
    type:sagaActions.setLikeOrDislikeToServer,
    payload:{
      ID,
      value
    }
  })
}

  return (
    <main className="px-8 ">
      {questionItem && (
        <ListItems
          questionCart
          listItem={questionItem}
          commentsLength={answersLists.length}

        />
      )}
      <div className="text-right font-bold text-[24px]">
        {persianTranslate.home.answers}
      </div>
      <div>
        {
          filteredAnswers.map(item=><ListItems listItem={item} questionCart={false} onlikeOrDislikeClick={handleOnReactionClick} />)
        }
      </div>
    </main>
  );
}

export default Answers;
