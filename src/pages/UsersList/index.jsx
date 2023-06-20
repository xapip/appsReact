import React from "react";

import "./usersList.scss";
import { Success } from "./components/Success";
import { Users } from "./components/Users";

// Тут список пользователей: https://reqres.in/api/users

function UsersList() {
  const [users, setUsers] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);
  const [searchUser, setSearchUser] = React.useState('');
  const [inviteList, setInviteList] = React.useState([]);
  const [isInvite, setIsInvite] = React.useState(false);
  
  
  
  React.useEffect(() => {
    fetch("https://reqres.in/api/users")
      .then(resp => resp.json())
      .then(json => setUsers(json.data))
      .catch(err => 
        {
          console.error(err) 
          alert(err.message)
        }
      )
      .finally(() => setIsLoading(false))
  }, []);

  const onChangeSearchUser = (e) => {
    setSearchUser(e.target.value);
  };

  const addInvateList = (id) => {
    if(inviteList.includes(id)) {
      setInviteList(inviteList.filter(item => item !== id))
    } else {
      setInviteList(prev => [...prev, id])
    }
  }

  const onFetchInviteUsers = () => {
    setIsInvite(true);
  }

  return (
    <div className="inner">
      <div className="App">
        {isInvite ? (
          <Success inviteList={inviteList} users={users} />
        ) : (
          <Users
            items={users}
            isLoading={isLoading}
            searchUser={searchUser}
            onChangeSearchUser={onChangeSearchUser}
            addInvateList={addInvateList}
            inviteList={inviteList}
            onFetchInviteUsers={onFetchInviteUsers}
          />
        )}
      </div>
    </div>
  );
}

export default UsersList;
