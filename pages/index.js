import Head from "next/head";
import Link from "next/link";
import Layout from "../components/Layout";
import Listado from "../components/Listado";
import styled from "../styles/Tienda.module.css";
import Curso from "../components/Curso";
import ListadoBlog from "../components/ListadoBlog";
export default function Home({ guitarras, cursos, blog }) {
  console.log(blog);
  return (
    <Layout 
    
    
    pagina={"Inicio"}
    guitarra={guitarras[3]}
    >
      <main className="contenedor"></main>
      <h1 className="heading">Nuestra Colección</h1>

      {/*seccion 1 */}
      <section className={styled.contenedorGrid}>
        {guitarras.map((gui) => (
          <Listado key={gui.id} guitarra={gui}></Listado>
        ))}
      </section>
      <Curso cursos={cursos}></Curso>
      <section className="contenedor">
        <ListadoBlog entradas={blog}></ListadoBlog>
      </section>
    </Layout>
  );
}
export async function getServerSideProps() {
  //en la url se puede agregar  filtros para consumir la app
  // /guitarras?_sort=precio:desc para ordenar de manera descendente por el precio
  // /guitarras?_sort=created_at:desc para ordenar de manera que te trae primero los ultimos que se agregaron
  //const url = `${process.env.API_URL}/guitarras`;
  //const resultado = await fetch(url);
  //const guitarras = await resultado.json();

  /*Consultar multiples apis con promise all */

  const urlGuitarras = `${process.env.API_URL}/guitarras`;
  const urlCursos = `${process.env.API_URL}/cursos`;
  const urlBlog = `${process.env.API_URL}/blogs?&_limit=3&_sort=created_at:desc`;

  const [resGuitarras, resCursos, resBlog] = await Promise.all([
    fetch(urlGuitarras),
    fetch(urlCursos),
    fetch(urlBlog)
  ]);
  const [guitarras, cursos, blog] = await Promise.all([
    resGuitarras.json(),
    resCursos.json(),
    resBlog.json()
  ]);

  return {
    props: {
      guitarras,
      cursos,
      blog
    }
  };
}
