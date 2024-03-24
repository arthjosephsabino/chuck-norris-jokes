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
        if (res.ok) {
          const data = resJson.data;
          setCategories(data);
        } else {
          throw new Error(resJson.errors[0].message);
        }
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
