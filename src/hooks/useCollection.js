import { useEffect, useState } from "react";
import { fetchCollection } from "../lib/api.js";

export default function useCollection(endpoint, fallback) {
  const [items, setItems] = useState(fallback);

  useEffect(() => {
    let mounted = true;
    fetchCollection(endpoint, fallback).then((data) => {
      if (mounted) setItems(data);
    });
    return () => {
      mounted = false;
    };
  }, [endpoint, fallback]);

  return items;
}
