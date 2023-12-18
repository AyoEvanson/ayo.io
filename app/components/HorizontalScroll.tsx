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
  const images = useRef(null);
  const [isLoading, setLoading] = useState(true);
  let imageNames: string[] = [];

  //collate image names
  imageData.forEach((image) => {
    imageNames.push(image.iName);
  });

  //loading use effect
  useEffect(() => {
    setLoading(false);
  }, []);

  //horizontal scroll effect
  useEffect(() => {
    let imageSet = gsap.utils.toArray(".image-set");
    let scrollerEndpoint = imageSet.length * 110;

    let to = gsap.to(imageSet, {
      xPercent: () => -100 * (imageSet.length - 1),
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

  //resize event listener
  const [width, setWidth] = useState(0); // default width, detect on server.
  const handleResize = () => setWidth(window.innerWidth);
  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [handleResize]);

  //loading output
  if (isLoading)
    return (
      <p className="p-5 text-2xl text-center text-purple-800 dark:text-white animate-bounce">
        Loading...
      </p>
    );

  //image output
  if (window.innerWidth > window.innerHeight) {
    console.log(window.innerWidth, window.innerHeight);
    return (
      <>
        <div className="overflow-hidden flex">
          <div>
            <div id="images" ref={scroller} className="flex relative h-[90vh]">
              {imageNames.map((imageName, index) => (
                <section
                  key={imageName}
                  className="image-set grid grid-cols-1 m-2 h-[90vh] w-[40vw] bg-purple-700 rounded-lg border-purple-500 border-4"
                >
                  <div className="col-span-1 m-2 mt-4 text-center text-white text-sm sm:text-xl font-bold underline">
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
                      className="object-contain max-h-[75vh]"
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
              className="col-span-1 m-2 bg-purple-700 rounded-lg border-purple-500 border-4 items-center"
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
