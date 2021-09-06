import iconExMer from "./ExMerImages/Icon.svg"
import "./ExMer.css"

function ExMer (){
    return(
        <div className="ex-mer">
            <h2>Explore Merchants</h2>
            <div className="ex-mer-options">
                <div className="ex-mer-option">
                    <p className="ex-mer-option-text">Pet supplies</p>
                    <img className="ex-mer-option-img" src={iconExMer}/>
                </div>
                <div className="ex-mer-option">
                    <p className="ex-mer-option-text">Automotive & industrial</p>
                    <img className="ex-mer-option-img" src={iconExMer}/>
                </div>
                <div className="ex-mer-option">
                    <p className="ex-mer-option-text">DIY & Tools</p>
                    <img className="ex-mer-option-img" src={iconExMer}/>
                </div>
                <div className="ex-mer-option">
                    <p className="ex-mer-option-text">Services</p>
                    <img className="ex-mer-option-img" src={iconExMer}/>
                </div>
                <div className="ex-mer-option">
                    <p className="ex-mer-option-text">Travel & Holidays</p>
                    <img className="ex-mer-option-img" src={iconExMer}/>
                </div>
                <div className="ex-mer-option">
                    <p className="ex-mer-option-text">Travel & Holidays</p>
                    <img className="ex-mer-option-img" src={iconExMer}/>
                </div>
                <div className="ex-mer-option">
                    <p className="ex-mer-option-text">Clothes</p>
                    <img className="ex-mer-option-img" src={iconExMer}/>
                </div>
            </div>
        </div>
    )
}

export default ExMer;