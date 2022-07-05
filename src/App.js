import React from "react";
import "./style/app.scss"
import Header from "./components/Header";
import Reservia from "./assets/reservia.jpg";
import Ohmyfood from "./assets/ohmyfood.jpg";
import Lachouetteagence from "./assets/lachouetteagence.jpg";
// import Piiquante from "./assets/piiquante.jpg";
import Groupomania from "./assets/groupomania.jpg";
import NatureCollection from "./assets/naturecollection.jpg";

function App() {
  return (
    <div className="app">
      <Header />

      {/* Présentation  */}

      <div className="pres">
        <h2>Présentations</h2>
        <p className="pres_text">
          Je viens d'obtenir mon diplôme de Développeur Web (Bac +2) et je
          cherche une alternance pour consolider mes compétences et en acquérir
          de nouvelles.
        </p>
      </div>

      {/* Projets  */}

      <div className="container">
        <h2>Projets</h2>
        <p>
          Voici les projets que j'ai réalisé au cours de ma formation jusqu'à
          aujourd'hui. Pour ces projets j'ai utilisé différents langages et
          framework tel que HTML, CSS, JavaScript mais aussi React, VueJs,
          Kotlin et Java. J'ai également utilisé différents IDE tel que Visual
          Studio Code, Eclipse et Android Studio.
        </p>

        <div className="card">
          <img src={Reservia} alt="projet reservia" />
          <div className="card_text">
            <h3>Reservia</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi
              perferendis nesciunt cumque a, dolorum eius saepe nihil adipisci
              consectetur molestiae impedit. Cum aspernatur, maxime minus fugiat
              quos soluta distinctio quae!
            </p>
          </div>
        </div>

        <div className="card">
          <img src={Ohmyfood} alt="projet reservia" />
          <div className="card_text">
            <h3>Reservia</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi
              perferendis nesciunt cumque a, dolorum eius saepe nihil adipisci
              consectetur molestiae impedit. Cum aspernatur, maxime minus fugiat
              quos soluta distinctio quae!
            </p>
          </div>
        </div>

        <div className="card">
          <img src={Lachouetteagence} alt="projet reservia" />
          <div className="card_text">
            <h3>Reservia</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi
              perferendis nesciunt cumque a, dolorum eius saepe nihil adipisci
              consectetur molestiae impedit. Cum aspernatur, maxime minus fugiat
              quos soluta distinctio quae!
            </p>
          </div>
        </div>

        <div className="card">
          <img src={Groupomania} alt="projet reservia" />
          <div className="card_text">
            <h3>Reservia</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi
              perferendis nesciunt cumque a, dolorum eius saepe nihil adipisci
              consectetur molestiae impedit. Cum aspernatur, maxime minus fugiat
              quos soluta distinctio quae!
            </p>
          </div>
        </div>

        {/* Projets perso */}

        <div className="card_mobile">
          <img src={NatureCollection} alt="projet nature collection" />
          <div className="card_mobile_text">
            <h3>Nature Collection</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi
              perferendis nesciunt cumque a, dolorum eius saepe nihil adipisci
              consectetur molestiae impedit. Cum aspernatur, maxime minus fugiat
              quos soluta distinctio quae!
            </p>
          </div>
        </div>
      </div>

      {/* Contact  */}

      <div className="contact">
        <h2>Contact</h2>
        <p>
          Si vous souhaitez me contactez je mets à disposition une page contact
          ou vous pourrez me laissé un message pour de plus amples informations.
        </p>
      </div>
    </div>
  );
}

export default App;
