import { useState } from "react";

const Hero = () => {
  // Estado para mostrar u ocultar texto adicional
  const [mostrarMas, setMostrarMas] = useState(false);

  return (
    <section className="hero">
      <h2>Bienvenido a mi página en React</h2>
      <p>Ejemplo de una Single Page Application usando componentes.</p>

      {/* Botón que cambia el estado */}
      <button onClick={() => setMostrarMas(!mostrarMas)}>
        {mostrarMas ? "Mostrar menos" : "Mostrar más"}
      </button>

      {/* Texto condicional */}
      {mostrarMas && (
        <p>
          React permite construir interfaces modernas usando componentes,
          estados y efectos de manera eficiente.
        </p>
      )}
    </section>
  );
};

export default Hero;
