"use client";

import { FaLocationArrow } from "react-icons/fa6";
import Image from "next/image";

import { packages } from "@/data";
import { PinContainer } from "./ui/Pin";

const Packages = () => {
  return (
    <div className="py-10 relative z-10">
      <h1 className="heading">
        Our<span className="text-purple"> Packages</span>
      </h1>
      <div className="flex items-center justify-center p-4 gap-20 mt-6">
        {" "}
        {/* Increased gap */}
        {packages.map((item) => (
          <div
            className="lg:min-h-[25rem] h-[20rem] flex items-center justify-center sm:w-64 w-[50vw]"
            key={item.id}
          >
            <PinContainer
              title="/ui.aceternity.com"
              href="https://twitter.com/mannupaaji"
            >
              <div className="relative flex items-center justify-center sm:w-64 w-[50vw] overflow-hidden h-[15vh] lg:h-[25vh] mb-4">
                <div
                  className="relative w-full h-full overflow-hidden lg:rounded-xl"
                  style={{ backgroundColor: "#13162D" }}
                >
                  <Image
                    src="/bg.png"
                    alt="background pattern"
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
                <Image
                  src={item.img}
                  alt="service image"
                  layout="fill"
                  objectFit="contain"
                  className="z-10 absolute bottom-0"
                />
              </div>

              <h1 className="font-bold lg:text-xl md:text-lg text-sm line-clamp-1">
                {item.title}
              </h1>

              <p
                className="lg:text-lg lg:font-normal font-light text-xs line-clamp-2"
                style={{
                  color: "#BEC1DD",
                  margin: "0.5vh 0",
                }}
              >
                {item.des}
              </p>

              <div className="flex items-center justify-between mt-5 mb-2">
                <div className="flex items-center">
                  {item.iconLists.map((icon, index) => (
                    <div
                      key={index}
                      className="border border-white/[.2] rounded-full bg-black lg:w-8 lg:h-8 w-6 h-6 flex justify-center items-center"
                      style={{
                        transform: `translateX(-${5 * index + 2}px)`,
                      }}
                    >
                      <img
                        src={icon}
                        alt={`icon ${index + 1}`}
                        className="p-1"
                      />
                    </div>
                  ))}
                </div>

                <div className="flex justify-center items-center">
                  <p className="flex lg:text-lg md:text-xs text-xs text-purple">
                    Check Live Site
                  </p>
                  <FaLocationArrow className="ms-2" color="#CBACF9" />
                </div>
              </div>
            </PinContainer>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Packages;
