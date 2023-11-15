import React from "react";
import Image from "next/image";

export default function ProfilePicture() {
  return (
    <div>
      <Image
        className="border-4 border-purple-500 dark:border-white drop-shadow-xl rounded-full mx-auto mt-6 hover:animate-pulse"
        src="/images/profile/profile.JPG"
        alt="Profile Picture"
        width={200}
        height={200}
        priority={true}
      />
    </div>
  );
}
