import ds from "../../Images/DagSign.svg"
import "./GreenPatch.css"

function GreenPatch(){
    return (
        <div className="gs-container" >
            <div className="p-1">
                <img src={ds} className="g-img-dag"/>
            </div>
            <div className="p-2">
                <p  className="p-2-1">Kraft House</p>
                <p className="p-2-2">Collectibles & Art</p>
            </div>
        </div>
    )
}

export default GreenPatch;