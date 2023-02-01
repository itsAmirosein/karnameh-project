import "./App.css";
import {
  BrowserRouter,
  Routes,
  Route,
  useParams,
  useNavigate,
} from "react-router-dom";
import Home from "pages/home";
import Answers from "pages/answers";
import Header from "components/header";
import { useDispatch, useSelector } from "react-redux";
import { InitialState } from "redux/types";
import { setModalState } from "redux/reducer";

function App() {
  const { profile } = useSelector((state: InitialState) => state);
  const dispatch = useDispatch();
  const handleOnNewQuestionClick = () => {
    dispatch(setModalState(true));
  };

  return (
    <>
      <BrowserRouter>
        <Header
          profile={profile}
          newQuestionClick={handleOnNewQuestionClick}
        />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:ID" element={<Answers />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
