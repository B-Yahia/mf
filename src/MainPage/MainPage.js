import BarMenu from './FirstBar/BarMenu';
import SearchMenu from './FirstBar/SearchMenu';
import InfoBar from './InfoBar/InfoBar';
import ExMer from './Explore-Merchants/ExMer';
import MostRecentMer from './MostRecentMerchand/MostRecentMer';
import RegisterBusiness from './BusinessRegitration/RegisterBusiness';
import MainPageFooter from './MainPageFooter/MainPageFooter';
import OnlineMer from "./OnlineMerchants/OnlineMer"
import { Modal } from "./Modal/Modal"
import { useAuth } from '../Context/AuthContext';
import ModalLogout from './Modal/ModalLogout';



function MainPage (){
    const {modalLogin,modalLogout} = useAuth();
    return(
            <div className="mainPage">
                <BarMenu />
                <SearchMenu/>
                <InfoBar/>
                <ExMer/>
                <MostRecentMer/>
                <RegisterBusiness/>
                <OnlineMer/>
                <MainPageFooter/>
                {modalLogin && <Modal/>}
                {modalLogout && <ModalLogout/>}
                
                
            </div>
        
    )
}
export default MainPage;