import Link from "next/link";

const mockUrls = [
  "https://utfs.io/f/ca70159a-c37e-4b10-a9ec-fe5cf4cf5109-1k819z.jpg",
  "https://utfs.io/f/74af5f77-7f86-446f-9052-5c8ac0ebd16c-1k81a0.jpg",
  "https://utfs.io/f/b5105b06-a804-494c-8c46-df8714a7b58b-1k819w.jpg",
  "https://utfs.io/f/f5ee0648-f4d1-4b64-ad94-6d1bc54da7ab-1k819y.jpg",
  "https://utfs.io/f/19556780-301c-4735-895d-7e350798d589-1k819x.jpg"
]

const mockImages = mockUrls.map((url, idx) => ({
  id: idx + 1,
  url
}))

export default function HomePage() {
  return (
    <main className="">
      <div className="flex flex-wrap gap-4">
        {mockImages.map((image) => (
          <div key={image.id} className="w-48 p-4">
            <img src={image.url} alt="image"/>
          </div>
        ))}
      </div>
     <h1>Hello gallery in progress</h1>
    </main>
  );
}
