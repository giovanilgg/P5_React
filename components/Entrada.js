import React from "react";
import { formatearFecha } from "../helpers";
import Link from "next/link";
import Image from "next/image";
import styled from "../styles/Entrada.module.css";

import EntradaBlog from "../pages/blog/[id]";
const Entrada = ({ entradas }) => {
  const { titulo, contenido, resumen, imagen, published_at, id } = entradas;
  return (
    <article>
      <Image
        priority="true"
        width={800}
        height={600}
        src={imagen.url}
        alt={`imagen blog ${titulo}`}
      ></Image>
      <div className={styled.contenido}>
        <h3>{titulo}</h3>
        <p className={styled.fecha}>{formatearFecha(published_at)}</p>
        <p>{contenido.slice(0, 200)}</p>
        <Link href={`/blog/${id}`}>
          <a className={styled.enlace}>Leer entrada</a>
        </Link>
      </div>
    </article>
  );
};

export default Entrada;
