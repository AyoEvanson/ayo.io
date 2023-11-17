import Image from "next/image";
import Link from "next/link";
import { getFolderImages } from "../lib/gallery";

export default function FolderPreview({ folder }: { folder: string }) {
  let imageNames = getFolderImages(folder);
  // console.log(imageNames);

  // Randomly select 3 images
  let previewImages = [];
  let noOfPreviewImages = 3;

  for (let i = 0; i < noOfPreviewImages && imageNames.length > 0; i++) {
    let randomIndex = Math.floor(Math.random() * imageNames.length);
    if (imageNames[randomIndex]) {
      previewImages.push(imageNames[randomIndex].iName);
      imageNames.splice(randomIndex, 1);
    }
  }

  const folderName = folder.charAt(0).toUpperCase() + folder.slice(1);

  return (
    <main className="max-w-4xl p-10 inline-flex flex-col-dense grid-cols-1 sm:grid-cols-2 gap-4">
      <section className="grid grid-cols-1 sm:grid-cols-3 gap-4 p-5 bg-gradient-to-t from-lime-200 to-transparent hover:from-teal-200 border-8 border-lime-200 hover:border-teal-200 rounded-lg">
        <div className="col-span-1 sm:col-span-3 text-xl font-bold text-white">
          <h1>{folderName}</h1>
        </div>
        <br />
        <div className="col-span-1 sm:col-span-3 inline-flex gap-3 justify-center items-center">
          {previewImages.map((previewImage, index) => (
            <Link href="/" key={index}>
              <Image
                src={`/images/photography/${folder}/${previewImage}`}
                alt={`Preview Image ${index + 1}`}
                priority={true}
                layout="responsive"
                width={0}
                height={0}
                sizes="auto"
                style={{
                  width: "95%",
                  height: "100%",
                  margin: "auto",
                }}
              />
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
