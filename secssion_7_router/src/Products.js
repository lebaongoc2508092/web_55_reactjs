import { Link, Outlet, useSearchParams } from 'react-router-dom';
const Products = () => {
    const [query, setQuery] = useSearchParams()
    console.log(query.get("q"))
    return (
        <div> 
            <ol>
                <li>
                    <Link to='/products/1'>Products 1</Link>
                </li>
                <li>
                    <Link to='/products/2'>Products 2</Link>
                </li>
            </ol>
            <Outlet />
        </div>
    );
};

export default Products;