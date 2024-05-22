import NewsList from "@/components/news-list";

export default async function NewsPage() {
  const response = await fetch("http://localhost:8080/news");

  if (!response.ok) {
    return <p>Error to fetch news.</p>;
  }

  const news = await response.json();

  return (
    <>
      <h1>News</h1>
      <NewsList news={news} />
    </>
  );
}
