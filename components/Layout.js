import Header from "./Header";
import Head from "next/head";
import Footer from "./Footer";

const Layout = ({ children, pagina, guitarra }) => {
  console.log(guitarra);
  return (
    <div>
      <Head>
        <title>TiendaGuitarras -{pagina}</title>
        <meta
          name="description"
          content="Sitio Web de venta de guitarras"
        ></meta>
      </Head>
      <Header guitarra={guitarra}></Header>
      {children}
      <Footer></Footer>
    </div>
  );
};
Layout.defaultProps = {
  guitarra: null
};

export default Layout;
