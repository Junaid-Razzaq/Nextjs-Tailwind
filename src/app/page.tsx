import Image from "next/image";
import SearchField from "./shared/components/Home/SearchField";
import Images from "./shared/assets/page";

export default function Home() {
  const {
    ConstructionOne,
    ConstructionTwo,
    ConstructionThree,
    ConstructionFour,
  } = Images();
  return (
    <main className="">
      <div className="container">
        <div className="__Main_Image h-[70vh] bg-center bg-no-repeat bg-cover w-full rounded-md">
          <div className="flex flex-col justify-center items-center h-[70vh]">
            <div className="lg:w-3/6">
              <h1 className="text-5xl font-bold text-center text-light">
                Let's find a home that's perfect for you
              </h1>
            </div>

            {/* Search Field Component */}

            <div className="lg:w-4/6 mt-5">
              <SearchField />
            </div>
          </div>
        </div>

        {/* Clients Section */}
        <section className="py-20">
          <div className="font-serif text-center text-5xl text-primary mb-4">
            Our Projects
          </div>
          <div className="grid gap-5 grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
            <div>
              <Image
                src={ConstructionOne}
                className="w-auto h-auto"
                alt="Contruction One"
              />
            </div>
            <div>
              <Image
                src={ConstructionTwo}
                className="w-auto h-auto"
                alt="Contruction Two"
              />
            </div>
            <div>
              <Image
                src={ConstructionThree}
                className="w-auto h-auto"
                alt="Contruction Three"
              />
            </div>
            <div>
              <Image
                src={ConstructionFour}
                className="w-auto h-auto"
                alt="Contruction Four"
              />
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
