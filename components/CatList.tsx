import Image from "next/image";
import Link from "next/link";

export type Cat = {
  id: string;
  url?: string;
  height?: number;
  width?: number;
};

const getCatImages = async (): Promise<Cat[]> => {
  const response = await fetch(
    "https://api.thecatapi.com/v1/images/search?limit=10",
    { next: { revalidate: 0 } }
  );

  return response.json();
};

export default async function CatList() {
  const cats = await getCatImages();

  return (
    <ul>
      {cats
        .filter((cat) => cat.url)
        .map(({ id, url }) => (
          <li key={id}>
            <Link href={`/cats/${id}`}>
              <Image
                src={url!}
                alt="one of Cat image or name"
                width={300}
                height={300}
              />
            </Link>
          </li>
        ))}
    </ul>
  );
}
