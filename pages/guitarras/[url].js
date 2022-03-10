import React from "react";
import { useRouter } from "next/router";
import styled from "../../styles/Tienda.module.css";
import Image from "next/image";
import Layout from "../../components/Layout";
const entradaGuitarra = ({ entradaGuitarra }) => {
  const router = useRouter();
  const { descripcion, imagen, nombre, precio, url } = entradaGuitarra[0];
  const handlesubmit=(e)=>{

    e.preventDefault();
    console.log(e)
  }
  console.log(entradaGuitarra);
  return (
    <Layout pagina={`Guitarra ${nombre}`}>
      <div className={styled.content}>
        <div className={styled.content2}>
          <Image
            layout="responsive"
            alt={`Imagen de ${nombre}`}
            width={100}
            height={169}
            src={imagen.url}
          ></Image>

          <div className={styled.contenidoCard}>
            <h2>{nombre}</h2>
            <p>{descripcion.slice(0, 500)}</p>
            <h3> ${precio}</h3>

            <form onSubmit={(e) => {handlesubmit(e)}} className={styled.form}>
              <label>Cantidad:</label>
              <select >
                <option value="">--Seleccione--</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
              </select>
              <input
                type="submit"
                value="Agregar al carrito"
                
              ></input>
            </form>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export async function getServerSideProps({ query: { url } }) {
  const urlA = `${process.env.API_URL}/guitarras/?url=${url}`;
  const respuesta = await fetch(urlA);
  const entradaGuitarra = await respuesta.json();

  return {
    props: {
      entradaGuitarra
    }
  };
}
export default entradaGuitarra;
