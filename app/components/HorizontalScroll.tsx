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
    let scrollerEndpoint = skillSet.length * 100;

    let to = gsap.to(skillSet, {
      xPercent: () => -100 * (skillSet.length - 1),
      ease: "none",
      scrollTrigger: {
        trigger: scroller.current,
        markers: false,
        pin: true,
        pinSpacing: true,
        scrub: 0.5,
        invalidateOnRefresh: true,
        anticipatePin: 1,

        end: () => "+=" + scrollerEndpoint,
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

  if (screen.orientation.angle == 0) {
    return (
      <>
        <div className="overflow-hidden flex">
          <div>
            <div id="skills" ref={scroller} className="flex relative h-[90vh]">
              {imageNames.map((imageName, index) => (
                <section
                  key={imageName}
                  className="skill-set grid grid-cols-1 m-2 h-[90vh] w-[45vw] bg-purple-900 rounded-lg border-purple-500 border-2"
                >
                  <div className="col-span-1 m-2 mt-4 text-center text-purple-600 dark:text-white text-sm sm:text-xl font-bold underline">
                    <h2>{imageName}</h2>
                  </div>
                  <div className="col-span-1 inline-flex items-center">
                    <Image
                      src={`/images/photography/${folderId}/${imageName}`}
                      alt={`Preview Image ${index + 1}`}
                      priority={index < 5}
                      width={0}
                      height={0}
                      sizes="auto"
                      style={{
                        width: "95%",
                        height: "100%",
                        margin: "auto",
                      }}
                      className="object-contain max-h-[70vh]"
                    />
                  </div>
                </section>
              ))}
            </div>
          </div>
        </div>
      </>
    );
  } else {
    return (
      <>
        <div className="grid grid-cols-2 flex-col ">
          {imageNames.map((imageName, index) => (
            <section
              key={imageName}
              className="col-span-1 m-2 bg-purple-900 rounded-lg border-purple-500 border-2"
            >
              <div className="col-span-1 mb-2 text-center text-purple-600 dark:text-white text-sm sm:text-xl font-bold underline">
                <h2>{imageName}</h2>
              </div>
              <div className="col-span-1 inline-flex">
                <Image
                  src={`/images/photography/${folderId}/${imageName}`}
                  alt={`Preview Image ${index + 1}`}
                  priority={index < 5}
                  width={0}
                  height={0}
                  sizes="auto"
                  style={{
                    width: "95%",
                    height: "100%",
                    margin: "auto",
                  }}
                  className="object-contain max-h-[80vh]"
                />
              </div>
            </section>
          ))}
        </div>
      </>
    );
  }
}
