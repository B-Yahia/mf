import ds from "../../Images/DagSign.svg"
import "./BluePatch.css"

function BluePatch(){
    return (
        <div className="s-container" >
            <div className="p-1">
                <img src={ds} className="img-dag"/>
            </div>
            <div className="p-2">
                <p  className="p-2-1">Serenity Salon</p>
                <p className="p-2-2">Health & Beauty</p>
            </div>
        </div>
    )
}

export default BluePatch;