import React from 'react';
import '../css/layout.css';
import '../css/sample-wallpaper.css';
import'../css/global.css';
import Img1 from '../img/venom-1.jpg';
import Img2 from '../img/hulk-1.jpg';
import Img3 from '../img/venom-2.jpg';

export default function Wallpaper() {
    return (
      <div>
        
            <div className="sample-wallpaper">
              {/* <Wallpaper #1> */}
              <article className="wallpaper">
                <img src={Img1} alt="Wallpaper #1" className="wallpaper" />
              </article>

              {/* < Wallpaper #2 > */}
              <article className="wallpaper">
                <img src={Img2} alt="Wallpaper #1" className="wallpaper" />
              </article>

              {/* < Wallpaper #3 > */}
              <article className="wallpaper">
                <img src={Img3} alt="Wallpaper #1" className="wallpaper" />
              </article>
            </div>
         
      </div>
    );
}
