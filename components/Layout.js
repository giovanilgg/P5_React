
import Header from "./Header";
import Head  from "next/head";
import Footer from "./Footer";

const Layout = ({ children, pagina }) => {
  return (
    <div>
      <Head>
        <title>TiendaGuitarras -{pagina}</title>
        <meta
          name="description"
          content="Sitio Web de venta de guitarras"
        ></meta>
      </Head>
      <Header></Header>
      {children}
      <Footer></Footer>
    </div>
  );
};

export default Layout;
