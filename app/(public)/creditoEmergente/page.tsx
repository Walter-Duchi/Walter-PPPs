import { HeaderPage } from "./components/HeaderPage";
import { MainPage } from "./components/MainPage";
import { InfoPage } from "./components/InfoPage";

const Page = () => {
    return (
        <div className="mt-8 mb-8">
            <HeaderPage />
            <div className="w-[1000px] justify-center mx-auto mt-6 mb-6">
                <MainPage />    
            </div>
            <InfoPage />
        </div>
    );
}

export default Page;