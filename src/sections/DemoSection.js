/* eslint-disable jsx-a11y/alt-text */
import Expo from "../imgs/expo.jpg";
export function DemoSection() {
  return (
    <div
      className="flex flex-col w-full px-10 sm:px-[120px] py-20 items-center"
      id="demo"
    >
      <div className="flex flex-col w-full lg:justify-between items-center gap-10 sm:gap-20">
        <div className="max-w-lg flex flex-col gap-8 items-center justify-center">
          <div className="flex flex-col gap-4 items-center justify-center">
            <h1 className="font-chivo text-4xl">See for yourself!</h1>
            <p className="font-roboto text-xl text-center">
              Check out Grapvine's demo video or scan the QR code to try the app
              using Expo to get a first hand look at all of the features,
              including finding and leaving recommendations, requesting
              recommendations from your network, and more!
            </p>
          </div>

          <img src={Expo} className="w-[400px]" />
        </div>
        <div className="flex-1 h-[400px]">
          <iframe
            width="100%"
            className="h-[200px] sm:h-[300px] lg:h-[420px]"
            src="https://www.youtube.com/embed/Ko--GuLZMxI?si=DPJmO0M13qH2fS1G"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </div>
  );
}
