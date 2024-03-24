import { Joke } from "../../types/joke";
import { JokeItem } from "./joke-item";
import "./jokes-list.css";

interface IJokesList {
  jokes: Joke[];
}
export function JokesList({ jokes }: IJokesList) {
  return (
    <div className="jokes-list">
      {jokes.map((joke) => (
        <JokeItem key={joke.id} joke={joke} />
      ))}
      {/* pagination here */}
    </div>
  );
}
