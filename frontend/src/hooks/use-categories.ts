import { useEffect, useState } from "react";

export function useCategories() {
  const [isLoading, setIsLoading] = useState(false);
  const [categories, setCategories] = useState<string[]>([]);
  const [errMessage, setErrMessage] = useState("");
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        setIsLoading(true);
        const res = await fetch("/api/categories");
        const resJson = await res.json();
        const data = resJson.data;
        setCategories(data);
      } catch (error: unknown) {
        setErrMessage((error as Error).message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchCategories();
  }, []);

  return { isLoading, errMessage, categories };
}
