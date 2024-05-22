"use client";

import NewsList from "@/components/news-list";
import { useEffect, useState } from "react";

export default function NewsPage() {
  const [news, setNews] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function fetchNews() {
      setLoading(true);
      const response = await fetch("http://localhost:8080/news");

      if (!response.ok) {
        setError("Error to fetch news.");
        setLoading(false);
        return;
      }

      const responseNews = await response.json();
      setNews(responseNews);
      setLoading(false);
    }

    fetchNews();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  let newsContent;

  if (news) {
    newsContent = <NewsList news={news} />;
  }

  return (
    <>
      <h1>News</h1>
      {newsContent}
    </>
  );
}
