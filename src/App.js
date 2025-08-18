import './App.css';



import Index_part2 from "./components/conteudo-main_parte2/Index_part2";

import NavComponent from "./components/nav-bar/nav-bar";

import CarrosselMain from "./components/carrossel_home/carrossel_home";

import Footer_Main from './components/footer_main/Footer_Main';

import Roda_pe from '../src/components/roda_pe/Roda_pe';



function App() {
  return (
    <div className="container_pagina">
      <NavComponent />
      <CarrosselMain />
      <Index_part2 />
      <Footer_Main />
     <Roda_pe />


    </div>
  );
}
export default App;
