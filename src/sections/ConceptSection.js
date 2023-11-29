/* eslint-disable jsx-a11y/alt-text */
import Phones from "../imgs/phones.png";
export function ConceptSection() {
  return (
    <div className="flex flex-col w-full px-[120px] py-20">
      <div className="flex flex-row w-full justify-between item-center gap-20">
        <iframe
          width="600"
          height="400"
          src="https://www.youtube.com/embed/lRh_K2XxQLI?si=lp5a4dx4gUWab1MP"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
        <div className="max-w-lg flex flex-col gap-4 justify-center">
          <h1 className="font-chivo text-4xl">Why Grapevine?</h1>
          <p className="font-roboto text-xl">
            Grapevine was born from the realization that unlike food or
            entertainment, services are very personal. We tend to defer to the
            people we know- family, friends, friends of friends, etc.- when it
            comes to these things. While people can stomach a bad meal, a bad
            mechanic is something to avoid at all costs.
            <br />
            <br />
            Grapevine streamlines the process of finding and asking for
            recommendations from your network so you'll never have to text
            everyone in your contacts or feel bad about pestering someone for
            that one nanny they loved again.
          </p>
        </div>
      </div>
    </div>
  );
}
