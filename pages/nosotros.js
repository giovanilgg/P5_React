import React from 'react';
import Link from "next/link";
import Layout from "../components/Layout";
import Image from 'next/image';
import styled  from '../styles/Nosotros.module.css'


const Nosotros = () => {
  return  <Layout pagina={'Nosotros'} > 
  
    <main className='contenedor'>
      <h2 className='heading'> Nosotros</h2>

      <div className={styled.contenido}>
      
         <Image layout='responsive' width={600} height={450} src={'/img/nosotros.jpg'} alt='Imagen sobre empresa de nosotros'/>
         <div>
         <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam condimentum euismod turpis suscipit feugiat. Donec hendrerit id turpis sed viverra. Morbi dictum tristique erat pulvinar consectetur. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Mauris aliquet gravida tellus non congue. Mauris cursus magna eget mattis pretium. Donec quis nisi lectus. Nulla vel erat risus. Vestibulum pulvinar ipsum eu nisl porttitor, non ornare velit pretium. Proin at bibendum libero. Pellentesque at arcu id elit faucibus porttitor.Maecenas sed leo auctor, maximus justo non, venenatis eros. Integer finibus mi ac nisi iaculis, nec ullamcorper nisl porttitor. Morbi eget venenatis sapien. Pellentesque aliquam aliquet ante eu tristique. Quisque non ligula varius nunc finibus interdum sit amet et erat. Integer sagittis vestibulum urna ut aliquam. Etiam sodales cursus blandit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi rutrum volutpat orci eu vestibulum. Quisque vel ex in sem pretium ultricies. Ut odio mi, placerat sed eros id, luctus maximus nisl. Praesent nulla diam, egestas ut nisl at, viverra finibus odio. Phasellus tincidunt nunc sed elementum semper.</p>
         </div>
      
      </div>



    </main>
  
  
  
  
  </Layout>;
};

export default Nosotros;

