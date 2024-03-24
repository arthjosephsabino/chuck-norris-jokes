import { Joke } from "../../types/joke";
import { JokeItem } from "./joke-item";

interface IJokesList {
  jokes: Joke[];
}
export function JokesList({ jokes }: IJokesList) {
  return (
    <div>
      {jokes.map((joke) => (
        <JokeItem key={joke.id} joke={joke} />
      ))}
      {/* pagination here */}
    </div>
  );
}
