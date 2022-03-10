import React from "react";
import Layout from "../components/Layout";
import Link from "next/link";
import Image from "next/image";
import styled from "../styles/Blog.module.css";

const NoEncontrado = () => {
  return (
    <div>
      <h1 className="heading">Pagina no encontrada</h1>
      <div className={styled.noEncontrado}>
     
          <Link  className={styled.inicio}  href="/"> Volver a inicio</Link>
       

        <Image
          src="/img/no.jpg"
          width={700}
          height={500}
          alt="ímagen error 404"
        />
      </div>
    </div>
  );
};

export default NoEncontrado;
