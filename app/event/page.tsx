import Tag3d from "@/components/animations/3dtag";
import { subtitle, title } from "@/components/primitives";
import Bentodemo from "./Bento";

export default function EventPage() {
  return (
    <div className="py-[72px] sm:py-24 ">
      <div className="">
        <div className="text-center font-bold sm:text-6xl tracking-tighter">
          <span className={title({ size: "lg" })}>Under the</span>
          <span className={title({ size: "lg", color: "violet" })}>
            {" "}
            Telescope&nbsp;
          </span>
        </div>
        <div className="max-w-xl mx-auto">
          <div
            className={subtitle({
              class:
                "text-center mt-5w-full text-lg lg:text-xl text-default-600 max-w-xl mt-4 mx-auto",
            })}
          >
            A Close-Up Look at Our Latest Innovations
          </div>
        </div>
        <div className="flex flex-col items-center justify-center sm:flex-row gap-4 mt-32">
          <Bentodemo />
        </div>
      </div>
    </div>
  );
}
