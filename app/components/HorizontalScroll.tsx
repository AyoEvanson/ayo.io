"use client";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useState, useEffect, useRef } from "react";
gsap.registerPlugin(ScrollTrigger);

export default function HorizontalScroll({
  imageData,
  folderId,
}: {
  imageData: ImageInfo[];
  folderId: string;
}) {
  const scroller = useRef(null);
  const skills = useRef(null);
  const [isLoading, setLoading] = useState(true);

  let imageNames: string[] = [];

  imageData.forEach((image) => {
    imageNames.push(image.iName);
  });

  useEffect(() => {
    setLoading(false);
  }, []);

  useEffect(() => {
    let skillSet = gsap.utils.toArray(".skill-set");

    let to = gsap.to(skillSet, {
      xPercent: () => -100 * (skillSet.length - 1),
      ease: "none",
      scrollTrigger: {
        trigger: scroller.current,
        markers: false,
        pin: true,
        pinSpacing: true,
        scrub: 1,
        invalidateOnRefresh: true,
        anticipatePin: 1,
        snap: 1 / (skillSet.length - 1),

        end: () => "+=" + window.innerWidth,
      },
    });

    return () => {
      to.kill();
    };
  });

  if (isLoading)
    return (
      <p className="p-5 text-2xl text-center text-purple-800 dark:text-white animate-bounce">
        Loading...
      </p>
    );

  return (
    <>
      <div className="overflow-hidden flex">
        <div className="overflow-hidden">
          <div
            id="skills"
            ref={scroller}
            className="flex overflow-x-hidden w-[2000vw] relative h-[90vh]"
          >
            {imageNames.map((imageName, index) => (
              <section
                ref={skills}
                key={imageName}
                className="skill-set grid grid-cols-1 items-center mt-5 w-[60vw] bg-transparent"
              >
                <div className="col-span-1 text-center text-purple-600 dark:text-white text-xl font-bold underline">
                  <h1>{imageName}</h1>
                </div>
                <div className="col-span-1 inline-flex">
                  <Image
                    src={`/images/photography/${folderId}/${imageName}`}
                    alt={`Preview Image ${index + 1}`}
                    priority={true}
                    width={0}
                    height={0}
                    sizes="auto"
                    style={{
                      width: "95%",
                      height: "100%",
                      margin: "auto",
                    }}
                    className="object-contain max-w-[90vw] max-h-[80vh]"
                  />
                </div>
              </section>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
