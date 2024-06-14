import React from "react";
import Card from "./Card";
import './Sobre.scss';

export default function Sobre() {
  return (
    <div>

    <div className="spider">
      <p>// Hover over the blue background or the logo to see the animation //</p>
      <div class="spidy-wrapper">
        <div class="spidy__frame">
            <div class="center">
            <div class="center__element">
              <img class="element__spidy" src="https://vignette.wikia.nocookie.net/marveldatabase/images/9/92/Peter_Parker_%28Earth-30847%29_from_Marvel_vs._Capcom_Infinite_0001.png/revision/latest?cb=20170922195944%22" alt="Spiderman, credit:wikia"/>
              <div class="element__tooltip">Welcome to the best team</div>
            </div>
          </div>
          <img src="https://terrigen-cdn-dev.marvel.com/content/prod/1x/spider-manfarfromhome_lob_log_07_whitetitletext_large2x_sidepadding_studioslogo_1800px.png" alt="Spiderman Far from Home Logo, Credit: Marvel"/>
      </div>
      </div>
    </div>
    <Card/>
    </div>
  )
}
