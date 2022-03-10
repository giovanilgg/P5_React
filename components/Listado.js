import React from "react";

import Image from "next/image";
import Link from "next/link";
import styled from "../styles/Tienda.module.css";

const Listado = ({ guitarra }) => {
  const { nombre, id, descripcion, precio, imagen,url } = guitarra;
  return (
    <div className={styled.contenedorCard}>
      
        <Image
          layout='responsive'
          alt={`Imagen de ${nombre}`}
          width={180}
          height={200}
          src={imagen.url}
        ></Image>
      

      <div className={styled.contenidoCard}>
        <h2>{nombre}</h2>
        <p>{descripcion.slice(0, 100)}</p>
        <h3> ${precio}</h3>
        <Link href={`/guitarras/${url}`}> Ver Producto</Link>
      </div>
    </div>
  );
};

export default Listado;
