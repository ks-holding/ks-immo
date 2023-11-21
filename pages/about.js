import Layout from "../components/general/layout/layout.js";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image.js";
import { HiOutlineChevronRight } from "react-icons/hi";
import { colorSecondary } from "./../lib/variables";

export default function About() {
  return (
    <Layout
      title="A propos"
      description="Historique et présentation de KS Renov, de la présentation, de notre équipe ainsi que du groupe KS-Holding"
    >
      <section id="about">
        <div className="grid-layout container">
          <div className="grid-1-5 tile">
            <h1 className="">A propos du groupe</h1>

            <div className="row center mt-3">
              <Image width="340" height="150" layout="fixed" src="/assets/about/logo ks-holding.svg" alt="KS-Holding" />
            </div>
            <p>
              Le groupe KS HOLDING propose par le biais des filiales des solutions en matière de rénovation énergétique,
              isolation et échafaudage. Nous nous adressons aux particuliers et aux professionnels.{" "}
            </p>
          </div>

          <div className="grid-6-12" id="others">
            <h2 className="text-center">Les autres filiales</h2>

            <div className="column">
              <Link href="https://www.ks-renov.com/">
                <a href="https://www.ks-renov.com/" target="_blank" rel="noreferrer" className="item tile pad">
                  <div className="column">
                    <figure>
                      <Image src="/assets/about/logo KS RENOV.svg" width="250" height="85" layout="fixed" alt="Description de l'image" />
                    </figure>

                    <p>Expert en Isolation & Rénovation</p>
                  </div>
                  <HiOutlineChevronRight size={"124px"} color={colorSecondary} />
                </a>
              </Link>

              <Link href="https://ecolivery.fr/">
                <a href="https://ecolivery.fr/" target="_blank" rel="noreferrer" className="item tile pad">
                  <div className="column">
                    <figure>
                      <Image src="/assets/about/logo écolivery.svg" width="250" height="85" layout="fixed" alt="Description de l'image" />
                    </figure>

                    <p>Site de E-commerce spécialisé dans lisolation thermique</p>
                  </div>
                  <HiOutlineChevronRight size={"124px"} color={colorSecondary} />
                </a>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
