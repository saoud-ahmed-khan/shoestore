import React from 'react';
import {createContext} from 'react'
const shoesData = {
    "NikeCourt Air Zoom": {
      name: "NikeCourt Air Zoom",
      img:"https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/f30c4703-04e8-40ca-92d8-a509ddd1c851/nikecourt-air-zoom-gp-turbo-hard-court-tennis-shoe-7QZ1f4.jpg",
        details:"Tennis matches are fast, fierce and long. The NikeCourt Air Zoom GP Turbo combines an incredibly responsive, full-length Zoom Air unit with zones of durability",
        price:"Pkr 5000/="
    },
    "Nike Air  SuperRep": {
        name: "Nike Air  SuperRep",
        img:
        "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,b_rgb:f5f5f5/b4743d93-faa0-4eb7-96df-9888ecbbacc2/air-zoom-superrep-hiit-class-shoe-gSWSxQ.jpg",
          details:"The Nike Air Zoom SuperRep is designed for circuit training, HIIT, short runs and other fast-paced exercise. Zoom Air cushioning in the forefoot combines.",
          price:"Pkr 8000/="
      },
      "Nike Air Max 90": {
        name: "Nike Air Max 90",
        img:
          "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/i1-88f5170d-831e-4220-a6a1-79a61ae25969/air-max-90-shoe-2Kz7z4.jpg",
          details:"Redesigned for casual wear, the Nike Air Max 90 stays true to its '90s running roots. Bold colours add a fresh look while Max Air cushioning adds .",
          price:"Pkr 6000/="
      },
      "Nike Zoom Fly 3 ": {
        name: "Nike Zoom Fly 3",
        img:
          "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/c8fc9ed5-8b84-437f-a2b8-daab62e9126a/zoom-fly-3-running-shoe-ZzPPcv.jpg",
          details:"Inspired by the Vaporfly, the Nike Zoom Fly 3 gives distance runners race-day comfort and durability. The power of a carbon-fibre keeps you in .",
          price:"Pkr 15000/="
      },
      "Nike Air Max 95": {
        name: "Nike Air Max 95",
        img:
          "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/tqrvpqtugw3ehxe18cde/air-max-95-essential-shoe-7hwG30.jpg",
          details:"The Nike Air Max 95 Essential moves with strength and fluidity inspired by the human body. The midsole represents the spine, graduated panels are the muscles",
          price:"Pkr 5000/="
      },
      "Nike SuperRep Cycle": {
        name: "Nike SuperRep Cycle",
        img:
          "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/a164a629-1353-4f02-85e5-62fed505f738/superrep-cycle-indoor-cycling-shoe-n1C9sL.jpg",
          details:"The Nike SuperRep Cycle brings a breathable design to the high-heat, fast pace of indoor cycling. Adjustable straps secure your foot during.",
          price:"Pkr 5000/="
      },
      "Air Jordan 4": {
        name: "Air Jordan 4",
        img:
          "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/0c80ad19-937f-4d04-9390-fc688492f77b/free-metcon-3-amp-training-shoe-ZlJsrc.jpg",
          details:"With design elements inspired by the Air Jordan 4, the Jordan Max 200 brings a new level of Air to Jordan, for details anchored in legacy .",
          price:"Pkr 7000/="
      },
      "Nike Free Metcon 3": {
        name: "Nike Free Metcon 3",
        img:
          "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/0c80ad19-937f-4d04-9390-fc688492f77b/free-metcon-3-amp-training-shoe-ZlJsrc.jpg",
          details:"The Nike Free Metcon 3 combines Nike Free flexibility around the forefoot with Metcon stability in the heel to help you get the most.",
          price:"Pkr 9000/="
      },
      "Nike Air Max Plus": {
        name: "Nike Air Max Plus",
        img:
          "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/i1-1980b171-0f44-4074-bae6-71cbef2a2767/air-max-plus-shoe-B5dRP7.jpg",
          details:"Give your attitude an edge in the Nike Air Max Plus, a Tuned Air experience that's been delivering comfort and street cred since '98. ",
          price:"Pkr 3000/="
      },
      "Nike Air Max 95 ERA": {
        name: "Nike Air Max 95 ERA",
        img:
          "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/70ed5234-928b-40cd-9400-6db6faad7671/air-max-95-era-shoe-F0rb8K.jpg",
          details:"Taking inspiration from the human body and running DNA, the Nike Air Max 95 ERA mixes unbelievable comfort with head-turning style.",
          price:"Pkr 5000/="
      },
      "Nike Adapt BB 2.0": {
        name: "Nike Adapt BB 2.0",
        img:
          "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/dfe964c2-f861-4035-a2a4-859e3615c299/adapt-bb-2-tie-dye-basketball-shoe-HxmCDR.jpg",
          details:"The Nike Adapt BB 2.0  inspires the culture of the game through the power of colour and innovation. Using tie-dye colouring paired .",
          price:"Pkr 15000/="
      },
      "Nike SuperRep Go": {
        name: "Nike SuperRep Go",
        img:
          "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/7a90e53c-3349-427e-9b72-73f47e221b9b/superrep-go-training-shoe-50pC6z.jpg",
          details:"The Nike SuperRep Go combines comfortable foam cushioning, flexibility and support to get you moving in circuit-based fitness classes ",
          price:"Pkr 13000/="
      },
      "Nike Air Zoom Infinity Tour": {
        name: "Nike Air Zoom Infinity Tour",
        img:
          "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/bd851f24-2caf-45bd-a0e6-7214a3fe4cee/air-zoom-infinity-tour-golf-shoe-bQtR2H.jpg",
          details:"Revolutionise your game. Inspired by a running shoe, the Nike Air Zoom Infinity Tour delivers unrivalled comfort and response. Thanks to a new.",
          price:"Pkr 5000/="
      }};
      
export const ShoesContext= createContext();

export const ShoeProvider = ({children}) => {
    
    return (
            <ShoesContext.Provider value={{shoesData}}>
                {children}
            </ShoesContext.Provider>
        
    )
}