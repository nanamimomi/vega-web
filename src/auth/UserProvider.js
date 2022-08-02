import React, { createContext, useState, useEffect } from 'react';
const UserContext = createContext({
  user :'',
  setUserInfo: () => {},
  logout: () => {}
});

const UserProvider = ({children, the_user = { username: '', jwt:'' , role: ''}}) => {
  	const [user, setUser] = useState(the_user);

  	useEffect(() => {
      const username =  window.localStorage.getItem("username");
      const jwt =  window.localStorage.getItem("jwt");
      const role =  window.localStorage.getItem("role");
      if(username && jwt){
        setUser({
          username: username,
          jwt: jwt,
          role: role
        })
      }
    }, [])

  	const setUserInfo = (name, jwt, role) => {
    	console.log("SetUserInfo called");
      setUser((user) => ({
      		username: name,
      		jwt: jwt,
          role: role
    	}));
      console.log(user)
      window.localStorage.setItem("username", name);
      window.localStorage.setItem("jwt", jwt);
      window.localStorage.setItem("role", role);
  	};
    const getUserInfo = () => {
      return window.localStorage.getItem("jwt");
    }

  	const logout = () => {
    	setUser((user) => ({
      		username: '',
      		jwt: '',
          role: ''
    	}));
      window.localStorage.setItem("username", "");
      window.localStorage.setItem("jwt","");
      window.localStorage.setItem("role","");
  	};
    console.log("Rendering context provider");
	return (

    	<UserContext.Provider value={{ user, setUserInfo, logout }}>
      		{children}
    	</UserContext.Provider>
  	);
}

export {
  UserProvider, 
  UserContext
}