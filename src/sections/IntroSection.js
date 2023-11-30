/* eslint-disable jsx-a11y/alt-text */
import Phones from "../imgs/phones.png";
export function IntroSection() {
  return (
    <div className="flex flex-col w-full gap-10 bg-[#8B68C6] text-white">
      <div className="flex flex-col xl:flex-row gap-4 items-center justify-between h-full">
        <div className="flex flex-col px-10 sm:px-[120px] xl:pl-[120px] py-20 gap-4">
          <h1 className="font-chivo text-4xl">
            Services you'll love, <br /> backed by people you trust.
          </h1>
          <p className="font-roboto text-xl">
            Finding the right service, be it a chic haircut, an adept mechanic,
            or a reliable nanny, can often be a daunting task. Grapevine
            simplifies this process for you. We connect you with trusted
            services recommended by your own network. Skip the uncertainty of
            online reviews and find top-quality services with Grapevine!
          </p>
        </div>
        <div className="bg-black xl:bg-[#8B68C6]">
          <img src={Phones} className="h-[100%]" />
        </div>
      </div>
    </div>
  );
}
