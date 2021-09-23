import "./DiscoverMerchants.css"
import i5 from "./Image/card-image.png"
import i6 from "./Image/map.png"
import GoogleMap from "./GoogleMap"

function DiscoverMerchants(){
    return(
        <div className="mv-body">
            <div className="mv-cards">
                <div className="mv-title">Discover merchants</div>
                <div className="mv-research-result">1257 Results found</div>
                <div className="mv-cards-containers">
                    <div className="mv-card-containers">
                        <div className="mv-card-img"> <img src={i5}/> </div>
                        <div className="mv-card-info">
                            <div className="mv-card-info-title">PetCity Rannamõisa</div>
                            <div className="mv-card-info-address">Rannamõisa 12, Tallinn, Estonia</div>
                            <div className="mv-card-info-cat"> Food & Drinks </div>
                            <div className="mv-card-info-text">Perfect for someone coming for an exchange placement contract etc to Helsinki. Ideal for couples as well.    </div>
                        </div>
                    </div>
                    <div className="mv-card-containers">
                        <div className="mv-card-img"> <img src={i5}/> </div>
                        <div className="mv-card-info">
                            <div className="mv-card-info-title">PetCity Rannamõisa</div>
                            <div className="mv-card-info-address">Rannamõisa 12, Tallinn, Estonia</div>
                            <div className="mv-card-info-cat"> Food & Drinks </div>
                            <div className="mv-card-info-text">Perfect for someone coming for an exchange placement contract etc to Helsinki. Ideal for couples as well.    </div>
                        </div>
                    </div>
                    <div className="mv-card-containers">
                        <div className="mv-card-img"> <img src={i5}/> </div>
                        <div className="mv-card-info">
                            <div className="mv-card-info-title">PetCity Rannamõisa</div>
                            <div className="mv-card-info-address">Rannamõisa 12, Tallinn, Estonia</div>
                            <div className="mv-card-info-cat"> Food & Drinks </div>
                            <div className="mv-card-info-text">Perfect for someone coming for an exchange placement contract etc to Helsinki. Ideal for couples as well.    </div>
                        </div>
                    </div>
                    <div className="mv-card-containers">
                        <div className="mv-card-img"> <img src={i5}/> </div>
                        <div className="mv-card-info">
                            <div className="mv-card-info-title">PetCity Rannamõisa</div>
                            <div className="mv-card-info-address">Rannamõisa 12, Tallinn, Estonia</div>
                            <div className="mv-card-info-cat"> Food & Drinks </div>
                            <div className="mv-card-info-text">Perfect for someone coming for an exchange placement contract etc to Helsinki. Ideal for couples as well.    </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mv-map"> 
            {/* <GoogleMap/>  */}
            <img src={i6}/>
            </div>
        </div>
    )
}

export default DiscoverMerchants;