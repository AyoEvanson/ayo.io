import type { Metadata } from "next";
import FolderPreview from "../components/FolderPreview";
import { getImageFolders } from "../lib/gallery";

export const metadata: Metadata = {
  title: "Ayo.io | Gallery",
  description: "Inspired, developed and lived by Ayo",
};

export default function Gallery() {
  let imageFolders = getImageFolders();
  // console.log(imageFolders);

  return (
    <>
      <section>
        {imageFolders.map((imageFolder) => (
          <FolderPreview key={imageFolder} folder={imageFolder} />
        ))}
      </section>
    </>
  );
}
