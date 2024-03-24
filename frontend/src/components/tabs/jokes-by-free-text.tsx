import { useEffect, useState } from "react";
import { useSearch } from "../../hooks/use-search";
import Alert from "../alert";
import { JokesList } from "../jokes";
import Loader from "../loader";
import Pagination from "../pagination";
import "./joke-by-category.css";

export default function JokesByFreeText() {
  const [search, setSearch] = useState<string>("");
  const [page, setPage] = useState(-1);
  const [totalPages, setTotalPages] = useState(0);
  const { isLoading, jokes, total, errMessage, fetchJokes } = useSearch();

  const handlePageChange = (num: number) => {
    setPage(num);
    fetchJokes(search, num);
  };
  useEffect(() => {
    //since 10 is the limit per page
    setTotalPages(total / 10);
  }, [total]);
  return (
    <div className="jokes-by-category-container">
      <Loader isLoading={isLoading} />
      <Alert message={errMessage} />

      <div className="category-filter">
        <label>Free Text:</label>
        <input value={search} onChange={(e) => setSearch(e.target.value)} />
        <button
          className="btn"
          onClick={() => {
            fetchJokes(search, 1);
            setPage(1);
          }}
        >
          Search
        </button>
      </div>
      <div className="joke-container">
        <JokesList jokes={jokes} />
      </div>
      {page > 0 ? (
        <Pagination
          currentPage={page}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      ) : null}
    </div>
  );
}
