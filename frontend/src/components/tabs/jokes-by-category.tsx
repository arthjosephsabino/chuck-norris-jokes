import { useEffect, useState } from "react";
import { useCategories } from "../../hooks/useCategories";
import { Joke } from "../../types/joke";
import { JokesList } from "../jokes";
import Loader from "../loader";
import "./jokes-by-category.css";

export default function JokesByCategory() {
  const [category, setCategory] = useState<string>("");
  const [jokes, setJokes] = useState<Joke[]>([]);
  const { isLoading, categories } = useCategories();
  useEffect(() => {
    if (setJokes) {
      setJokes([
        {
          categories: [],
          created_at: "2020-01-05 13:42:29.296379",
          icon_url:
            "https://assets.chucknorris.host/img/avatar/chuck-norris.png",
          id: "sug5SQ6RReGnh2XDolo22w",
          updated_at: "2020-01-05 13:42:29.296379",
          url: "https://api.chucknorris.io/jokes/sug5SQ6RReGnh2XDolo22w",
          value: "Chuck Norris has baffled mathematicians by dividing by zero.",
        },
      ]);
    }
  }, [setJokes]);
  return (
    <div className="category-filter">
      <Loader isLoading={isLoading} />
      <label>Category:</label>
      <select
        onChange={(e) => {
          setCategory(e.target.value);
        }}
        value={category}
      >
        {categories.map((cat) => (
          <li key={cat} value={cat}>
            {cat}
          </li>
        ))}
      </select>
      <button className="btn">Search</button>
      <div className="joke-container">
        <JokesList jokes={jokes} />
      </div>
    </div>
  );
}
