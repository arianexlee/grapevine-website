/* eslint-disable jsx-a11y/alt-text */
export function ConceptSection() {
  return (
    <div className="flex flex-col w-full px-10 sm:px-[120px] py-20">
      <div className="flex flex-col lg:flex-row w-full lg:justify-between item-center gap-10 sm:gap-20">
        <div className="flex-1 h-[400px]">
          <iframe
            width="100%"
            className="h-[200px] sm:h-[300px] lg:h-[420px]"
            src="https://www.youtube.com/embed/lRh_K2XxQLI?si=lp5a4dx4gUWab1MP"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </div>
        <div className="flex-1 flex flex-col gap-4 justify-center">
          <h1 className="font-chivo text-4xl">Why Grapevine?</h1>
          <p className="font-roboto text-xl">
            Grapevine emerged from an essential insight: services are deeply
            personal, far more than choosing a restaurant or a movie. We
            naturally turn to our trusted circle - family, friends, and even
            their acquaintances - for recommendations in these crucial areas.
            While a less-than-stellar meal might be forgettable, the
            consequences of subpar childcare can be significant.
            <br />
            <br />
            Our app simplifies your quest for trusted recommendations. With
            Grapevine, you can effortlessly search for recommendations within
            your direct contacts and their respective circles, ensuring you have
            a wealth of trusted options at your fingertips. No more endless
            texts or awkward requests for referrals. Discover the best services
            with ease and confidence, all through Grapevine.
          </p>
        </div>
      </div>
    </div>
  );
}
