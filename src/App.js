/* ⦁ Crie um programa de cadastro de livros de uma loja (utilizando React). 
O programa deve implementar as funcionalidades descritas no texto abaixo:
 
(0) - Crie o protótipo e anexe na atividade;
(1) - Cadastrar livro;
(2) - Pesquisar livro;

O cadastro do  deve solicitar código do livro, titulo, autor, data. O programa deve respeitar as seguintes restrições:
⦁ A pesquisa deve ser feita pelo código ou autor; 
⦁ A exclusão deve ser feita pela tabela de livros;

  (desafio) A tabela de livros deve apresentar quantos livros com o mesmo titulo existem na loja */

import React, { useState } from 'react';
import './App.css';


function App() {

  const [codigo, setCodigo] = useState('');
  const [codigoPesquisa, setCodigoPesquisa] = useState('');
  const [titulo, setTitulo] = useState('');
  const [tituloPesquisa, setTituloPesquisa] = useState('');
  const [autor, setAutor] = useState('');
  const [autorPesquisa, setAutorPesquisa] = useState('');
  const [data, setData] = useState('');
  const [dataPesquisa, setDataPesquisa] = useState('');

  const [livros, setLivros] = useState([]);

  const cadastrar = () => {
    let codigoNovo = codigo;
    let isCodigo = true;

    livros.forEach(livro => {
      if (livro.codigo === codigoNovo) {
        isCodigo = false;
      }
    });
    if (isCodigo) {
      setLivros([...livros, {
        codigo: codigoNovo,
        titulo: titulo,
        autor: autor,
        data: data,
      }])
    } else {
      alert('Código já cadastrado')
    }
    limparForm();
  }

  function pesquisar() {
    if (!codigoPesquisa) {
      alert('Digite a placa que deseja pesquisar');
    } else {
      livros.forEach((livro) => {
        if (livro.placa === codigoPesquisa) {
          setCodigoPesquisa(livro.placa);
          setTituloPesquisa(livro.modelo);
          setAutorPesquisa(livro.marca);
          setDataPesquisa(livro.ano);
        }
      })
    }
    contar()
  }


  function limparForm() {
    setCodigo('');
    setTitulo('');
    setAutor('');
    setData('');
  }

  function contar() {
    let contador = 0;
    livros.forEach((lv) => {
      if (lv.titulo === codigoPesquisa) {
        contador++;
      }
    });
    alert("total de livros com o título " + codigoPesquisa + " é " + contador);
  }


  function excluir(codigo) {
    livros.forEach((l, index) => {
      if (l.codigo === codigo) {
        livros.splice(index, 1)
        console.log(livros)
      }
    })
    setLivros([...livros]); //atualizar array
  }
  //RETURN
  return (
    <div>
      <header>
        <h1>Loja de Livros</h1>
      </header>
      <div className="container">
        <div className="layout">

          <fieldset>
            <legend>Cadastro</legend>
            <div>
              <input onChange={(e) => { setCodigo(e.target.value) }} value={codigo}
                placeholder='Código Livro'></input>
            </div>
            <div>
              <input onChange={(e) => { setTitulo(e.target.value) }} value={titulo}
                placeholder='Título do Livro'></input>
            </div>
            <div>
              <input onChange={(e) => { setAutor(e.target.value) }} value={autor}
                placeholder='Autor do Livro'></input>
            </div>
            <div>
              <input type='date' onChange={(e) => { setData(e.target.value) }} value={data}
                placeholder='Data'></input>
            </div>
          </fieldset>
          <button className='btn' onClick={cadastrar}>Cadastrar</button>

          {/* Pesquisar */}
          <fieldset>
            <legend>Pesquisa</legend>
            <input onChange={(e) => { setCodigoPesquisa(e.target.value) }} value={codigoPesquisa}
              placeholder='Código ou Autor'></input>
          </fieldset>
          <button className='btn' onClick={pesquisar}>Pesquisar</button>
          <div>
            <h4>Código: {codigoPesquisa}</h4>
            <h4>Título: {tituloPesquisa}</h4>
            <h4>Autor: {autorPesquisa}</h4>
            <h4>Data: {dataPesquisa}</h4>
          </div>
          {/* fim Pesquisar */}

        </div>
        <div>
          <table className='tabela'>
            <tr>
              <th>Código Livro</th>
              <th>Título</th>
              <th>Autor</th>
              <th>Data</th>
              <th>Ações</th>
            </tr>
            {livros.map((livro) => {
              return (

                <tr>
                  <td>{livro.codigo}</td>
                  <td>{livro.titulo}</td>
                  <td>{livro.autor}</td>
                  <td>{livro.data}</td>
                  <td>
                    <button onClick={() => (excluir(livro.codigo))}>Excluir</button>
                  </td>
                </tr>
              )
            })}
          </table>
        </div>
      </div>
      <div>

      </div>
    </div>
  );
}

export default App;
