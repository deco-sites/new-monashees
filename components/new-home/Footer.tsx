import type { Image as LiveImage } from "deco-sites/std/components/types.ts";
import Image from "deco-sites/std/components/Image.tsx";

export interface FooterProps {
  /** @description Title Footer*/
  title: string;
  /** @description subTitle Footer */
  subtitle: string;
  /** @description description Footer */
  description: string;
  /** @description logo Footer */
  logoFooter: LiveImage;
  /** @description logo Footer */
  alt?: string;
}

function Footer(props: FooterProps) {
  return (
    <section>
      <div class="h-screen flex justify-center flex-col px-8 lg:max-w-[1170px] lg:m-auto">
        <div>
          <p class="pb-8 text-xl lg:text-5xl lg:max-w-[66%]">{props.title}</p>
        </div>
        <div class="lg:pt-12 lg:pl-12 lg:flex lg:flex-col">
          <span class="text-sm lg:text-lg">{props.subtitle}</span>
          <strong class="text-sm mt-5 lg:text-[27px] lg:mt-8">{props.description}</strong>
        </div>
      </div>
      <div class="m-5 flex justify-end">
        <Image
          class="m-5"
          src={props.logoFooter}
          alt={props.alt}
          width={180}
          height={40}
        />
      </div>
    </section>
  );
}

export default Footer;
