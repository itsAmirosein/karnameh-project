import React, { useEffect } from "react";
import { IoCaretDown } from "react-icons/io5";
import Profile from "../components/profile";
import { API } from "../services/api";
import { GetData } from "../services/apiCall";

function Home() {
  useEffect(() => {
    GetData(API.home.getDefualtData()).then(res=>console.log(res,'res'))
  }, []);

  return (
    <div>
      <header className="border flex px-8">
        <div className="w-1/2">
          <Profile
            profile={{ fullName: "amir", image: "smt" }}
            icon={<IoCaretDown className="mx-4 mt-1" />}
          />
        </div>
        <div className="w-1/2 border flex justify-end">item title</div>
      </header>
      <main>main</main>
    </div>
  );
}

export default Home;
