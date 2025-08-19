import Section2Index from "../components/Section2Index/Section2Index";

import NavComponent from "../components/NavBar/NavBar";

import CarrosselMain from "../components/CarrosselHome/CarrosselHome";

import FooterMain from '../components/Section3Index/Sectiom3Index';

import RodaPe from '../components/RodaPe/RodaPe'



function Home(){
    return(
        <div className="container_pagina">
      <NavComponent />
      <CarrosselMain />
      <Section2Index />
      <FooterMain />
      <RodaPe />
    </div>
    );
}
export default Home;