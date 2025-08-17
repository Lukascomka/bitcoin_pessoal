import logo from "/home/lukascomka/Área de trabalho/CCOA-2Semestre/Projeto Integrado segundo semestre/Prototipo_site/bitcoin_pessoal/src/logo.svg";

import "/home/lukascomka/Área de trabalho/CCOA-2Semestre/Projeto Integrado segundo semestre/Prototipo_site/bitcoin_pessoal/src/components/nav-bar/nav-bar.css";

function NavComponent(){
    return(
         <div className="navBar">
              <div className="conteudoLogo">
                <img src={logo} className="App-logo" alt="logo" />
                <div>BITWARE</div>
              </div>
              <div className="links_nav">
                <a href="App.jsx">Home</a>
                <a href="">Quem Somos</a>
                <a href="solucoes.jsx">Soluções</a>
            <div className="btnCadastrar">
                <a href="">Cadastrar</a>
            </div>
              </div>
            </div>
    );
}

export default NavComponent;