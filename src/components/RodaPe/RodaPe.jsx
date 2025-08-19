import instagram from '/home/lukascomka/Área de trabalho/CCOA-2Semestre/Projeto Integrado segundo semestre/Prototipo_site/bitcoin_pessoal/src/img/instagram.png'

import github from '/home/lukascomka/Área de trabalho/CCOA-2Semestre/Projeto Integrado segundo semestre/Prototipo_site/bitcoin_pessoal/src/img/github_1051326.png'

import logo_footer from "/home/lukascomka/Área de trabalho/CCOA-2Semestre/Projeto Integrado segundo semestre/Prototipo_site/bitcoin_pessoal/src/img/logo_semFundo.png";

import "../RodaPe/RodaPe.css"


function RodaPe(){
    return(

         <div className="roda_pe">
        <div className="midiaSocial">
          <img src={instagram} alt="" />
          <img src={github} alt="" />
        </div>
        <h3>company - <span>BITWARE</span></h3>
        <img src={logo_footer} className="logo_footer" alt="logo" />
        
      </div>
    );
}
export default RodaPe;