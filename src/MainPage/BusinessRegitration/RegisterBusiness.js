import "./RegisterBusiness.css"
import i1 from "./RegisterBusiness/1.svg"
import i2 from "./RegisterBusiness/2.svg"
import i3 from "./RegisterBusiness/3.svg"
import i4 from "../MostRecentMerchand/MostRecentMer/1.png"


function RegisterBusiness(){
    return(
        <div className="br-container">
            <div className="br-info">
                <div className="br-title">Are you a business owner?</div>
                <div className="br-texte">Start accepting dag payments and get your business listed, for free!</div>
                <div className="br-steps">
                    <div className="br-step">
                        <img src={i1}/>
                        <div className="br-s-t">
                            <div className="br-s-text">Sign up</div>
                            <div className="br-s-desc">Sign up with your Dagpay account.</div>
                        </div>
                    </div>
                    <div className="br-step">
                        <img src={i2}/>
                        <div className="br-s-t">
                            <div className="br-s-text">Get listed</div>
                            <div className="br-s-desc">Submit your business here on dagcoin merchant finder.</div>
                        </div>
                    </div>
                    <div className="br-step">
                        <img src={i3}/>
                        <div className="br-s-t">
                            <div className="br-s-text">Get new customers</div>
                            <div className="br-s-desc">Get new customers and clients from unifying dag community.</div>
                        </div>
                    </div>
                </div>
                <div className="br-btn">Register your business</div>
            </div>
            <div className="br-cards">
                <div className="br-card br1">
                    <img className="br-ard-img img-br" src={i4}/>
                    <h4 className="br-card-title">SHU</h4>
                    <p className="br-card-description">Tallinn, Estonia</p>
                    <p className="br-card-category">Food & Drinks</p>
                </div>
                <div className="br-card br2">
                    <img className="br-card-img img-br" src={i4}/>
                    <h4 className="br-card-title ">SHU</h4>
                    <p className="br-card-description">Tallinn, Estonia</p>
                    <p className="br-card-category">Food & Drinks</p>
                </div>
                <div className="br-card br3">
                    <img className="br-card-img img-br" src={i4}/>
                    <h4 className="br-card-title">SHU</h4>
                    <p className="br-card-description">Tallinn, Estonia</p>
                    <p className="br-card-category">Food & Drinks</p>
                </div>
            </div>
        </div>
    )
}

export default RegisterBusiness;