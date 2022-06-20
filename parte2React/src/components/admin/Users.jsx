import React from "react";
import '.././styles/style.css';
import '.././styles/admin.css';
import '.././styles/category.css';
import AdminSection from './AdminSection';
import {books} from '../BookData';
import UserWidget from './UserWidget'



function Users() {
    return (
        <div>
            <h2>User Manager</h2>
            <div className="admin-users-base">
                <div>
                    <h2>Clients</h2>
                    <div className="admin-users-col">
                        <UserWidget user={{'id':21113,'email':'jony@email.com'}}/>
                        <UserWidget user={{'id':21145,'email':'pedro@email.com'}}/>
                        <UserWidget user={{'id':21191,'email':'carlos@email.com'}}/>
                    </div>
                </div>
                <div>
                    <h2>Admins</h2>
                    <div className="admin-users-col">
                        <UserWidget user={{'id':29288,'email':'admin@email.com'}}/>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Users