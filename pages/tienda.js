import React from "react";
import Layout from "../components/Layout";
import Listado from "../components/Listado";
import styled from "../styles/Tienda.module.css";

const Tienda = ({ guitarras }) => {
  
  return (
    <Layout pagina={"Tienda virtual"}>
      <main className="contenedor">
        <h1 className="heading">Nuestra Colección</h1>
        <section className={styled.contenedorGrid}>
          {guitarras.map((gui) => (
            <Listado key={gui.id} guitarra={gui}></Listado>
          ))}
        </section>
      </main>
    </Layout>
  );
};
export async function getServerSideProps() {

  //en la url se puede agregar  filtros para consumir la app
  // /guitarras?_sort=precio:desc para ordenar de manera descendente por el precio
   // /guitarras?_sort=created_at:desc para ordenar de manera que te trae primero los ultimos que se agregaron
  const url = `${process.env.API_URL}/guitarras`;
  const resultado = await fetch(url);
  const guitarras = await resultado.json();
  return {
    props: {
      guitarras
    }
  };
}

export default Tienda;
