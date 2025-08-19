import logo from "/home/lukascomka/Área de trabalho/CCOA-2Semestre/Projeto Integrado segundo semestre/Prototipo_site/bitcoin_pessoal/src/logo.svg";

import "../NavBar/NavBar.css";


import { Link } from "react-router-dom";


function NavComponent() {
  return (
    <div className="navBar">
      <div className="conteudoLogo">
        <img src={logo} className="App-logo" alt="logo" />
        <div>BITWARE</div>
      </div>
      <div className="links_nav">
        <Link to="/">Home</Link>
        <a to="">Quem Somos</a>
        <Link to="/solucoes">Soluções</Link>
        <div className="btnCadastrar">
          <a to="">Cadastrar</a>
        </div>
      </div>
    </div>
  );
}

export default NavComponent;