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
  const [votos, setVotos] = useState([0, 0, 0, 0, 0, 0, 0]);

  // votar
  const votar = () => {
    const nuevos = [...votos];
    nuevos[selected]++;
    setVotos(nuevos);
  };

  // cambiar tip
  const otroTip = () => {
    const random = Math.floor(Math.random() * tips.length);
    setSelected(random);
  };

  // buscar el más votado (forma simple con if)
  let indexMax = 0;

  if (votos[1] > votos[indexMax]) {
    indexMax = 1;
  }

  if (votos[2] > votos[indexMax]) {
    indexMax = 2;
  }

  return (
    <div>
      <h1>Tip</h1>
      <p>{tips[selected]}</p>
      <p>Votos: {votos[selected]}</p>

      <button onClick={votar}>Votar</button>
      <button onClick={otroTip}>Otro tip</button>

      <h2>El más votado</h2>
      <p>{tips[indexMax]}</p>
      <p>Votos: {votos[indexMax]}</p>
    </div>
  );
}

export default App;
