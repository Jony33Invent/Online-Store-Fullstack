import React, { useEffect, useState } from "react";
import '.././styles/style.css';
import '.././styles/admin.css';
import '.././styles/category.css';
import UserWidget from './UserWidget'



function Users() {

    //pegar livros no servidor -------------------------------------------
    const [userData,setUserData]=useState([]);
    useEffect(()=>{
        fetchItems();
    },[])
    const fetchItems = async () => {
        const data = await fetch('http://localhost:4000/users');
        const items = await data.json();
        setUserData(items);
    };
    //----------------------------------------------------------------------
    //Usuários
    const userList = userData.filter(item => {
        if(!item.admin){return item}
            return null;
    })
    const items = userList.map((item,i) => ( <div key={'user_'+i}><UserWidget user={item}/></div>))

    //Admins
    const adminList = userData.filter(item => {
        if(item.admin){return item}
            return null;
    })
    const adminItems = adminList.map((item,i) => ( <div key={'admin_'+i}><UserWidget user={item}/></div>))

    return (
        <div>
            <h2>User Manager</h2>
            <div className="admin-users-base">
                <div>
                    <h2>Clients</h2>
                    <div className="admin-users-col">
                        {items}
                    </div>
                </div>
                <div>
                    <h2>Admins</h2>
                    <div className="admin-users-col">
                        {adminItems}
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Users