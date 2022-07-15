import React,{useState, useEffect} from "react";
import { useNavigate } from "react-router-dom";
import './styles/style.css';
import './styles/dropdown.css';

let navigate;

function searchButton(search,set){
    if(search!=""){
        navigate('/search?key='+search, { state:search });  
        window.scrollTo(0, 100);
        set("");
    }
}
function SearchBook() {
    navigate=useNavigate();

    const [Data,setBookData]=useState([]);
    useEffect(()=>{
		fetchItems();
    },[])

	const fetchItems = async () => {
        const data = await fetch('http://localhost:4000/books');
        const items = await data.json();
        setBookData(items);
    };
    const [list, setList] = useState("");

    const handleKeyPress = (event) => {
      if(event.key === 'Enter'){
        searchButton(list,setList)
      }
    }
    return (
        <div>
            <div className="search-bar" action="/action_page.php">
                <input type="text"
                    className="form-control"
                    placeholder="search..."
                    onChange={(event) => {
                        setList(event.target.value);
                }}onKeyPress={handleKeyPress}></input>
                <div className="search-btn" onClick={()=>searchButton(list,setList)}><i className="fa fa-search"></i></div>
            </div>
            {
            <div className="main" style={{display:(list==="")?"none":"flex"}}>
                {Data.filter(item => {
                    if(list === ""){
                        return item;
                    }
                    else if(item.name.toLowerCase()
                        .includes(list.toLowerCase())){return item}
                        return null;
                }).map((item,i) => (
                
                    <div key={i}>
                        <ul className="lista" onClick={() => searchButton(item.name,setList)}>
                            <li className="item_lista">{item.name}</li>
                        </ul>
                    </div>
                ))}
            </div>}
        </div>
    )
}
export default SearchBook