import searchIcon from "../../Images/Search-icon.svg"
import girlImg from "../../Images/girl.png"
import "./SearchMenu.css"
import BluePatch from "./BluePatch"
import GreenPatch from "./GreenPatch";

function SearchMenu (){
    return (
        <div>
            <div className="search-area">
                <div className="search">
                <input placeholder="Location" className="location" />
                <input placeholder="Keyword" className="keyword" />
                <div className="categories">
                    <button className="dropdownMenu">All categories</button>
                    <ul className="category-choices">
                        <li >Option 1</li>
                        <li>Option 2</li>
                        <li>Option 3</li>
                        <li>Option 4</li>
                        <li>Option 5</li>
                    </ul>
                </div>
                <img src={searchIcon} className="s-i"/>
                </div>
                
            </div>
            <div className="part-3">
                <div className="text">
                    <h2>Discover where you can pay with Dagcoin</h2>
                </div>
                <div className="imgs">
                    <img src={girlImg} className='g-i' />
                    <BluePatch/>
                    <GreenPatch/>
                </div>
            </div>
        </div>
    )
}

export default SearchMenu;