import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    // home heading
    <>
      <header className="px-3 mx-auto">
        <p className="mt-12 mb-12 text-3xl text-center text-purple-800 dark:text-white">
          Welcome to <span className="font-bold">Ayo.io</span>
        </p>
      </header>
      {/* home content */}
      <body>
        <main className="grid grid-flow-row-dense grid-cols-1 sm:grid-cols-3 gap-1 sm:gap-0 ml-10 mr-10 mb-12 text-white">
          <section className="col-span-1 inline-flex flex-col sm:bg-purple-500 sm:rounded-tl-lg">
            <section
              key="who"
              className="bg-purple-600 rounded-lg sm:rounded-none sm:rounded-tl-lg  items-stretch"
            >
              <div
                key="title"
                className="p-3 text-xl text-center text-decoration-line: underline "
              >
                <p>Who am I?</p>
              </div>

              <div key="Bio" className="p-3 pt-0 text-md text-center">
                <p>
                  I'm 23, hold both a British and a German passport, and have
                  German/Nigerian heritage.
                </p>
                <br />
                <p>
                  For the majority of my life, I've lived in High Wycombe,
                  although I was born and, until I was 6, raised in West London.
                  I spent the best part of 5 years up in Leeds for Uni which was
                  a blast.
                </p>
                <br />
                <p>
                  I'm a strong believer that there is a distinct difference
                  between being alive and living. And I like to spend my time
                  living. Whether that be through learning, adventuring, or
                  clowning around.
                </p>
              </div>
            </section>

            <section
              key="language"
              className="text-center mt-1 sm:mt-0 bg-purple-500 rounded-lg sm:rounded-none items-stretch"
            >
              <div
                key="title"
                className="p-3 text-xl sm:mb-2 text-decoration-line: underline" //try to change mb-2 to dynamic, currently only applied for screens
              >
                <p>Languages Spoken</p>
              </div>
              <ul className="p-3 pt-0 text-md">
                <li>English: Native</li>
                <li>German: Fluent</li>
                <li>Italian: Beginner</li>
                <li>Japanese: Extreme Beginner</li>
              </ul>
            </section>
          </section>

          <section
            key="life"
            className="col-span-1 sm:col-span-2 bg-purple-400 rounded-lg sm:rounded-none sm:rounded-tr-lg"
          >
            <div
              key="title"
              className="p-3 text-xl text-center text-decoration-line: underline "
            >
              <p>Life so far</p>
            </div>

            <div key="about" className="p-3 pt-0 text-md text-center">
              <ul className="list-none">
                <li>2000: Born 30th March</li>
                <li>2000 - 2016: Trainee Cheeky Bugger</li>
                <li>2005 - 2011: Oakington Manor Primary School</li>
                <li>2010 - 2016: Competetive Swimmer</li>
                <li>2011 - 2018: John Hamden Grammar School</li>
                <li>2017: Driving Test ✅</li>
                <li>
                  2018: A-Level bosh; Maths A*, Physics A, Further Maths A
                </li>
                <li>
                  2018: Off to the University of Leeds to study Mechatronics and
                  Robotics
                </li>
                <li>2021: Bachelor's ✅</li>
                <li>
                  2021: Started my placement at Beckhoff Automation (BAUK)
                </li>
                <li>
                  2022: Back to uni for my 5th and final year, whilst
                  maintaining part time work at BAUK
                </li>
                <li>2023: Stomped through the London Marathon</li>
                <li>
                  2023: Graduated with a first in MEng Mechatronics and Robotics
                </li>
                <li>2023: Stomped around the Lisbon Marathon</li>
              </ul>
            </div>
          </section>

          <section
            key="quotes"
            className="pb-5 col-span-1 bg-purple-400 rounded-lg sm:rounded-none sm:rounded-b-lg"
          >
            <div
              key="title"
              className="p-3 text-xl text-center text-decoration-line: underline "
            >
              Tippidy top quotations that have blessed me with knowledge
            </div>

            <div className="p-5 pt-0 text-md text-left">
              <ul className="list-none pb-1">
                <li className="p-1">
                  Nothing in this world is good or bad, thinking makes it so.
                  <h1 className="text-center text-sm font-bold">
                    William Shakespeare
                  </h1>
                </li>
                <li className="p-1">
                  A ship is most safe in harbour, but that is not what ships are
                  for.
                  <h1 className="text-center text-sm font-bold">
                    John A. Shedd
                  </h1>
                </li>
                <li className="p-1">
                  It is not death that a man should fear, but he should fear not
                  beginning to live.
                  <h1 className="text-center text-sm font-bold">
                    Marcus Aurelius
                  </h1>
                </li>
                <li className="p-1">
                  Never let the future disturb you. You will meet it, if you
                  have to, with the same weapons of reason which today arm you
                  against the present.
                  <h1 className="text-center text-sm font-bold">
                    Marcus Aurelius
                  </h1>
                </li>
                <li>
                  Never attribute to malice that which is adequately explained
                  by stupidity.
                  <h1 className="text-center text-sm font-bold">
                    Robert J. Hanlon
                  </h1>
                </li>
              </ul>
            </div>
          </section>

          <section
            key="gallery"
            className="pb-5 col-span-1 sm:col-span-2 bg-purple-600 rounded-lg sm:rounded-none sm:rounded-b-lg"
          >
            <div
              key="title"
              className="p-3 text-xl text-center text-decoration-line: underline"
            >
              Gallery
            </div>

            <div className="hover:opacity-75">
              <Link href="/gallery">
                <Image
                  width={0}
                  height={0}
                  sizes="100vw"
                  style={{
                    width: "90%",
                    height: "auto",
                    margin: "auto",
                  }}
                  src="/images/profile/preview.JPEG"
                  alt="Photography Preview"
                  priority={true}
                />
              </Link>
            </div>
          </section>
        </main>
      </body>
    </>
  );
}
