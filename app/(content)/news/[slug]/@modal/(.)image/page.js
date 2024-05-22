"use client";

import { DUMMY_NEWS } from "@/dummy-news";
import { useRouter } from "next/navigation";

export default function ImageModalPage({ params }) {
  const slug = params.slug;
  const newsItem = DUMMY_NEWS.find((newsItem) => newsItem.slug === slug);

  if (!newsItem) {
    notFound();
  }

  const router = useRouter();
  function backdropClickHandler() {
    router.back();
  }

  return (
    <>
      <div className="modal-backdrop" onClick={backdropClickHandler}>
        <dialog className="modal" open>
          <div className="fullscreen-image">
            <img src={`/images/news/${newsItem.image}`} alt={newsItem.title} />
          </div>
        </dialog>
      </div>
    </>
  );
}
