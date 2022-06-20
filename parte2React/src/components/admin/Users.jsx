import React from "react";
import '.././styles/style.css';
import '.././styles/admin.css';
import '.././styles/category.css';
import UserWidget from './UserWidget'



function Users() {
    var accountsArr = localStorage.getItem("users").split(',');
    let users = []
    let n=accountsArr.length;
    for (let i = 1; i < n; i++) {
        if(accountsArr[i] != 'admin@email.com')
            users.push(<div><UserWidget user={{'id':localStorage.getItem(accountsArr[i] + "name"),'email': accountsArr[i]}}/></div>)
    }  
    return (
        <div>
            <h2>User Manager</h2>
            <div className="admin-users-base">
                <div>
                    <h2>Clients</h2>
                    <div className="admin-users-col">
                        {users}
                    </div>
                </div>
                <div>
                    <h2>Admins</h2>
                    <div className="admin-users-col">
                        <UserWidget user={{'id':localStorage.getItem('admin@email.com' + "name"),'email':'admin@email.com'}}/>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Users