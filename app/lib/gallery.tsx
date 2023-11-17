import fs from "fs";
import path from "path";

export function getImageFolders() {
  const imagesDir = path.join(process.cwd(), "public/images/photography");
  const imageFolders = fs
    .readdirSync(imagesDir, { withFileTypes: true })
    .filter((dirent) => dirent.isDirectory() && !/^\d/.test(dirent.name))
    .map((dirent) => dirent.name);

  return imageFolders;
}

export function getFolderImages(folder: string) {
  const imagesDir = path.join(
    process.cwd(),
    "public/images/photography",
    folder
  );

  let imageNames = fs.readdirSync(imagesDir);

  let imageData: ImageInfo[] = [];

  imageNames.map((imageName) => {
    let newImage: ImageInfo = {
      iFolder: folder,
      iName: imageName,
    };
    imageData.push(newImage);
  });
  return imageData;
}
