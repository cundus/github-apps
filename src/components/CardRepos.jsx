import React from "react";
import moment from "moment";

const CardRepos = ({ data }) => {
  const formatTime = (time) => {
    const date = moment(time).format("MMM DD, YYYY");
    return date;
  };

  // console.log(data);

  const onClickCard = () => {
    window.open(data.html_url, "_blank");
  };

  return (
    <div className="m-2 min-h-[8rem] rounded-lg border border-gray-200 shadow-lg cursor-pointer hover:scale-105 transform-all ease-in-out duration-500" onClick={onClickCard}>
      <div className="flex flex-col gap-4 justify-center h-full m-2 p-3">
        <div className="space-y-2">
          <p className="text-3xl font-semibold text-blue-700">{data.name}</p>
          <p className="text-lg ">{data.description}</p>
        </div>
        <div className="flex gap-4">
          <p>{data.language}</p>
          <p>Updated on {formatTime(data.update_at)}</p>
        </div>
      </div>
    </div>
  );
};

export default CardRepos;
