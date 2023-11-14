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
        <main className="grid grid-flow-row-dense gap-1 sm:gap-0 grid-cols-1 sm:grid-cols-3 grid-rows-10 ml-10 mr-10 mb-12 text-white">
          <div>
            <div key="who" className="col-span-1">
              <div
                key="title"
                className="row-span-1 p-3 text-xl text-center text-decoration-line: underline bg-purple-600 rounded-t-md sm:rounded-none sm:rounded-tl-lg"
              >
                <p>Who am I?</p>
              </div>

              <div
                key="Bio"
                className="row-span-2 p-3 pt-0 text-md text-center bg-purple-600 rounded-b-md sm:rounded-none"
              >
                <p>
                  I'm 23, hold both a British and a German passport, and have
                  German/Nigerian heritage.
                </p>
                <br />
                <p>
                  For the majority of my life, I've lived in High Wycombe,
                  although I was born and, until I was 6, raised in West London.
                </p>
              </div>
            </div>

            <div
              key="languages"
              className="row-span-1 mt-1 sm:m-0 text-center bg-purple-500 rounded-md sm:rounded-none"
            >
              <div
                key="title"
                className="p-3 text-xl text-decoration-line: underline"
              >
                <p>Languages Spoken</p>
              </div>
              <div className="text-md p-3 pt-0">
                <p>English: Native</p>
                <p>German: Fluent</p>
                <p>Italian: Beginner</p>
                <p>Japanese: Extreme Beginner</p>
              </div>
            </div>
          </div>

          <div key="life" className="col-span-1 sm:col-span-2">
            <div
              key="title"
              className="row-span-1 p-3 text-xl text-center text-decoration-line: underline bg-purple-400 rounded-t-md sm:rounded-none sm:rounded-tr-lg"
            >
              <p>Life so far</p>
            </div>

            <div
              key="about"
              className="row-span-3 p-3 pt-0 text-md text-center bg-purple-400 rounded-b-md sm:rounded-none"
            >
              <li className="list-none">
                <p>2000: Born 30th March</p>
                <p>2000 - 2016: Trainee Cheeky Bugger</p>
                <p>2005 - 2011: Oakington Manor Primary School</p>
                <p>2010 - 2016: Competetive Swimmer</p>
                <p>2011 - 2018: John Hamden Grammar School</p>
                <p>2017: Driving Test ✅</p>
                <p>2018: A-Level bosh; Maths A*, Physics A, Further Maths A</p>
                <p>
                  2018: Off to the University of Leeds to study Mechatronics and
                  Robotics
                </p>
                <p>2021: Bachelor's ✅</p>
                <p>2021: Started my placement at Beckhoff Automation (BAUK)</p>
                <p>
                  2022: Back to uni for my 5th and final year, whilst
                  maintaining part time work at BAUK
                </p>
                <p>
                  2023: Graduating with a first in my Master's of Engineering
                </p>
              </li>
            </div>
          </div>
        </main>
      </body>
    </>
  );
}
