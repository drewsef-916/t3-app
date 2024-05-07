import Link from "next/link";
import { db } from "~/server/db";

export default async function HomePage() {

  const images = await db.query.images.findMany({
    orderBy: (model, { desc }) => desc(model.id)
  });

  console.log(images);

  return (
    <main className="">
      <div className="flex flex-wrap gap-4">
        {images.map((image, index) => (
          <div key={image.id + "-" + index} className="w-48 p-4">
            <img src={image.url} alt="image"/>
          </div>
        ))}
      </div>
     <h1>Hello gallery in progress</h1>
    </main>
  );
}
