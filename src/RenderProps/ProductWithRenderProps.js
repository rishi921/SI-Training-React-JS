import axios from 'axios';
import { Children, useEffect, useState } from "react"

function ProductListTable({ productList }) {
    const getTableRows = () => {
        return productList?.map(p => <tr key={p.id}>
            <td><img style={{ height: '50px', width: '30px' }} src={p.image} /></td><td>{p.title}</td><td>{p.price}</td><td>{p.description}</td></tr>)
    }

    return <table className="table table-striped table-bordered">
        <thead><tr><th>Image</th><th>Title</th><th>Price</th><th>Description</th></tr></thead>
        <tbody>{getTableRows()}</tbody>
    </table>
}

function ProductLoader({ children }) {
    let url = `https://fakestoreapi.com/products`
    const [productList, setProductList] = useState([])
    const [error, setError] = useState(null)

    useEffect(() => async () => {
        try {
            let { data } = await axios.get(url)
            setProductList(data)
        }
        catch (err) {
            setError(err)
        }
    }, [])
    return children(productList, error)
}

export default function ProductLoaderContainer() {
    return <>
        <h1 className='text-center'>Products List</h1>
        <ProductLoader>
            {(productList, error) => <ProductListTable productList={productList} error={error} />}
        </ProductLoader>
    </>
}