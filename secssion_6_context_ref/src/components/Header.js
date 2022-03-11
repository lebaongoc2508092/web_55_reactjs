import MenuBar  from "./MenuBar";
const Header = () => {
    return (
        <div className=" flex justify-between items-center border">
            <h3>BookStore</h3>
            <MenuBar />
        </div>
    );
};

export default Header;