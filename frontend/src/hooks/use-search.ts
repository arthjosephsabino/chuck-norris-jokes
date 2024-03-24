import { useState } from "react";
import { Joke } from "../types/joke";

export function useSearch() {
  const [isLoading, setIsLoading] = useState(false);
  const [jokes, setJokes] = useState<Joke[]>([]);
  const [errMessage, setErrMessage] = useState("");
  const [total, setTotal] = useState(0);
  const fetchJokes = async (query: string, page: number) => {
    try {
      setIsLoading(true);
      const url = `/api/jokes/search?query=${query}&page=${page}&limit=10`;
      const res = await fetch(url);
      const resJson = await res.json();
      if (res.ok) {
        const data = resJson.data;
        setJokes(data.result);
        setTotal(data.total);
      } else {
        throw new Error(resJson.errors[0].message);
      }
    } catch (error: unknown) {
      setErrMessage((error as Error).message);
    } finally {
      setIsLoading(false);
    }
  };

  return { isLoading, errMessage, total, jokes, fetchJokes };
}
