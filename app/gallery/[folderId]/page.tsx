import { getFolderImages } from "../../lib/gallery";
import Image from "next/image";
// import gsap from 'gsap';
// import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
// gsap.registerPlugin(ScrollTrigger);

export function generateMetadata({ params }: { params: { folderId: string } }) {
  let { folderId } = params;
  folderId = folderId.charAt(0).toUpperCase() + folderId.slice(1);

  return {
    title: `Ayo.io | ${folderId}`,
    description: "Captured by Ayo",
  };
}

export default async function Images({
  params,
}: {
  params: { folderId: string };
}) {
  const { folderId } = params;
  const capFolderId = folderId.charAt(0).toUpperCase() + folderId.slice(1);
  const imageData = getFolderImages(folderId);
  const imageNames = imageData.map((image) => image.iName);
  // console.log(imageNames);

  return (
    <>
      <section>
        <div className="p-3 text-2xl text-center text-purple-600 dark:text-white font-bold underline">
          {capFolderId}
        </div>
        <br />
        <div className="p-2 flex flex-row overflow-x-auto items-center">
          {imageNames.map((imageName, index) => (
            <div key={imageName} className="flex-shrink-0">
              <h1 className="text-center mb-2 text-2xl text-purple-600 dark:text-white font-bold underline">
                {imageName}
              </h1>
              <Image
                src={`/images/photography/${folderId}/${imageName}`}
                alt={`Preview Image ${index + 1}`}
                priority={true}
                width={0}
                height={0}
                sizes="auto"
                style={{
                  width: "75%",
                  height: "75%",
                  margin: "auto",
                }}
              />
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
