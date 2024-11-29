"use client";

import { useState } from "react";
import { subtitle, title } from "../primitives";
import { Link } from "@nextui-org/link";
import { button as buttonStyles } from "@nextui-org/theme";

export const Introduction = () => {
  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
      <div className="inline-block max-w-full text-center justify-center margin-30px ">
        {/* <div className="mb-8">
      <Link
        isExternal
        style={{ color: "white" , borderColor:"none" , background: "linear-gradient(63deg, #f88ee6, #6179fe)" }} 
        className={buttonStyles({ variant: "bordered", radius: "full"   })} 
      > 
        what we do
        </Link>
      
      <br/>
    </div>*/}

        <div className="w-full mt-12 mx-auto grid grid-cols-1 gap-12 text-center sm:grid-cols-2 md:grid-cols-3 lg:gap-y-16">
          <div>
            <div className="relative flex items-center justify-center mx-auto">
              <svg
                className="text-blue-100"
                width="105"
                height="105"
                viewBox="0 0 75 75"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M63.6911 28.8569C68.0911 48.8121 74.6037 61.2674 53.2349 65.9792C31.8661 70.6909 11.6224 61.2632 7.22232 41.308C2.82229 21.3528 3.6607 12.3967 25.0295 7.68503C46.3982 2.97331 59.2911 8.90171 63.6911 28.8569Z" />
              </svg>
              <svg
                className="lucide lucide-atom absolute text-blue-600 w-9 h-9"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 22 22"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.5"
                  d="M15.707 21.293a1 1 0 0 1-1.414 0l-1.586-1.586a1 1 0 0 1 0-1.414l5.586-5.586a1 1 0 0 1 1.414 0l1.586 1.586a1 1 0 0 1 0 1.414z"
                />
                <path d="m18 13-1.375-6.874a1 1 0 0 0-.746-.776L3.235 2.028a1 1 0 0 0-1.207 1.207L5.35 15.879a1 1 0 0 0 .776.746L13 18" />
                <path d="m2.3 2.3 7.286 7.286" />
                <circle cx="11" cy="11" r="2" />
              </svg>
            </div>
            <h3 className="mt-8 text-lg font-semibold text-black">
              Graphic Design{" "}
            </h3>
            <p className="mt-4 text-base text-gray-600">
              Creates visually engaging content to convey your brand’s message
              and captivate audiences.
            </p>
          </div>

          <div>
            <div className="relative flex items-center justify-center mx-auto">
              <svg
                className="text-orange-100"
                width="105"
                height="109"
                viewBox="0 0 70 70"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M62 13.001C62 33.4355 53.9345 64.001 33.5 64.001C13.0655 64.001 0 50.435 0 30.0005C0 9.56596 2.56546 4.00021 23 4.00021C43.4345 4.00021 62 -7.43358 62 13.001Z" />
              </svg>
              <svg
                className="lucide lucide-goal absolute text-orange-600 w-10 h-11"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="2 2 22 22"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.5"
                  d="M12 13V2l8 4-8 4"
                />
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.5"
                  d="M20.561 10.222a9 9 0 1 1-12.55-5.29"
                />
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.5"
                  d="M8.002 9.997a5 5 0 1 0 8.9 2.02"
                />
              </svg>
            </div>
            <h3 className="mt-8 text-lg font-semibold text-black">
              Digital Marketing{" "}
            </h3>
            <p className="mt-4 text-base text-gray-600">
              Boosts brand visibility and engages customers through targeted
              campaigns across digital and traditional platforms.
            </p>
          </div>

          <div>
            <div className="relative flex items-center justify-center mx-auto">
              <svg
                className="text-green-100"
                width="105"
                height="105"
                viewBox="0 0 74 74"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M65.5 30C65.5 50.4345 46.4345 68 26 68C5.56546 68 0 50.4345 0 30C0 9.56546 12.5655 0 33 0C53.4345 0 65.5 9.56546 65.5 30Z" />
              </svg>
              <svg
                className="lucide lucide-code-xml absolute text-green-600 w-11 h-10"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="2 2 22 22"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.5"
                  d="m18 16 4-4-4-4"
                />
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.5"
                  d="m6 8-4 4 4 4"
                />
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.5"
                  d="m14.5 4-5 16"
                />
              </svg>
            </div>
            <h3 className="mt-8 text-lg font-semibold text-black">
              Web Development
            </h3>
            <p className="mt-4 text-base text-gray-600">
              Builds customized digital solutions—websites, apps, software—to
              meet your business needs and enhance user experience.
            </p>
          </div>
        </div>
      </div>

      <div className="flex gap-3 mt-5">
        <Link
          isExternal
          className={buttonStyles({
            color: "primary",
            radius: "full",
            size: "lg",
            variant: "shadow",
          })}
          href="#"
        >
          Meet The Team
        </Link>
      </div>
    </section>
  );
};
