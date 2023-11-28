import CatList from "@/components/CatList";
import { Suspense } from "react";
import Image from "next/image";

export default async function page() {
  return (
    <div>
      Myself is available right away
      <Suspense fallback={<p>Cats are not here yet. loading.... </p>}>
        <CatList />
      </Suspense>
    </div>
  );
}
