/* eslint-disable jsx-a11y/alt-text */
export function DemoSection() {
  return (
    <div className="flex flex-col w-full px-10 sm:px-[120px] py-20" id="demo">
      <div className="flex flex-col lg:flex-row w-full lg:justify-between item-center gap-10 sm:gap-20">
        <div className="max-w-lg flex flex-col gap-8 justify-center">
          <div className="flex flex-col gap-4 justify-center">
            <h1 className="font-chivo text-4xl">See for yourself!</h1>
            <p className="font-roboto text-xl">
              Check out Grapvine's demo video or try out our Figma prototype to
              get a first hand look at all of the features, including finding
              and leaving recommendations, requesting recommendations from your
              network, and more!
            </p>
          </div>
          <a
            href="https://www.figma.com/proto/kYvHrnqoLD0qnNdP5VA7Fs/Grapevine-(Copy)?page-id=0%3A1&type=design&node-id=1467-14731&viewport=9005%2C-1246%2C0.47&t=ctno9AfaTkxUHHDy-9&scaling=scale-down&starting-point-node-id=1467%3A14731&show-proto-sidebar=1"
            target="_blank"
            rel="noreferrer"
          >
            <div className="bg-[#8B68C6] text-white max-w-fit py-2 px-6 rounded-[16px]">
              <p className="font-chivo text-xl">TRY THE PROTOTYPE</p>
            </div>
          </a>
        </div>
        <div className="flex-1 h-[400px]">
          <iframe
            width="100%"
            className="h-[200px] sm:h-[300px] lg:h-[400px]"
            src="https://www.youtube.com/embed/lRh_K2XxQLI?si=lp5a4dx4gUWab1MP"
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
