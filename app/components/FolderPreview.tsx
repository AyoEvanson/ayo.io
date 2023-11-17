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
    <>
      <main className="grid grid-cols-1 sm:grid-cols-3 m-10 p-5 bg-gradient-to-t from-lime-200 to-transparent hover:from-teal-200 border-8 border-lime-200 hover:border-teal-200 rounded-lg">
        <section className="col-span-1 sm:col-span-3 row-span-1 mb-2 text-l sm:text-xl text-center font-bold text-white underline opacity-100">
          <h1>{folderName}</h1>
        </section>

        <br />

        <section className="inline-flex row-flex col-span-3">
          {previewImages.map((previewImage, index) => (
            <div className="col-span-1" key={index}>
              <Link href="/">
                <Image
                  src={`/images/photography/${folder}/${previewImage}`}
                  alt={`Preview Image ${index + 1}`}
                  priority={true}
                  width={0}
                  height={0}
                  sizes="100vw"
                  style={{
                    width: "95%",
                    height: "100%",
                    margin: "auto",
                    objectFit: "cover",
                  }}
                />
              </Link>
            </div>
          ))}
        </section>
      </main>
    </>
  );
}
