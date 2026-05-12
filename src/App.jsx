/*import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <section id="center">
        <div className="hero">
          <img src={heroImg} className="base" width="170" height="179" alt="" />
          <img src={reactLogo} className="framework" alt="React logo" />
          <img src={viteLogo} className="vite" alt="Vite logo" />
        </div>
        <div>
          <h1>Get started</h1>
          <p>
            Edit <code>src/App.jsx</code> and save to test <code>HMR</code>
          </p>
        </div>
        <button
          type="button"
          className="counter"
          onClick={() => setCount((count) => count + 1)}
        >
          Count is {count}
        </button>
      </section>

      <div className="ticks"></div>

      <section id="next-steps">
        <div id="docs">
          <svg className="icon" role="presentation" aria-hidden="true">
            <use href="/icons.svg#documentation-icon"></use>
          </svg>
          <h2>Documentation</h2>
          <p>Your questions, answered</p>
          <ul>
            <li>
              <a href="https://vite.dev/" target="_blank">
                <img className="logo" src={viteLogo} alt="" />
                Explore Vite
              </a>
            </li>
            <li>
              <a href="https://react.dev/" target="_blank">
                <img className="button-icon" src={reactLogo} alt="" />
                Learn more
              </a>
            </li>
          </ul>
        </div>
        <div id="social">
          <svg className="icon" role="presentation" aria-hidden="true">
            <use href="/icons.svg#social-icon"></use>
          </svg>
          <h2>Connect with us</h2>
          <p>Join the Vite community</p>
          <ul>
            <li>
              <a href="https://github.com/vitejs/vite" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#github-icon"></use>
                </svg>
                GitHub
              </a>
            </li>
            <li>
              <a href="https://chat.vite.dev/" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#discord-icon"></use>
                </svg>
                Discord
              </a>
            </li>
            <li>
              <a href="https://x.com/vite_js" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#x-icon"></use>
                </svg>
                X.com
              </a>
            </li>
            <li>
              <a href="https://bsky.app/profile/vite.dev" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#bluesky-icon"></use>
                </svg>
                Bluesky
              </a>
            </li>
          </ul>
        </div>
      </section>

      <div className="ticks"></div>
      <section id="spacer"></section>
    </>
  )
}
export default App */

import { useState } from "react";
import "./App.css";

function App() {
  const tips = [
    "Tomar descansos cortos",
    "Trabajar en bloques de tiempo",
    "Dormir bien para rendir mejor",
    "Mantener el espacio de trabajo ordenado",
    "Silenciar notificaciones innecesarias",
    "Evita distracciones del celular",
    "Priorizar tareas importantes"
  ];

  const [selected, setSelected] = useState(0);

  const [votos, setVotos] = useState([
    0, 0, 0, 0, 0, 0, 0
  ]);

  // votar
  const votar = () => {
    const nuevos = [...votos];
    nuevos[selected]++;
    setVotos(nuevos);
  };

  
  // cambiar tip SIN repetir (con do...while)
  const otroTip = () => {
    // si ya vimos todos → reinicia
    if (vistos.length === tips.length) {
      setVistos([selected]);
      return;
    }

    let random;

    do {
      random = Math.floor(Math.random() * tips.length);
    } while (vistos.includes(random)); // evita repetir

    setSelected(random);
    setVistos([...vistos, random]);
  };

  // reiniciar votos
  const reiniciar = () => {
    setVotos([0, 0, 0, 0, 0, 0, 0]);
  };

  // buscar el más votado
  let indexMax = 0;

  if (votos[1] > votos[indexMax]) indexMax = 1;
  if (votos[2] > votos[indexMax]) indexMax = 2;
  if (votos[3] > votos[indexMax]) indexMax = 3;
  if (votos[4] > votos[indexMax]) indexMax = 4;
  if (votos[5] > votos[indexMax]) indexMax = 5;
  if (votos[6] > votos[indexMax]) indexMax = 6;

  return (
    <div>

      <div className="header">
        <h1>Tips de Productividad</h1>
      </div>

      <div className="container">

        {/* TIP ACTUAL */}
        <div className="card">

          <h2>Tip actual</h2>

          <div className="tip">
            "{tips[selected]}"
          </div>

          <div className="votos">
            Votos: {votos[selected]}
          </div>

          <div className="buttons">

            <button
              className="vote-btn"
              onClick={votar}
            >
              ♡ Votar
            </button>

            <button
              className="next-btn"
              onClick={otroTip}
            >
              Siguiente tip
            </button>

            <button
              className="reset-btn"
              onClick={reiniciar}
            >
              Reiniciar votos
            </button>

          </div>

        </div>

        {/* MÁS VOTADO */}
        <div className="card">

          <h2>Tip más votado</h2>

          {votos[indexMax] === 0 ? (
            <p>No hay votos todavía</p>
          ) : (
            <>
              <div className="tip">
                "{tips[indexMax]}"
              </div>

              <div className="top-votos">
                {votos[indexMax]} votos
              </div>
            </>
          )}

        </div>

      </div>

    </div>
  );
}

export default App;