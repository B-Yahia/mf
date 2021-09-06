import BarMenu from './FirstBar/BarMenu';
import SearchMenu from './FirstBar/SearchMenu';
import InfoBar from './InfoBar/InfoBar';
import ExMer from './Explore-Merchants/ExMer';
import MostRecentMer from './MostRecentMerchand/MostRecentMer';
import RegisterBusiness from './BusinessRegitration/RegisterBusiness';
import MainPageFooter from './MainPageFooter/MainPageFooter';
import OnlineMer from "./OnlineMerchants/OnlineMer"


function MainPage (){
    return(
        <div>
            <BarMenu/>
            <SearchMenu/>
            <InfoBar/>
            <ExMer/>
            <MostRecentMer/>
            <RegisterBusiness/>
            <OnlineMer/>
            <MainPageFooter/>
        </div>
    )
}
export default MainPage;