import React from "react";
import styles from "../styles/Curso.module.css";

const Curso = ({ cursos }) => {
  const { titulo, contenido, imagen } = cursos;
  return (
    <section>
      <div className={`contenedor ${styles.grid}`}>
        <div className={styles.contenido}>
          <h2 className="heading">{titulo}</h2>
          <p className={styles.texto}>{contenido.slice(0,129)}</p>
          <a  className={styles.enlace} Nhref="/">Mas información</a>
        </div>
      </div>
      <style jsx>
        {`
          section{
              padding:4rem 0;
              margin-top:10rem;
              margin-bottom:5rem;
              background-size:cover;
              background-position:25%;
              background-repeat: no-repeat;
              background-image: linear-gradient(to right,rgb(0 0 0/.65),rgb(0 0 0/.7)),url(${imagen.url});
          }
        `}
      </style>
    </section>
  );
};

export default Curso;
