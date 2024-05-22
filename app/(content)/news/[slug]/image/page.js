import { DUMMY_NEWS } from "@/dummy-news";

export default function ImagePage({ params }) {
  const slug = params.slug;
  const newsItem = DUMMY_NEWS.find((newsItem) => newsItem.slug === slug);

  return <img src={`/images/news/${newsItem.image}`} alt={newsItem.title} />;
}
