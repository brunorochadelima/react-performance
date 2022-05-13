import React from "react";
import { memo } from "react";

function Pessoa({ nome, deletar, id }) {
  console.log(`pessoa ${nome} foi renderizado`);
  return (
    <li className="box mb-3">
      {nome} <button onClick={() => deletar(id)} className="button is-danger is-light ml-3">Me Delete</button>{" "}
    </li>
  );
}

export default memo(Pessoa);

//Meno (memorização) pega o estado dos props antes e depois da renderização comparando e renderizando somente o necessário.
