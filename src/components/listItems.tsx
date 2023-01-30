import React from "react";
import { ListItemProps } from "./types";
import { FaRegCommentDots } from "react-icons/fa";
import { persianTranslate } from "dictionary/persianTranslate";
import Button from "./button";

function ListItems({ listItem, commentsLength, onClick }: ListItemProps) {
  const { date, personImage, questionImage, text, title } = listItem;
  console.log(new Date(date).getDate(), "title");

  const q_date = () => {
    const convertedDate = new Date(date);
    return {
      date: `${convertedDate.getDate()}/${
        convertedDate.getMonth() + 1
      }/${convertedDate.getFullYear()}`,
      hour: `${convertedDate.getMinutes()} : ${convertedDate.getHours()}`,
    };
  };

  return (
    <div className="border rounded-xl my-8 shadow-md">
      <div className="border flex justify-between px-8 py-2 bg-white">
        <div className="flex items-center">
          <div className="flex items-center pr-4">
            {commentsLength}
            <FaRegCommentDots className=" mx-1" />
          </div>
          <div className="px-2 border-r items-center ">
            {`${persianTranslate.home.Date} : `}
            {q_date().date}
          </div>
          <div className="px-2 items-center">
            {`${persianTranslate.home.hour} : `}
            {q_date().hour}
          </div>
        </div>
        <div className=" flex items-center">
          <div className="mx-4">{title}</div>
          <img src={personImage} className="w-[32px] h-[32px] rounded-xl" />
        </div>
      </div>
      <div className="border px-8 py-4 bg-smook-2">
        <div className="py-1 text-right">{text}</div>
        <div className="py-1">
          <Button
            onClick={() => onClick(listItem.ID)}
            title={persianTranslate.home.showDetails}
            variant="outlined"
          />
        </div>
      </div>
    </div>
  );
}

export default ListItems;
