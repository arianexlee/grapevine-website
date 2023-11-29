/* eslint-disable jsx-a11y/alt-text */
import Phones from "../imgs/phones.png";
export function IntroSection() {
  return (
    <div className="flex flex-col w-full gap-10 bg-[#8B68C6] text-white h-100">
      <div className="flex flex-row gap-4 items-center justify-between">
        <div className="flex flex-col pl-[120px] py-20 gap-4">
          <h1 className="font-chivo text-4xl">
            Services you'll love, <br /> backed by people you trust.
          </h1>
          <p className="font-roboto text-xl">
            Haircuts are personal, mechanics can scam you, and good nannies can
            be tough to find. Grapevine connects you to businesses that have
            been pre-vetted by your network so you don't have to rely on the
            reviews of strangers to get the service you need.
          </p>
        </div>
        {/* <div className="flex flex-col items-start pl-[160px] gap-4">
          <div className="flex flex-col items-center">
            <img src={Logo} className="h-[200px]" />
            <h1 className="font-chivo text-[100px]">Grapevine</h1>
          </div>
          <h2 className="font-roboto text-3xl ">
            Services you'll love, backed by people you trust
          </h2>
        </div> */}
        <div className="h-100">
          <img src={Phones} className="h-100" />
        </div>
      </div>
    </div>
  );
}
