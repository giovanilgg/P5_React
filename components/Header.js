import React from "react";
import Link from "next/link";
import styles from "../styles/Header.module.css";
import Image from "next/image";

const Header = () => {
  return (
    <header>
      <div className={styles.header}>
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
      </div>
    </header>
  );
};

export default Header;
