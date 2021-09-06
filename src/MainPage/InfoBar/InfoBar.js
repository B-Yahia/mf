import i1 from "./InfoBarImages/i-b-i-1.svg"
import i2 from "./InfoBarImages/i-b-i-2.svg"
import i3 from "./InfoBarImages/i-b-i-3.svg"
import "./InfoBar.css"

function InfoBar (){
    return (
        <div className="i-b">
            <div className="i-b-title">
                <p>Browse by merchand type</p>
            </div>
            <div className="info-Items">
                <div className="info-item">
                    <div className="img" >
                        <img src={i1} />
                    </div>
                    <div className="ibt">
                        <p className="i-b-t">Online services</p>
                        <p className="i-b-tx">493 merchants</p>
                    </div>
                </div>
                <div className="info-item">
                    <div className="info-item">
                        <div className="img" >
                            <img src={i2} />
                        </div>
                        <div className="ibt">
                            <p className="i-b-t">Brick-and-mortar businesses</p>
                            <p className="i-b-tx">512 merchants</p>
                        </div>
                    </div>
                </div>
                <div className="info-item">
                    <div className="info-item">
                        <div className="img" >
                            <img src={i3} />
                        </div>
                        <div className="ibt">
                            <p className="i-b-t">Dagloyalty merchants</p>
                            <p className="i-b-tx">124 merchants</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default InfoBar;