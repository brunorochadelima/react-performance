import React, { useCallback } from "react";
import Pessoa from "./Pessoa";

export default function ListaPessoas() {
  const [pessoas, setPessoas] = React.useState([
    {
      nome: "Maria",
      id: 1,
    },
    {
      nome: "João",
      id: 2,
    },
  ]);

  const deletarPessoa = useCallback((id) => {
    setPessoas(pessoas.filter((pesssoa, indice) => pesssoa.id !== id));
  }, []);

  return (
    <div className="has-text-centered">
      <ul>
        {pessoas.map((pessoa, index) => (
          <Pessoa
            key={pessoa.id}
            nome={pessoa.nome}
            id={pessoa.id}
            deletar={deletarPessoa}
          />
        ))}
      </ul>
      <button
        className="button is-primary is-outlined"
        onClick={() => {
          setPessoas((listaAnterior) => [
            ...listaAnterior,
            {
              nome: "Mariana",
              id: 3,
            },
          ]);
        }}
      >
        Adicionar pessoa
      </button>
    </div>
  );
}

// Não usar indice como id ou key pois dessa forma mesmo usando memo o indice vai mudar ao alterar a lista e o react vai rendezizar tudo de novo.
// Memo não funciona com funções por causas das refeferencias que mudam por isso usar useCallback
// useCallback grana na mememória, tem 2 parametros, 1 função, 2 [] diz quando ela deve ser mudada, em caso de Set nao precisa, so em caso de variáveis
