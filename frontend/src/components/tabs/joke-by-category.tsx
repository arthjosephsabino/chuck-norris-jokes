import { useEffect, useMemo, useState } from "react";
import { useCategories } from "../../hooks/use-categories";
import { useJokeByCategory } from "../../hooks/use-joke-by-category";
import Alert from "../alert";
import { JokeItem } from "../jokes/joke-item";
import Loader from "../loader";
import "./joke-by-category.css";

export default function JokesByCategory() {
  const [category, setCategory] = useState<string>("");
  const {
    isLoading: categoryLoading,
    categories,
    errMessage: categoryErrMessage,
  } = useCategories();
  const {
    isLoading: jokesLoading,
    joke,
    errMessage: jokeErrMessage,
    fetchJokeByCategory,
  } = useJokeByCategory();
  const loading = useMemo(
    () => categoryLoading || jokesLoading,
    [categoryLoading, jokesLoading]
  );
  useEffect(() => {
    fetchJokeByCategory("");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div className="jokes-by-category-container">
      <Loader isLoading={loading} />
      <Alert message={categoryErrMessage} />
      <Alert message={jokeErrMessage} />

      <div className="category-filter">
        <label>Category:</label>
        <select
          onChange={(e) => {
            setCategory(e.target.value);
          }}
          value={category}
        >
          <option value="" disabled hidden>
            Choose category
          </option>
          {categories.map((cat: string) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>
        <button
          className="btn"
          onClick={() => {
            fetchJokeByCategory(category);
          }}
        >
          Search
        </button>
      </div>

      <div className="joke-container">
        <h2>
          {category ? `Category selected: ${category}` : "No category selected"}
        </h2>
        <JokeItem joke={joke} />
      </div>
    </div>
  );
}
