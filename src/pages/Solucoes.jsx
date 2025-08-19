import NavComponent from "../components/NavBar/NavBar";
import RodaPe from "../components/RodaPe/RodaPe";

import Section1 from "../components/Solucoes1Section/Section1";
import Section2 from '../components/Solucoes1Section/Section2';
import Section3 from "../components/Solucoes1Section/Section3";

function Soulucoes() {
    return (
        <div className="ContainerPaginaSolucoes">
            <NavComponent />
            <Section1 />
            < Section2 />
            <Section3 />
            <RodaPe />
        </div>

    );
}

export default Soulucoes;