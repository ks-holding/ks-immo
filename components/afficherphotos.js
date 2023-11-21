import React from "react";
export default function AfficherPhotos(){
    return <div style={{display: "flex", flexWrap: "wrap"}}>
    <img style={{objectFit:"cover"}} className="logoslide4 siximages" src="assets/imgescaroussel/kspart3.webp" alt="logo kscalosud" />
    <img className="logoslide4 siximages1" src="assets/imgescaroussel/kspartic1.webp" alt="logo kscalosud" />
    <img className="logoslide4 siximages" src="assets/imgescaroussel/kspart4.webp" alt="logo kscalosud" />
    
    <img className="logoslide4 siximages1" src="assets/imgescaroussel/kspart2.webp" alt="logo kscalosud" />
    <img style={{objectFit:"cover", objectPosition:"center top"}} className="logoslide4 siximages" src="assets/imgescaroussel/kspart5.png" alt="logo kscalosud" />
    <img style={{objectFit:"cover"}} className="logoslide4 siximages1 " src="assets/imgescaroussel/kspartic2.webp" alt="logo kscalosud" />
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
}