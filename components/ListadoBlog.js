import React from "react";
import styled from "../styles/Blog.module.css";
import Entrada from "./Entrada";
const listadoBlog = ({entradas}) => {
  return (
    <>
      <h2 className="heading">Blog</h2>
      <div className={styled.blog}>
        {entradas.map((e) => (
          <Entrada key={e.id} entradas={e}></Entrada>
        ))}
      </div>
    </>
  );
};

export default listadoBlog;
