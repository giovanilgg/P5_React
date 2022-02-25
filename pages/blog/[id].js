import React from "react";
import { useRouter } from "next/router";
const EntradaBlog = ({respuesta}) => {
  const router = useRouter(); //trae la informacion del liga visitada

  console.log(respuesta)
  return <div>hola</div>;
};
export async function getServerSideProps({ query }) {
  //en ves de declarar una variable global para obtener la url accedemos al query
  console.log(query.id)
    const url = `http://localhost:1337/blogs/${query.id}`
    const resultado= await fetch(url)
    const respuesta = await resultado.json()
  return {
    props: {

        respuesta
    }
  };
}

export default EntradaBlog;
