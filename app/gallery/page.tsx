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
      <section
        key="Gallery Preview"
        className="grid grid-cols-1 sm:grid-cols-2 p-5 gap-5"
      >
        {imageFolders.map((imageFolder) => (
          <div key={imageFolder} className="col-span-1">
            <FolderPreview key="preview" folder={imageFolder} />
          </div>
        ))}
      </section>
    </>
  );
}
