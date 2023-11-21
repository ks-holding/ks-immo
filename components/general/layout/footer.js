import Link from "next/link";
import Image from "next/image";
// import { PhonePortraitOutline, CallOutline, LogoLinkedin, LogoFacebook, LogoInstagram } from "react-ionicons";
// import { AiFillInstagram } from "react-icons/ai";
// import { FaHouzz, FaTiktok } from "react-icons/fa";

// import { SITE_NAME, SITE_TEL1, FACEBOOK, LINKEDIN, INSTAGRAM, HOUZZ, TIKTOK } from "../../../lib/constants";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="infos">
          <div className="wrapper">
        <div className="vertical-line hauteur">
          <h3 className="titrefooter">Adresse</h3>
          <p><a className="tel1" href="https://goo.gl/maps/W4Yu1d5is8gtQt4t9" >6-8, Avenue Roland Moreno, Frépillon, Île-de-France 95740, FR</a></p>
        </div>
        <div className="vertical-line hauteur">
          <h3 className="titrefooter">Téléphone</h3>
          <p><a className="tel1" href={`tel:01 82 41 07 86`}>01 82 41 07 86</a></p>
          <p><a className="tel1" href={`tel:01 82 41 12 39`}>01 82 41 12 39</a></p>
        </div>
        <div className="vertical-line hauteur">
          <h3 className="titrefooter">Email</h3>
          <p><a  className="tel1" href="mailto:commercial@ks-renov.com">commercial@ks-ren.com</a></p>
          <p><a className="tel1" href="mailto:contact@ecolivery.fr">contact@ecolivery.fr</a></p>
        </div>
        <div className="hauteur">
          <h3 className="titrefooter">Les horaires</h3>
          <p>Du lundi au vendredi de 9h à 17h30</p>
        </div>
         </div>
      </div>
      <div className="copyright">Copyright 2023 - Tous droits réservés - KS-Holding</div>
    </footer>
  );
}
