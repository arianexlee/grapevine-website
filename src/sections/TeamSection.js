/* eslint-disable jsx-a11y/alt-text */
import Ariane from "../imgs/ariane.jpg";
import Emily from "../imgs/emily.jpg";
import Jenna from "../imgs/jenna.jpg";

export function TeamSection() {
  return (
    <div
      className="flex flex-col w-full px-[60px] py-20 md:px-[110px] gap-10"
      id="team"
    >
      <h1 className="font-chivo text-3xl">TEAM</h1>
      <div className="px-[100px] flex flex-col gap-[40px] md:flex-row md:gap-[40px] lg:gap-[100px]">
        <div className="flex flex-col justify-center items-center aspect-square gap-6">
          <img src={Emily} className="aspect-square rounded-[1000000px]" />
          <div className="text-center flex flex-col gap-2">
            <h1 className="leading-9 font-chivo text-[28px]">Emily Deng</h1>
            <p className="text-base font-chivo">DESIGNER & DEVELOPER</p>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center aspect-square gap-6">
          <img src={Jenna} className="aspect-square rounded-[1000000px]" />
          <div className="text-center flex flex-col gap-2">
            <h1 className="leading-9 font-chivo text-[28px]">Jenna Kim</h1>
            <p className="text-base font-chivo">DESIGNER & DEVELOPER</p>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center aspect-square gap-6">
          <img src={Ariane} className="aspect-square rounded-[1000000px]" />
          <div className="text-center flex flex-col gap-2">
            <h1 className="leading-9 font-chivo text-[28px]">Ariane Lee</h1>
            <p className="text-base font-chivo">DESIGNER & DEVELOPER</p>
          </div>
        </div>
        {/* <div className="flex flex-col aspect-square gap-6">
          <img src={Jenna} className="aspect-square rounded-[16px]" />
          <div className="flex flex-col pt-[6px] items-start gap-[6px] rounded-[16px] bg-black">
            <div className="px-[16px] text-white text-base leading-9 font-chivo">
              DESIGNER & DEVELOPER
            </div>
            <div className="w-full p-[16px] rounded-[16px] leading-9 bg-[#DBDBDB] font-chivo text-[28px]">
              Jenna Kim
            </div>
          </div>
        </div>
        <div className="flex flex-col aspect-square gap-6">
          <img src={Ariane} className="aspect-square rounded-[16px]" />
          <div className="flex flex-col pt-[6px] items-start gap-[6px] rounded-[16px] bg-black">
            <div className="px-[16px] text-white text-base leading-9 font-chivo">
              DESIGNER & DEVELOPER
            </div>
            <div className="w-full p-[16px] rounded-[16px] leading-9 bg-[#DBDBDB] font-chivo text-[28px]">
              Ariane Lee
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
}
