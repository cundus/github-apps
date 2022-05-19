import React from "react";
import { getAllUser, testGet } from "../../api/logic/ApiLogic";
import { Reveal, Fade } from "react-reveal";
import { Card, SearchBar, Spinner } from "../../components";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const [data, setData] = React.useState([]);
  const [loading, setLoading] = React.useState(false);
  const [search, setSearch] = React.useState("");

  const onChange = (e) => {
    setSearch(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (search.length > 0) {
      navigate(`search`, { state: { keyword: search } });
    }
  };

  React.useEffect(() => {
    const getData = async () => {
      const res = await getAllUser();
      // console.log(res);
      setData(res);
      setLoading(false);
    };

    getData();
  }, []);

  return (
    <div className="container mx-auto">
      <div className="py-6 flex flex-col items-center space-y-4 border-b-2 border-gray-400">
        <h1 className="text-2xl font-semibold">Find Other Github Users</h1>
        <SearchBar onChange={onChange} onSubmit={onSubmit} value={search} />
      </div>
      {loading ? (
        <div className="flex items-center justify-center h-40">
          <Spinner />
        </div>
      ) : (
        <>
          <h1 className="text-4xl font-semibold text-center my-[2rem]">First 30 Github Users</h1>
          <div className="flex flex-wrap ">
            {data.map((item, index) => {
              return <Card data={item} key={index} />;
            })}
          </div>
        </>
      )}
    </div>
  );
};

export default Home;
