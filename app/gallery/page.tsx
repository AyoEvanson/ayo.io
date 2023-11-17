import FolderPreview from "../components/FolderPreview";
import { getImageFolders } from "../lib/gallery";

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
