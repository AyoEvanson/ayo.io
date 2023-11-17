import Image from "next/image";
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
      <main className="grid grid-cols-1 sm:grid-cols-3 m-10 p-5 bg-green-400 from-purple-600 bg-gradient-to-r bg-opacity-70 rounded-lg">
        <section className="col-span-1 sm:col-span-3 row-span-1 mb-2 text-l font-bold text-white opacity-85">
          <h1>{folderName}</h1>
        </section>

        <br />

        <section className="inline-flex row-flex col-span-3">
          {previewImages.map((previewImage, index) => (
            <div className="col-span-1 hover:opacity-75" key={index}>
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
                }}
              />
            </div>
          ))}
        </section>
      </main>
    </>
  );
}
