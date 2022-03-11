import { useState, useEffect } from "react";

let scrollingPosition = 0;
const Contacts = () => {
    const [ users, setUsers] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [ size, setSize] = useState(10);
    const [ navbarVisible, setNavbarVisible] = useState(true);
    
    const handleSizeChange = (event) => {
        setSize(event.target.value);

    }
    useEffect(() => {
         setIsLoading(true);
        fetch('https://randomuser.me/api/?results=' + size)
    .then(res => res.json())
    .then((resJson) => {
        setUsers(resJson.results)
        setIsLoading(false);
    });
     },[size]);

     useEffect(() => {
        const handleScroll = (event) => {
            const newPosition = event.target.documentElement.scrollTop;
            if(scrollingPosition < newPosition) {
                setNavbarVisible(false);
            } else {
                setNavbarVisible(true);
            }
            scrollingPosition = newPosition;
         };

         window.addEventListener("scroll", handleScroll);
         return () => {
            // cleanup/ teardown
            window.removeEventListener('scroll', handleScroll);
         };
     }, []);
    return (
        <div style= {{ position: 'relative', paddingTop: 50}}>
            {navbarVisible ? <NavBar /> : null}
            <select onChange={handleSizeChange} value = {size}>
                <option value ='5'>5</option>
                <option value='10'>10</option>
                <option value='20'>20</option>
                <option value='50'>50</option>
                <option value='100'>100</option>
            </select>
            { isLoading ? <div> Loading... </div> : users.map(users => {
                return (
                    <div key = {users.login.uuid}>
                        <span>{users.name.title} </span>
                        <span>{users.name.first} </span>
                        <span>{users.name.last} </span>
                        </div>
                );
            })}
        </div>
    );
};

const NavBar = () => {
    return (
        <div 
        style = {{
        backgroundColor: 'blue'
        , color: 'red'
        , height: 50
        , fontSize: 32
        ,position: 'absolute'
        , top: 0
        , left: 0
        , width: '100%'}}
        > 
        Contacts App
        </div>
    );
};

export default Contacts;