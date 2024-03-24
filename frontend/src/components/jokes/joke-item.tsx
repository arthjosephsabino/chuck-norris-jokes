import { Joke } from "../../types/joke";

interface IJokeItem {
  joke: Joke;
}
export function JokeItem({ joke }: IJokeItem) {
  return <div>{joke.value}</div>;
}
