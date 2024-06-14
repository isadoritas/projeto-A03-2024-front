import React from "react";
import './Card.css';

export default function Card() {
  
  return (
    <div style={{marginTop: "-130px"}}>
      <section>
        <div>
          <h1 style={{textAlign: "center", color: "yellow", backgroundColor: "red", fontFamily: "Bangers, cursive"}}>MEET OUR TEAM</h1>
          <h2 style={{textAlign: "center", color: "white", backgroundColor: "#1b1fbd", fontSize: "30px", fontFamily: "Bangers, cursive"}}>Estrutura de Dados e Algoritimos - UNA</h2>
          <div className="team-intro">
            <div id="superman" className="box rounded">
              <div className="card__overlay">
              </div>
              <div className="card__image">
                <img src={process.env.PUBLIC_URL + '/isa_3.jpeg'} alt="isa"/>
              </div>
              <div className="card__heading">
              </div>
              <p className="p_spider" style={{fontFamily: "Bangers, cursive", fontSize: "40px"}}> Adora </p> 
            </div>
            <div id="batman" className="box rounded">
              <div className="card__overlay">
              </div>
              <div className="card__image">
                <img src={process.env.PUBLIC_URL + '/henri_marvel.jpeg'} alt="isa"/>
              </div>
              <div className="card__heading">
              </div>
              <p className="p_spider" style={{fontFamily: "Bangers, cursive", fontSize: "40px"}}> Henriquix20 </p> 
            </div>
            <div id="wonderwoman" className="box rounded">
              <div className="card__overlay">
              </div>
              <div className="card__image">
                <img src={process.env.PUBLIC_URL + '/wes_marvel.jpeg'} alt="isa"/>
              </div>
              <div className="card__heading">
              </div>
              <p className="p_spider" style={{fontFamily: "Bangers, cursive", fontSize: "40px"}}> São Gonçalo </p> 
            </div>
            <div id="aquaman" className="box rounded">
              <div className="card__overlay">
              </div>
              <div className="card__image">
                <img src={process.env.PUBLIC_URL + '/gab_marvel.jpeg'} alt="isa"/>
              </div>
              <div className="card__heading">
              </div>
              <p className="p_spider" style={{fontFamily: "Bangers, cursive", fontSize: "40px"}}> Gabs </p> 
            </div>
          </div>
        </div>
      </section>
      <div style={{textAlign: "center", color: "white", backgroundColor: "#1b1fbd", fontSize: "20px", fontFamily: "Permanent Marker, cursive", padding: "10px"}}>
        Activity carried out in 2024 in the subject of Data Structure and Algorithms<br></br> taught by Professor Daniel Paiva and Henrique Poyatos<br></br>UNA Contagem
      </div>
    </div>
  )
}
