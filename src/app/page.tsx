import Image from "next/image";
import SearchField from "./shared/components/Home/SearchField";

export default function Home() {
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
          <div className="grid gap-5 grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
            <div>image 1</div>
            <div>image 2</div>
            <div>image 3</div>
            <div>image 4</div>
          </div>
        </section>
      </div>
    </main>
  );
}
