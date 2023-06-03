import Modals from "$store/islands/HeaderModals.tsx";
import Navbar from "./Navbar.tsx";
import type { Image as LiveImage } from "deco-sites/std/components/types.ts";

export interface INavItem {
  label: string;
  href: string;
}

export interface ILogo {
  /** @description Logo */
  src: LiveImage;
  alt?: string;
}

export interface HeaderProps {
  navItems?: INavItem[];
  logo: ILogo;
}

function Header({ navItems = [], logo }: HeaderProps) {
  return (
    <>
      <header>
        <div class=" md:flex md:justify-center">
          <Navbar logo={logo} />
        </div>

        <Modals menu={{ items: navItems }} />
      </header>
    </>
  );
}

export default Header;
