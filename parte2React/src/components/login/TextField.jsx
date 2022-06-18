import React from "react";

function TextField({value,holder,change,teste,errorMessage}) {
    console.log(teste);
    return (
         <div className="TextField"  >
                    <input class={teste?"invalid":""} type="text" placeholder={holder} value={value} 
                    onChange={change}/>
                    {teste? <div className="erro">{errorMessage}</div> : <></>}
                </div>
    );
}
export default TextField;