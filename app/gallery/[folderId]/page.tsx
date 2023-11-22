import HorizontalScroll from "@/app/components/HorizontalScroll";
import { getFolderImages, getImageFolders } from "@/app/lib/gallery";
import { notFound } from "next/navigation";

export async function getStaticPaths() {
  const folders = getImageFolders();
  const paths = folders.map((folderId) => ({
    params: { folderId },
  }));

  return {
    paths,
    fallback: false,
  };
}

export function generateMetadata({ params }: { params: { folderId: string } }) {
  let { folderId } = params;
  folderId = folderId.charAt(0).toUpperCase() + folderId.slice(1);

  return {
    title: `Ayo.io | ${folderId}`,
    description: "Captured by Ayo",
  };
}

export default function Images({ params }: { params: { folderId: string } }) {
  const imageData = getFolderImages(params.folderId);
  if (imageData == undefined) return notFound();

  return (
    <>
      <section>
        <div className="m-3 mt-5 text-2xl text-center text-purple-600 dark:text-white font-bold underline">
          {params.folderId.charAt(0).toUpperCase() + params.folderId.slice(1)}
        </div>
        <br />
        <div>
          <HorizontalScroll folderId={params.folderId} imageData={imageData} />
        </div>
      </section>
    </>
  );
}
