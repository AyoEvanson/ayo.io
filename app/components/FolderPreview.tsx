import Image from "next/image";
import Link from "next/link";
import { getFolderImages } from "../lib/gallery";
import { Suspense } from "react";

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
    <main className="grid grid-cols-1 sm:grid-cols-3 gap-4 p-5 bg-gradient-to-t from-purple-600 dark:from-purple-200 to-transparent hover:from-teal-200 border-4 border-purple-600 dark:border-purple-200 hover:border-teal-200 rounded-lg">
      <div className="col-span-1 sm:col-span-3 text-xl text-center font-bold underline underline-offset-2 text-purple-600 dark:text-white">
        <Link href={`/gallery/${folder}`} key={folderName}>
          <h1>{folderName}</h1>
        </Link>
      </div>
      <br />
      <div className="col-span-1 sm:col-span-3 inline-flex justify-center items-center">
        <Suspense fallback={<div>Loading...</div>}>
          {previewImages.map((previewImage, index) => (
            <Link href={`/gallery/${folder}`} key={index}>
              <Image
                src={`/images/photography/${folder}/${previewImage}`}
                alt={`Preview Image ${index + 1}`}
                priority={true}
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
        </Suspense>
      </div>
    </main>
  );
}
