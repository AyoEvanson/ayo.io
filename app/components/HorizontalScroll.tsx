"use client";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useRef, useEffect } from "react";
gsap.registerPlugin(ScrollTrigger);

export default function HorizontalScroll({
  imageData,
  folderId,
}: {
  imageData: ImageInfo[];
  folderId: string;
}) {
  let imageNames: string[] = [];

  imageData.forEach((image) => {
    imageNames.push(image.iName);
  });

  const sectionRef = useRef(null);
  const triggerRef = useRef(null);

  useEffect(() => {
    const pin = gsap.fromTo(
      sectionRef.current,
      {
        translateX: 0,
      },
      {
        translateX: -300,
        ease: "none",
        duration: 1,
        scrollTrigger: {
          trigger: triggerRef.current,
          start: "top top",
          end: "2000 top",
          scrub: 0.6,
          pin: true,
        },
      }
    );

    return () => {
      pin.kill();
    };
  }, []);

  return (
    <>
      <section className="overflow-hidden overflow-x-scroll" ref={triggerRef}>
        <div className="flex flex-row w-[500vw] h-screen">
          {imageNames.map((imageName, index) => (
            <div
              key={imageName}
              className="flex justify-center align-middle items-center p-3 w-[150vw]"
              ref={sectionRef}
            >
              <div className="flex flex-col">
                <h1 className="text-center mb-2 text-xl text-purple-600 dark:text-white font-bold underline">
                  {imageName}
                </h1>
                <br />
                <Image
                  src={`/images/photography/${folderId}/${imageName}`}
                  alt={`Preview Image ${index + 1}`}
                  priority={true}
                  width={500}
                  height={500}
                />
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
