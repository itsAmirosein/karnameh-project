import ListItems from "components/listItems";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { InitialState } from "redux/types";

function Answers() {
  const { questionsLists,param } = useSelector((state: InitialState) => state);

  const questionItem = questionsLists.find((item) => param&&+item.ID === +param);
  

  return (
    <main>
      {questionItem&&<ListItems questionCart={false} listItem={questionItem}   />}
    </main>
  );
}

export default Answers;
