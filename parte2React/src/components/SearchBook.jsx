import React,{useState} from "react";
import './styles/style.css';
import './styles/dropdown.css';
import Data from './BookData'

function SearchBook() {

    const [list, setList] = useState("");

    return (
        <div>
            <form class="search-bar" action="/action_page.php">
                <input type="text"
                    className="form-control"
                    placeholder="SearchBook"
                    onChange={(event) => {
                        setList(event.target.value);
                }}></input>
                <button type="submit"><i class="fa fa-search"></i></button>
            </form>

            <div className="main">
                {Data.filter(item => {
                    if(list === ""){
                        return item;
                    }
                    else if(item.name.toLowerCase()
                        .includes(list.toLowerCase())){return item}
                }).map((item) => (
                
                    <div key={item.id}>
                    <ul className="lista">
                        <li className="item_lista">{item.name}</li>
                    </ul>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default SearchBook