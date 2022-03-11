import { useParams } from "react-router-dom";
const ProductDetail = () => {
     const params = useParams()
     console.log(params)
    return (
        <div>ProductDetail with id = {params.id}</div>
    );
};

export default ProductDetail;