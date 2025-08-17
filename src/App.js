import './App.css';


import Index_part2 from "./components/conteudo-main_parte2/Index_part2";

import NavComponent from "./components/nav-bar/nav-bar";

import CarrosselMain from "./components/carrossel_home/carrossel_home";

function App() {
  return (
    <div className="container_pagina">
      <NavComponent />
      <CarrosselMain />
      <Index_part2/>


    </div>
  );
}
export default App;
