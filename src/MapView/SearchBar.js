import i1 from "./Image/Logo.svg"
import i2 from "./Image/sbl.svg"
import i3 from "./Image/Union.svg"
import i4 from "./Image/hb.svg"

import "./SearchBar.css"

function SearchBar(){
    return(
        <div className="mv-searchbar">
            <div className="mv-Logo">
                <img src={i1} className="mv-Logo-img" />
            </div>
            <div className="mv-search">
                <input className="mv-search-input" placeholder="Start your search" />
                <img className="mv-search-btn" src={i2}/>
            </div>
            <div className="mv-log">
                <img className="mv-log-lgg" src={i3}/>
                <div className="mv-log-icn">
                    <img className="mv-log-hb" src={i4}/>
                    <div className="mv-log-nm">Yahya</div>
                </div>

            </div>

        </div>
    )
}

export default SearchBar;