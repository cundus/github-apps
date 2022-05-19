import React from "react";
import { useLocation, useParams } from "react-router-dom";
import { getSearch } from "../../api/logic/ApiLogic";
import { Card, SearchBar, Spinner } from "../../components";

const Search = (props) => {
  const { keyword } = useLocation().state;
  const [loading, setLoading] = React.useState(false);
  const [data, setData] = React.useState([]);
  const [search, setSearch] = React.useState(keyword);

  const onChange = (e) => {
    setSearch(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (search.length > 0) {
      getSearchUser();
    }
  };

  console.log(search);

  React.useEffect(() => {
    const getData = async () => {
      setLoading(true);
      const res = await getSearch(keyword);
      // console.log(res);
      setData(res.items);
      setLoading(false);
    };

    getData();

    return () => {
      setData([]);
    };
  }, []);

  const getSearchUser = React.useCallback(async () => {
    setLoading(true);
    const res = await getSearch(search);
    // console.log(res);
    setData(res.items);
    setLoading(false);
  }, [search]);

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
          <h1 className="text-center my-4 font-bold text-2xl">
            Search: <span>{search}</span>
          </h1>
          <div className="flex flex-wrap ">
            {data.length > 0 ? (
              data?.map((item, index) => {
                return <Card data={item} key={index} />;
              })
            ) : (
              <h1>No Result</h1>
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default Search;
