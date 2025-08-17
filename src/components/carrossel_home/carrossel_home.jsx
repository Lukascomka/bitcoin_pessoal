import video_bitcoin from "/home/lukascomka/Área de trabalho/CCOA-2Semestre/Projeto Integrado segundo semestre/Prototipo_site/bitcoin_pessoal/src/video/video_bitcoin.mp4";

import "/home/lukascomka/Área de trabalho/CCOA-2Semestre/Projeto Integrado segundo semestre/Prototipo_site/bitcoin_pessoal/src/components/carrossel_home/carrossel_home.css";

function CarrosselMain(){
    return(
        <div className="conteudoCarrossel">
          <video autoPlay loop muted playsInline className="video_carrossel">
            <source src={video_bitcoin} type="video/mp4" />
            Seu navegador não suporta o vídeo.
          </video>
        
          <div className="div_h2Carrossel">
            <h2>
              Tenha <span>controle</span>  e <span>segurança </span>  na hora de minerar ou transferir
              seus bitcoins.
            </h2>
            <a className="btnSaibaMais" href="solucoes.jsx">Saiba Mais</a>
          </div>
        </div>
    );
}
export  default CarrosselMain ;

