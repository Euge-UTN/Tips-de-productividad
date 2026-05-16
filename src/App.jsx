import { useState } from "react"; //hook de React
import "./App.css";

function App() {

  const tips = [ //Array de tips
    "Tomar descansos cortos",
    "Trabajar en bloques de tiempo",
    "Dormir bien para rendir mejor",
    "Mantener el espacio de trabajo ordenado",
    "Silenciar notificaciones innecesarias",
    "Evita distracciones del celular",
    "Priorizar tareas importantes"
  ];

  const [selected, setSelected] = useState(0); //useState, estado del tip actual

  const [votos, setVotos] = useState([ //useState, estado de los votos
    0, 0, 0, 0, 0, 0, 0
  ]);

  const [vistos, setVistos] = useState([0]); // useState, tips ya vistos

  //Función para votar
  const votar = () => {
    const nuevos = [...votos];
    nuevos[selected]++;
    setVotos(nuevos); //Actualización del estado
  };

  const otroTip = () => { // Función para cambiar tip sin repetir

    let nuevosVistos = vistos;

    // Si ya mostró todos, reinicia
    if (vistos.length === tips.length) {
      nuevosVistos = [selected];
    }

    let random;

    do {
      random = Math.floor(Math.random() * tips.length);
    } while (nuevosVistos.includes(random));

    setSelected(random); // Actualización de estados
    setVistos([...nuevosVistos, random]);
  };

  // Función para reiniciar votos
  const reiniciar = () => {
    setVotos([0, 0, 0, 0, 0, 0, 0]);
    setVistos([selected]);
  };

  // Buscar el más votado
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

            {/* Eventos onClick */}
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