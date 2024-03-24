import { useEffect, useState } from "react";

export function useCategories() {
  const [isLoading, setIsLoading] = useState(false);
  const [categories, setCategories] = useState<string[]>([]);
  const [errMessage, setErrMessage] = useState("");
  useEffect(() => {
    const fetchCategories = async () => {
      setIsLoading(true);
      const res = await fetch("/api/categories");
      const resJson = await res.json();
      const resJsonData = resJson.data;
      setCategories(resJsonData);
    };
  }, []);

  return { isLoading, errMessage, categories };
}
