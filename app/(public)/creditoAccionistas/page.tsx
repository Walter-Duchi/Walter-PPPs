
import { MainPage } from "./components/MainPage";
import {InfoPageS} from "./components/InfoPageS";

const ShareholderCredit = () => {
    return(
        <div className="my-14">
            <div className="flex items-center justify-center my-14"> {/* contenedor del banner - imagen */}
                <img 
                    src="/homeResources/ImagenCreditoAccionista.avif" 
                    alt="Imagen de Credito Emergente"
                    width={1000}
                    height={300}
                    className="rounded-lg border-2 border-[#25466a]" 
                />
            </div>
            <div className="w-[1000px] justify-center mx-auto rounded-lg mt-4 mb-4">
                <MainPage />
            </div>
            <InfoPageS />
        </div>
    );
}

export default ShareholderCredit;