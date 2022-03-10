import React from "react";
import Link from "next/link";
import styles from "../styles/Header.module.css";
import Image from "next/image";
import { useRouter } from "next/router";

const Header = ({ guitarra }) => {
  console.log(guitarra);
  const router = useRouter();
  return (
    
      <header className={styles.header}>
        <div className={styles.barra}>
          <Link href="/">
            <a>
              {" "}
              <Image
                src="/img/logo.svg"
                width={400}
                height={100}
                alt="Imagen Logo "
              />
            </a>
          </Link>

          <nav className={styles.navegacion}>
            <Link href="/">Inicio</Link>
            <Link href="/nosotros">Nosotros</Link>
            <Link href="/blog">Blog</Link>
            <Link href="/tienda">Tienda</Link>
          </nav>
        </div>
        {guitarra && (
          <div className={`contenedor ${styles.modelo}`}>
            <h2>Modelo {guitarra.nombre}</h2>
            <p>{guitarra.descripcion.slice(1, 200)}</p>
            <div className={styles.precio}>
              <p>${guitarra.precio}</p>
              <Link href={`/guitarras/${guitarra.url}`}>
                <a>Ver producto</a>
              </Link>
            </div>
          </div>
        )}
        {router.pathname === "/" && (
          <div  className={styles.guitarra}>
             <Image
            layout="fixed"
            width={400}
            height={900}
            src="/img/header_guitarra.png"
            alt="imagen header"
          />
          </div>
         
        )}
      </header>
   
  );
};

export default Header;
