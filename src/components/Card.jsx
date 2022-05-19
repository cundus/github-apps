import React from "react";
import { AiOutlineLink } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

const Card = ({ data }) => {
  const navigate = useNavigate();
  const onClickCard = () => {
    navigate(`/${data.login}`);
  };

  return (
    <div
      onClick={onClickCard}
      className="card w-[15rem] h-[20rem] m-2 p-2 rounded-lg shadow-lg border border-gray-200 cursor-pointer hover:bg-gray-100 hover:scale-105 transform ease-in-out duration-500"
    >
      <div className="flex flex-col items-center justify-around h-full">
        <img src={data.avatar_url} alt="ava" className="w-[10rem] h-[10rem] object-cover rounded-full shadow-md" />
        <div className="text-2xl font-bold">{data.login}</div>
      </div>
    </div>
  );
};

export default Card;
