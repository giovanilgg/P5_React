import React from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import Layout from "../../components/Layout";
import styled from "../../styles/BlogDes.module.css";
import { formatearFecha } from "../../helpers";
const EntradaBlog = ({ respuesta }) => {
  const router = useRouter(); //trae la informacion del liga visitada

  const { contenido, imagen, published_at, titulo } = respuesta;

  //console.log(respuesta)
  console.log(imagen);
  return (
    <Layout pagina={titulo}>
      {" "}
      <main className="contenedor">
        <h1 className="heading">{titulo}</h1>
        <article className={styled.articulo}>
        
            {" "}
            <Image
              layout="responsive"
              width={400}
              height={200}
              src={imagen.url}
            />{" "}
          

          <div>
            <p className={styled.fecha}>{formatearFecha(published_at)}</p>
            <p className={styled.parrafo}>{contenido}</p>
          </div>
        </article>
      </main>
    </Layout>
  );
};
export async function getServerSideProps({ query }) {
  //en ves de declarar una variable global para obtener la url accedemos al query
  console.log(query.id);
  const url = `${process.env.API_URL}/blogs/${query.id}`;
  const resultado = await fetch(url);
  const respuesta = await resultado.json();
  return {
    props: {
      respuesta
    }
  };
}

/*Metodo cuando no hay tantas peticiones de la web getStaticProps,optimiza las peticiones al server 
  
export async function getStaticPaths(){
    const url = 'http://localhost:1337/blogs'
    const respuesta = await fetch(url)
    const entradas = await respuesta.json()
    const paths = entradas.map(entrada=>({

       params : { id:entrada.id.toString()} //el parametro del id esta en  numero y requiere transformarlo en string 
       return {
          paths,
          fallback:false  //true millones de entradas solo construye las que el usuario solicita 
                          // false solo las rutas que va a contruir 


       }

    }))



}
export async function getStaticProps({ params:{id} }) {
  //en ves de declarar una variable global para obtener la url accedemos al query
  console.log(query.id)
    const url = `http://localhost:1337/blogs/${id}`
    const resultado= await fetch(url)
    const respuesta = await resultado.json()
  return {
    props: {

        respuesta
    }
  };
}





*/
export default EntradaBlog;
