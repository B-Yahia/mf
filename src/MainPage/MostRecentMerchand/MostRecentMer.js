import "./MostRecentMer.css"
import i1 from "./MostRecentMer/1.png"
import i2 from "./MostRecentMer/2.png"
import i3 from "./MostRecentMer/3.png"
import i4 from "./MostRecentMer/4.png"

function MostRecentMer (){
    return(
        <div className="mrm-container">
            <h2 className="mrm-container-title">Most recent merchants</h2>
            <p className="mrm-container-subtitle">Discover the latest merchants accepting Dagcoins</p>
            <div className="cards-container">
                <div className="card">
                    <img className="card-img" src={i1}/>
                    <h4 className="card-title">SHU</h4>
                    <p className="card-description">Tallinn, Estonia</p>
                    <p className="card-category">Food & Drinks</p>
                </div>
                <div className="card">
                    <img className="card-img" src={i3}/>
                    <h4 className="card-title">PetCity Rannamõisa</h4>
                    <p className="card-description">Tallinn, Estonia</p>
                    <p className="card-category">Food & Drinks</p>
                </div>
                <div className="card">
                    <img className="card-img" src={i3}/>
                    <h4 className="card-title">PetCity Rannamõisa</h4>
                    <p className="card-description">Tallinn, Estonia</p>
                    <p className="card-category">Food & Drinks</p>
                </div>
                <div className="card">
                    <img className="card-img" src={i4}/>
                    <h4 className="card-title">PetCity Rannamõisa</h4>
                    <p className="card-description">Tallinn, Estonia</p>
                    <p className="card-category">Food & Drinks</p>
                </div>
            </div>

        </div>
    )
}

export default MostRecentMer;