import { useState } from "react";
import { Joke } from "../types/joke";

export function useJokeByCategory() {
  const [isLoading, setIsLoading] = useState(false);
  const [errMessage, setErrMessage] = useState("");
  const [joke, setJoke] = useState<Joke | null>(null);

  const fetchJokeByCategory = async (category: string) => {
    try {
      setIsLoading(true);
      let url = "/api/jokes/random";
      if (category) {
        url = `${url}?category=${category}`;
      }
      const res = await fetch(url);
      const resJson = await res.json();

      if (res.ok) {
        const data = resJson.data;
        setJoke(data);
      } else {
        throw new Error(resJson.errors[0].message);
      }
      
    } catch (error: unknown) {
      setErrMessage((error as Error).message);
    } finally {
      setIsLoading(false);
    }
  };

  return { isLoading, joke, errMessage, fetchJokeByCategory };
}
