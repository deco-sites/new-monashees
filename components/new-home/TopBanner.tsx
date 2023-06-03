import { Picture, Source } from "deco-sites/std/components/Picture.tsx";
import type {
  HTML,
  Image as LiveImage,
} from "deco-sites/std/components/types.ts";

export interface TopBannerProps {
  /** @description RegExp to enable this banner on the current URL. Use /feminino/* to display this banner on feminino category  */
  matcher: string;
  /** @description text to be rendered on top of the image */
  title?: HTML;
  /** @description text to be rendered on top of the image */
  subtitle?: string;
  image: {
    /** @description Image for big screens */
    desktop: LiveImage;
    /** @description Image for small screens */
    mobile: LiveImage;
    /** @description image alt text */
    alt?: string;
  };
}

function TopBanner(props: TopBannerProps) {
  const { title, subtitle, image } = props;
  return (
    <div class="grid grid-cols-1 grid-rows-1 h-screen">
      <Picture preload class="col-start-1 col-span-1 row-start-1 row-span-1">
        <Source
          src={image.mobile}
          width={360}
          height={667}
          media="(max-width: 767px)"
        />
        <Source
          src={image.desktop}
          width={1440}
          height={200}
          media="(min-width: 767px)"
        />
        <img
          class="w-full h-full md:object-cover"
          src={image.desktop}
          alt={image.alt ?? title}
        />
      </Picture>
      <div class="container flex flex-col pt-28 max-h-[80%] max-w-[80%] items-start col-start-1 col-span-1 row-start-1 row-span-1 w-full lg:flex lg:items-center lg:justify-center">
        <h1
          class="text-white text-4xl lg:max-w-[660px] lg:w-full lg:text-5xl"
          dangerouslySetInnerHTML={{ __html: props?.title ?? "" }}
        />
        <div class="flex justify-end">
          <h2 class="max-w-[70%] mt-5 lg:max-w-[500px]">
            <span class="text-white text-sm lg:text-lg">{subtitle}</span>
          </h2>
        </div>
      </div>
    </div>
  );
}

export default TopBanner;
