import React from "react";
import Layout from "../components/Layout";
import { useEffect } from "react";
import Entrada from "../components/Entrada.js";
import styled from "../styles/Blog.module.css";

const Blog = ({ entradas }) => {
  return (
    <Layout pagina={"Blog"}>
      <main className="contenedor">
        <h2 className="heading">Blog</h2>
        <div className={styled.blog}>
          {entradas.map((e) => (
            <Entrada  key={e.id} entradas={e} ></Entrada>
          ))}
        </div>
      </main>
    </Layout>
  );
};
export async function getServerSideProps() {
  //al momento de hacer el exports se puede utlizar en la pagina

  const url = `${process.env.API_URL}/blogs?_sort=created_at:desc`;
  const respuesta = await fetch(url);
  const entradas = await respuesta.json();

  return {
    props: {
      entradas
    }
  };
}
export default Blog;
