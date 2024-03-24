import { Joke } from "../../types/joke";
import { formatDate } from "../../util/format";
import "./joke-item.css";
interface IJokeItem {
  joke: Joke;
}
export function JokeItem({ joke }: IJokeItem) {
  return (
    <div className="joke-item">
      <span className="created-at">{formatDate(joke.created_at)}</span>
      <p className="content">{joke.value}</p>
      <a href={joke.url} className="link" target="_blank" rel="noreferrer">
        Joke page
      </a>
    </div>
  );
}
