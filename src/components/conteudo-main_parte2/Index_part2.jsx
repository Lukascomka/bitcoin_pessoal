
import video_processador from "/home/lukascomka/Área de trabalho/CCOA-2Semestre/Projeto Integrado segundo semestre/Prototipo_site/bitcoin_pessoal/src/video/video_processador.mp4";

import './Index_part2.css'; 

function Index_part2(){
    return (

         <div class="conteudo_part2">
                <div class="conteudo_part2_text">
                  <div class="titulo-container">
                    <h1 class="titulo-principal">O controle do seu</h1>
                    <h1 class="titulo-destaque">ecossistema de mineração.</h1>
                  </div>
                  <h3 class="subtitulo">
                    Conte com o nosso sistema especializado
                    e dados relevantes para sua aplicação.
                  </h3>
                  <a className="btnSaibaMaisSession2" href="solucoes.jsx">Saiba Mais</a>
                </div>
                <video autoPlay loop muted playsInline className="video_processador">
                  <source src={video_processador} type="video/mp4" />
                </video>
              </div>
    );
}


export default Index_part2 ;