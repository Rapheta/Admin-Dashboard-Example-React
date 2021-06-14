import React, {useState, useEffect} from 'react'
import './product.css'
import { Link, useLocation } from 'react-router-dom'
import Chart from '../../components/chart/Chart'
import { productData } from '../../dummyData'
import { Publish } from '@material-ui/icons'

export default function Product() {

    const location = useLocation();

    const[image, setImage] = useState('');
    const[name, setName] = useState('');
    const[id, setId] = useState('');
    const[stock, setStock] = useState('');
    const[status, setStatus] = useState('');
    const[price, setPrice] = useState('');

    useEffect(()=>{
        setImage(location.state.params.img);
        setName(location.state.params.name);
        setId(location.state.params.id);
        setStock(location.state.params.stock);
        setStatus(location.state.params.status);
        setPrice(location.state.params.price);
        location.state=undefined;
    }, [location])

    return (
        <div className="product">
            <div className="productTitleContainer">
                <h1 className="productTitle">Product</h1>
                <Link to="/newProduct">
                    <button className="productAddButton">Create</button>
                </Link>
            </div>
            <div className="productTop">
                <div className="productTopLeft">
                    <Chart data={productData} title="Sales Performance" grid dataKey="Sales"/>
                </div>
                <div className="productTopRight">
                    <div className="productInfoTop">
                        <img src={image} alt="" className="productInfoImage" />
                        <span className="productName">{name}</span>
                    </div>
                    <div className="productInfoBottom">
                        <div className="productInfoItem">
                            <span className="productInfoKey">id:</span>
                            <span className="productInfoValue">{id}</span>
                        </div>
                        <div className="productInfoItem">
                            <span className="productInfoKey">sales:</span>
                            <span className="productInfoValue">{stock}</span>
                        </div>
                        <div className="productInfoItem">
                            <span className="productInfoKey">active:</span>
                            <span className="productInfoValue">{status}</span>
                        </div>
                        <div className="productInfoItem">
                            <span className="productInfoKey">Price:</span>
                            <span className="productInfoValue">{price}</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="productBottom">
                <form className="productForm">
                    <div className="productFormLeft">
                        <label>Product Name</label>
                        <input type="text" placeholder="Apple Airpod"/>
                        <label>In Stock</label>
                        <select name="inStock" id="idStock">
                            <option value="yes">Yes</option>
                            <option value="no">No</option>
                        </select>
                        <label>Active</label>
                        <select name="active" id="idActive">
                            <option value="yes">Yes</option>
                            <option value="no">No</option>
                        </select>
                    </div>
                    <div className="productFormRight">
                        <div className="productUpload">
                            <img src={image} alt="" className="productUploadImg" />
                            <label htmlFor="file">
                                <Publish className="productUpdateIcon"/>
                            </label>
                            <input type="file" id="file" style={{display:"none"}}/>
                        </div>
                        <button className="productButton">Update</button>
                    </div>
                </form>
            </div>
        </div>
    )
}
