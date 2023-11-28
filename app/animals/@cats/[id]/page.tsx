import { Cat } from "../page";
import Image from "next/image";
type PropsType = {
  params: { id: string };
  searchParams: { color: string };
};

export const generateMetadata = ({ params, searchParams }: PropsType) => {
  return {
    title: `Cat with id ${params.id}}`,
    description: `Hey This page is about the cat with fur color that is ${searchParams.color}`
  };
};

// localhost:3000/cats/123123

const getCatImage = async (id: string): Promise<Cat> => {
  const response = await fetch(`https://api.thecatapi.com/v1/images/${id}`);

  return response.json();
};

export default async function page({ params }: PropsType) {
  const id = params.id;
  const cat = await getCatImage(id);

  return (
    <div>
      <div>
        {<Image src={cat.url!} alt="a cat image" width={500} height={400} />}
      </div>
    </div>
  );
}
