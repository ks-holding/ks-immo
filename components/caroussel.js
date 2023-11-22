import React from "react";
import { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import Image from "next/image";
// import Images from "./avis";
import Link from "next/link";
import AfficherPhotos from "./afficherphotos";
import AfficherPhotos1 from "./afficherphotos1";
// import { useInView } from "react-intersection-observer";
import { PaperPlaneOutline, MailOpenOutline } from "react-ionicons";
export default function SimpleSlider1() {
    const [slidesToShow, setSlidesToShow] = useState(3);
    const [afficherPhotosType, setAfficherPhotosType] = useState("particuliers");
    const toggleAfficherPhotos = (type) => {
      setAfficherPhotosType(type);
    };
  useEffect(() => {
    // Mettez à jour la valeur de slidesToShow en fonction de la largeur de l'écran
    const handleResize = () => {
      const newSlidesToShow = window.innerWidth <= 768 ? 1 : 3; // Par exemple, 2 en version responsive
      setSlidesToShow(newSlidesToShow);
    };

    handleResize(); // Appel initial pour définir la valeur
    window.addEventListener("resize", handleResize);

    // Nettoyage de l'écouteur lors du démontage du composant
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3700,
    nextArrow: (
        <div>
          <div className="next-slick-arrow"> ⫸ </div>
        </div>
      ),
      prevArrow: (
        <div>
          <div className="prev-slick-arrow"> ⫷ </div>
        </div>
      ),
      
  };
  const [afficherContenu, setAfficherContenu] = useState(false);

  const toggleAfficher = () => {
    setAfficherContenu(!afficherContenu);
  };
  const [afficherContenu1, setAfficherContenu1] = useState(false);

  const toggleAfficher1 = () => {
    setAfficherContenu1(!afficherContenu1);
  };
  return (
    <>
      <div className="content5">
        
        
        <div className="container5">
          <Slider {...settings}>
                <div >
                
                
                <div className="avis">
                
                    <section id="landing" >
                    
                    <div className="ecricaroussel1">
                        

                        <div className="ecricaro1">
                        <h1 className="slogan">KS immobilier </h1>
                        <h2 style={{marginBottom:"100px"}}>La meilleure façon de trouver votre bien immobilier Neuf, c est chez ks-immobilier!!!</h2>
                        {/* <ul className="dotlist">
                            <div style={{display:"flex"}}>
                            <img  style={{marginBottom:"24px",width:"220px"}} src="/assets/imgescaroussel/logo KS RENOV.svg" alt="ksrenov" />
                            <div>
                              <ul className="filiales" style={{padding:"5px 50px"}}>
                                <li style={{lineHeight:"35px" }}><span style={{ fontSize: "12px", marginRight: "5px" }}>⚫</span>Solutions particuliers</li>
                                <li style={{lineHeight:"35px" }}><span style={{ fontSize: "12px", marginRight: "5px" }}>⚫</span>Solutions professionnels</li>
                              </ul>
                            </div>
                            </div>
                            <img  style={{width:"220px"}}   src="/assets/imgescaroussel/logo écolivery.svg" alt="ksrenov" />
                        </ul>

                        <p>KS HOLDING propose par le biais des filiales des solutions en matière de rénovation énergétique, isolation et échafaudage. Nous nous adressons aux particuliers et aux professionnels.</p> */}
                        <Link href="/contact">
                            <button className="button-empty row">
                            <MailOpenOutline width="22px" height="22px" color="#21273b" />
                            Contactez-nous
                            </button>
                        </Link>
                        </div>
                        <div className="ecricaropremiere">
                       
                          <img className="logoslide4" src="assets/imgescaroussel/domotik.svg" alt="Description de l'image" />
                        
                        {/* <div style={{display:"flex"}}>
                        <img className="logo-filliale" style={{width:"250px"}} src="/assets/home/ecolivery.svg" alt="logo ecolivery" />
                        <img className="logo-filliale"  style={{width:"320px"}} src="/assets/home/ksrenov.svg" alt="logo ksrenov" />
                        </div>
                        <div style={{display:"flex"}}>
                        <img className="logo-filliale"  style={{width:"150px"}} src="/assets/home/t2in.svg" alt="logo t2in" />
                        <img className="logo-filliale"  style={{width:"125px"}} src="/assets/home/lmdr.svg" alt="logo lmdr" />
                        <img className="logo-filliale"  style={{width:"250px"}} src="/assets/home/kscalosud.svg" alt="logo kscalosud" />
                        </div> */}
                        
                        </div>
                    </div>
                    </section>
               
                
                  
                  
                </div>
                
                </div>
                
              
              
               {/* <div >
                      
                      
               <div className="avis1">
                      
               <img className="logoslide1" src="/assets/home/t2in.svg" alt="logo t2in" />
                      
                      
                        
                        
              </div>
                      
              </div> 
              <div >
                      
                      
            <div className="avis1">
                             
             <img className="logoslide2" src="/assets/home/lmdr.svg" alt="logo lmdr" />
                             
                             
                               
                               
             </div>
                             
            </div> */}
            
                      
    
                      
          </Slider>
        </div>
      </div>
    </>
  );
 }