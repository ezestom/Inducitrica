import "./Marquee.css";
import logo1 from "../../../../public/images/logos/delotte.png";
import logo2 from "../../../../public/images/logos/blazquez.png";
import logo3 from "../../../../public/images/logos/frutucuman.png";
import logo4 from "../../../../public/images/logos/jalil.png";
import logo5 from "../../../../public/images/logos/donato.png";

export function Marquee() {
  return (
    <div
      x-data
      x-init="
            $nextTick(() => {
                const content = $refs.content;
                const item = $refs.item;
                const clone = item.cloneNode(true);
                content.appendChild(clone);
            });
    "
      class="relative w-full bg-gradient-to-t from-[#e6f6ee] to-[#8bcfad]  container-block"
    >
      <div class="relative w-full py-3 mx-auto overflow-hidden text-lg italic tracking-wide text-white uppercase bg-gradient-to-t from-[#e6f6ee] to-[#8bcfad]  sm:text-xs md:text-sm lg:text-base xl:text-xl 2xl:text-2xl">
        <div x-ref="content" class="flex animate-marquee">
          <div
            x-ref="item"
            class="flex items-center justify-around flex-shrink-0 w-full py-2 space-x-8 text-gray-800 gap-x-48"
          >
            <img id="brand" src={logo1.src} alt="Delotte" class="h-12 drop-shadow-sm" />
            <img id="brand" src={logo2.src} alt="Blazquez" class="h-12 drop-shadow-sm" />
            <img id="brand"
              src={logo3.src}
              alt="Frutucuman"
              class="h-12 drop-shadow-sm
            "
            />
            <img id="brand" src={logo4.src} alt="Jalil" class="h-12 drop-shadow-sm" />
            <img id="brand" src={logo5.src} alt="Donato" class="h-12 drop-shadow-sm" />
            <img id="brand" src={logo1.src} alt="Delotte" class="h-12 drop-shadow-sm" />
            <img id="brand" src={logo2.src} alt="Blazquez" class="h-12 drop-shadow-sm" />
            <img id="brand"
              src={logo3.src}
              alt="Frutucuman"
              class="h-12 drop-shadow-sm
            "
            />
            <img id="brand" src={logo4.src} alt="Jalil" class="h-12 drop-shadow-sm" />
            <img id="brand" src={logo5.src} alt="Donato" class="h-12 drop-shadow-sm" />
            <img id="brand" src={logo1.src} alt="Delotte" class="h-12 drop-shadow-sm" />
            <img id="brand" src={logo2.src} alt="Blazquez" class="h-12 drop-shadow-sm" />
            <img id="brand"
              src={logo3.src}
              alt="Frutucuman"
              class="h-12 drop-shadow-sm
            "
            />
            <img id="brand" src={logo4.src} alt="Jalil" class="h-12 drop-shadow-sm" />
            <img id="brand" src={logo5.src} alt="Donato" class="h-12 drop-shadow-sm" />
            <img id="brand" src={logo1.src} alt="Delotte" class="h-12 drop-shadow-sm" />
            <img id="brand" src={logo2.src} alt="Blazquez" class="h-12 drop-shadow-sm" />
            <img id="brand"
              src={logo3.src}
              alt="Frutucuman"
              class="h-12 drop-shadow-sm
            "
            />
            <img id="brand" src={logo4.src} alt="Jalil" class="h-12 drop-shadow-sm" />
            <img id="brand" src={logo5.src} alt="Donato" class="h-12 drop-shadow-sm" />
          </div>
        </div>
      </div>
    </div>
  );
}
