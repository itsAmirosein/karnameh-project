import React from "react";
import { ListItemProps } from "./types";
import { persianTranslate } from "dictionary/persianTranslate";
import Button from "./button";

function ListItems({
  listItem,
  commentsLength,
  onMoreDetailsClick,
  questionCart,
  onlikeOrDislikeClick
}: ListItemProps) {
  const {
    date,
    personImage,
    text,
    title,
    dislike,
    like,
    name,
    ID,
    Q_ID,
  } = listItem;
  
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
          <div className="flex items-center mr-4 justify-between ">
            {questionCart ? (
              <div className="flex items-center text-red">
                {commentsLength}
                <img src="/assets/Comment.png" className=" mx-1" />
              </div>
            ) : (
              <>
                <div className="flex items-center mr-8">
                  {dislike}
                  <img src="/assets/Sad.png" className="mx-1 text-lg " />
                </div>
                <div className="flex items-center ">
                  {like}
                  <img src="/assets/Happy.png" className="mx-1 text-lg" />
                </div>
              </>
            )}
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
          <div className="mx-4">{questionCart ? title : name}</div>
          <img src={personImage} className="w-[32px] h-[32px] rounded-xl" />
        </div>
      </div>
      <div className="border px-8 py-4 bg-smooky-2">
        <div className="py-1 text-right">{text}</div>
        {questionCart ? (
          onMoreDetailsClick && (
            <div className="py-1">
              <Button
                onClick={() => onMoreDetailsClick(listItem.ID)}
                title={persianTranslate.home.showDetails}
                variant="outlined"
              />
            </div>
          )
        ) : (
          <div className="flex">
            <Button
              title="پاسخ خوب نبود"
              onClick={() => {
                onlikeOrDislikeClick && onlikeOrDislikeClick(ID,false);
              }}
              style={'mx-2 text-red-500 border-red-500'}
              icon={<img src='/assets/Red-sad.png' />}
            />
            <Button
              title="پاسخ خوب بود"
              onClick={() => {
                onlikeOrDislikeClick && onlikeOrDislikeClick(ID,true);
              }}
              style='mx-2'
              icon={<img src='/assets/Happy.png' />}
            />
          </div>
        )}
      </div>
    </div>
  );
}

export default ListItems;
