import Link from "next/link";
import Image from "next/image";
import { DUMMY_NEWS } from "@/dummy-news";

export default function NewsPage() {
  return (
    <div>
      <h1>News Page</h1>
      <ul className="news-list">
        {DUMMY_NEWS.map(({ id, slug, title, image }) => (
          <li key={id}>
            <Link href={`news/${slug}`}>
              <Image
                src={`/images/news/${image}`}
                alt={title}
                width={50}
                height={50}
              />
              <span>{title}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
