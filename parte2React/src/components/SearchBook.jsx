import React,{useState} from "react";
import { useNavigate } from "react-router-dom";
import './styles/style.css';
import './styles/dropdown.css';
import Data from './BookData';
import Search from './Search';

let navigate;
function clickedItem(book,set){
    navigate('/book', { state:book });  
    window.scrollTo(0, 100);
    set("");

}

function searchButton(search,set){
    if(search!=""){
        navigate('/search', { state:search });  
        window.scrollTo(0, 100);
        set("");
    }
}
function SearchBook() {
    navigate=useNavigate();

    const [list, setList] = useState("");

    return (
        <div>
            <form class="search-bar" action="/action_page.php">
                <input type="text"
                    className="form-control"
                    placeholder="search..."
                    onChange={(event) => {
                        setList(event.target.value);
                }}></input>
                <div class="search-btn" onClick={()=>searchButton(list,setList)}><i class="fa fa-search"></i></div>
            </form>

            <div className="main" style={{display:(list==="")?"none":"flex"}}>
                {Data.filter(item => {
                    if(list === ""){
                        return item;
                    }
                    else if(item.name.toLowerCase()
                        .includes(list.toLowerCase())){return item}
                }).map((item) => (
                
                    <div key={item.id}>
                    <ul className="lista" onClick={() => clickedItem(item,setList)}>
                        <li className="item_lista">{item.name}</li>
                    </ul>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default SearchBook