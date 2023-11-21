import { useState } from "react";
// import { SITE_NAME, SITE_TEL1 } from "../../../lib/constants";
import { Call } from "react-ionicons";

import Link from "next/link";
import Image from "next/image";

const HeaderNav = props => {
  const selected = props.selected;

  return (
    <nav className="header1">
      <div className="container">
         {/* <Link href="/"> */}
           <a className="fadein">
            <Image width="240" height="85" layout="fixed" src="/assets/logo.svg" alt="KS-Holding" id="logo" />
          </a>
        {/* </Link>  */}
        <ul>
          {/* <li>
            <Link href="/filiales">
              <a
                className={
                  selected == "/filiales" ||
                  selected == "/prestation/charpente" ||
                  selected == "/prestation/couverture-toiture" ||
                  selected == "/prestation/installation-electrique" ||
                  selected == "/prestation/isolation-thermique" ||
                  selected == "/prestation/maconnerie" ||
                  selected == "/prestation/peinture" ||
                  selected == "/prestation/plomberie" ||
                  selected == "/prestation/revetement-sol" ||
                  selected == "/prestation/zinc"
                    ? "nav_selected"
                    : null
                }
              >
                Filiales
              </a>
            </Link>
          </li>  */}
          
          {/* <li>
            <Link href="/actualite">
              <a className={selected == "/actualite" ? "nav_selected " : null}>Actualité</a>
            </Link>
          </li> */}
          <li>
            <Link href="/about">
              {/* <a id="apropos" className={selected == "/about" ? "nav_selected " : null}>A propos</a> */}
            </Link>
          </li>
          {/* <li>
            <Link href="/contact">
              <a className={selected == "/contact" ? "nav_selected" : null}>Contact</a>
            </Link>
          </li> */}
        </ul>
        <div className="phone_number">
          
          <Call size={20} color="black" />
          <a  href={`tel:01 82 41 07 86`}>01 82 41 07 86</a>
          
        </div>
      </div>
    </nav>
  );
};

export default HeaderNav;
