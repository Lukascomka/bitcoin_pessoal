import './App.css';



import Index_part2 from "./components/conteudo-main_parte2/Index_part2";

import NavComponent from "./components/nav-bar/nav-bar";

import CarrosselMain from "./components/carrossel_home/carrossel_home";

import Footer_Main from './components/footer_main/Footer_Main';



import instagram from './img/instagram.png'
import github from './img/github_1051326.png'

import logo_footer from "./img/logo_semFundo.png";

function App() {
  return (
    <div className="container_pagina">
      <NavComponent />
      <CarrosselMain />
      <Index_part2 />
      <Footer_Main />
      <div className="roda_pe">
        <div className="midiaSocial">
          <img src={instagram} alt="" />
          <img src={github} alt="" />
        </div>
        <h3>company - <span>BITWARE</span></h3>
        <img src={logo_footer} className="logo_footer" alt="logo" />
        
      </div>


    </div>
  );
}
export default App;
