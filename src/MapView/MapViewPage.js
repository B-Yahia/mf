import MainPageFooter from "../MainPage/MainPageFooter/MainPageFooter.js";
import DiscoverMerchants from "./DiscoverMerchants.js";
import SearchBar from "./SearchBar.js";

function MapViewPage (){
    return(
        <div>
            <SearchBar/>
            <DiscoverMerchants/>
            <MainPageFooter/>
        </div>
    )
}

export default MapViewPage;