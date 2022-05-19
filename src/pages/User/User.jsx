import React from "react";
import { useParams } from "react-router-dom";
import { getUser, getUserRepos } from "../../api/logic/ApiLogic";
import { Card, CardRepos, Spinner } from "../../components";
import { GrLocation } from "react-icons/gr";

const User = () => {
  const params = useParams();
  const { id } = params;
  const [loading, setLoading] = React.useState(false);
  const [repos, setRepos] = React.useState([]);
  const [user, setUser] = React.useState({});

  React.useEffect(() => {
    const getData = async () => {
      setLoading(true);
      const res = await getUser(id);
      // console.log(res);
      setUser(res);
      setLoading(false);
    };

    const getRepos = async () => {
      const res = await getUserRepos(id);
      // console.log(res);
      setRepos(res);
    };

    getData();
    getRepos();
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-40">
        <Spinner />
      </div>
    );
  }

  return (
    <div className="container mx-auto p-10">
      <div className="flex border-2 space-x-5 border-gray-400 p-5 rounded-md justify-evenly max-w-[30rem] mx-auto">
        <img src={user.avatar_url} alt="ava" className="w-[10rem] h-[10rem] rounded-full object-fit" />
        <div className="ml-4 flex flex-col justify-between">
          <div className="">
            <h1 className="text-3xl font-bold">{id}</h1>
            <p className="text-gray-600">{user.name}</p>
          </div>
          {user.location && (
            <div>
              <span className="flex items-center gap-2 ">
                <GrLocation /> {user.location}
              </span>
            </div>
          )}
        </div>
      </div>
      <div className=" mt-8 space-y-5">
        <h1 className="text-2xl font-semibold">Repositories</h1>
        <div className="flex flex-col ">
          {repos.map((item, index) => {
            return <CardRepos data={item} key={index} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default User;
