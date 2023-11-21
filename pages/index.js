import Head from "next/head";
import Layout from "../components/general/layout/layout.js";
import Image from "next/image";
import Link from "next/link";
import { Call } from "react-ionicons";
import SimpleSlider1 from "../components/caroussel.js";


export default function Home() {
  return (
    // <Head>
    //     <title>KS-Holding</title>
    //     <meta name="description" content="Solutions BTP pour professionnels et particuliers" />
    //     <link rel="preconnect" href="https://fonts.googleapis.com" />
    //     <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
    //     <link
    //       href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap"
    //       rel="stylesheet"
    //     />
    //     <link rel="icon" href="/assets/favicon.ico" />
    //   </Head>
    //   <main>
    //     <img src="/assets/logo.svg" alt="logo KS-HOLDING" className="logo" />
    //     <h1 className="slogan">Solutions BTP pour professionnels et particuliers</h1>
    //     <div className="nuemrotel">
    //     <div className="phone_number">
          
    //       <Call size={20} color="black" />
    //       <a  href={`tel:01 82 41 12 39`}>01 82 41 12 39</a>
          
    //     </div>
    //     <div className="phone_number">
          
    //       <Call size={20} color="black" />
    //       <a  href={`tel:01 82 41 07 86`}>01 82 41 07 86</a>
          
    //     </div>
        
    //     </div>
        

    //     <p>Découvrir nos filiales</p>
    //     <div className="wrapper">
    //       {/* <Link href="https://www.lmdr.fr/">
    //         <a href="https://www.lmdr.fr/" target="_blank" rel="noreferrer">
    //           <figure className="item">
    //             <Image layout="fixed" width="70px" height="70px" src="/assets/filiales/lmdr.svg" alt="logo LMDR" />
    //           </figure>
    //         </a>
    //       </Link> */}
    //       <div className="filales">
    //       <Link href="https://ks-calosud.com/">
    //         <a href="https://ks-calosud.com/" target="_blank" rel="noreferrer">
    //           <figure className="item">
    //             <Image
    //               layout="fixed"
    //               width="230px"
    //               height="80px"
    //               src="/assets/filiales/logo ks-calosud.svg"
    //               alt="logo KS-CALOSUD"
    //             />
    //           </figure>
    //         </a>
    //       </Link>
    //       <h2>Spécialisée dans l'isolation des copropriétés, résidentiels et industries</h2>
    //         <ul className="dotlist">
    //             <li>Calorifugeage</li>
    //             <li>Echafaudages</li>
    //         </ul>            
    //       </div>
    //       <div className="filales">
    //       <Link href="https://www.ks-renov.com/">
    //         <a href="https://www.ks-renov.com/" target="_blank" rel="noreferrer">
    //           <figure className="item">
    //             <Image
    //               layout="fixed"
    //               width="230px"
    //               height="80px"
    //               src="/assets/filiales/logo KS RENOV.svg"
    //               alt="logo KS-RENOV"
    //             />
    //           </figure>
    //         </a>
    //       </Link>
    //       <h2>Rénovation de maisons et bureaux sur mesure</h2>
    //                     <ul className="dotlist">
    //                       <li>Conception</li>
    //                       <li>Rénovation</li>
    //                       <li>Extension</li>
    //                     </ul>
    //       </div>
    //       {/* <Link href="https://www.t2i-industry.com/">
    //         <a href="https://www.t2i-industry.com/" target="_blank" rel="noreferrer">
    //           <figure className="item">
    //             <Image layout="fixed" width="90px" height="80px" src="/assets/filiales/t2in.svg" alt="logo T2IN" />
    //           </figure>
    //         </a>
    //       </Link> */}
    //       <div className="filales">
    //       <Link href="https://www.ecolivery.fr/">
    //         <a href="https://www.ecolivery.fr/" target="_blank" rel="noreferrer">
    //           <figure className="item">
    //             <Image
    //               layout="fixed"
    //               width="230px"
    //               height="80px"
    //               src="/assets/filiales/logo écolivery.svg"
    //               alt="logo Ecolivery"
    //             />
    //           </figure>
    //         </a>
    //       </Link>
    //         <h2>Site de E-commerce spécialsé dans l'isolation thermique</h2>
    //         <h4>Prouits à destination des professionneles et particuliers</h4>
    //       </div>
    //     </div>
    //   </main>
    // </div>
    <Layout
      title="Solutions BTP pour professionnels et particuliers"
      description="Des solutions en matière de rénovation énergétique, isolation et échafaudage."
    >
      <Head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
       
            window.axeptioSettings = {
              clientId: "61c0a29a5bdb3f6e2bb96ebb",
              cookiesVersion: "https://ks-renov/-base",
            };
            
            (function(d, s) {
              var t = d.getElementsByTagName(s)[0], e = d.createElement(s);
              e.async = true; e.src = "//static.axept.io/sdk.js";
              t.parentNode.insertBefore(e, t);
            })(document, "script");
    
                  `,
          }}
        />
      </Head>
      <div id="home">
        {" "}
        <SimpleSlider1 />
        {/* <Presentation /> */}
        
        
        
        
      </div>
      
    </Layout>
  );
}
