import { useState } from "react";

const AddProductForm = ({ onSubmit }) => {
    const [product, setProduct] = useState({
        productId: '',
        productName: '',
        productCategory: '',
        supplier: '',
        price: '',
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setProduct({ ...product, [name]: value });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        onSubmit(product);
        setProduct({
            productId: '',
            productName: '',
            productCategory: '',
            supplier: '',
            price: '',
        });
    };

    return (
        <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex justify-between	">
            <div className="mb-4">
                <label className="block text-gray-700 font-bold mb-2" htmlFor="productName">
                    Product Name
                </label>
                <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="productName"
                    type="text"
                    name="productName"
                    value={product.productName}
                    onChange={handleChange}
                />
            </div>
            <div className="mb-4">
                <label className="block text-gray-700 font-bold mb-2" htmlFor="productCategory">
                    Product Category
                </label>
                <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="productCategory"
                    type="text"
                    name="productCategory"
                    value={product.productCategory}
                    onChange={handleChange}
                />
            </div>
            <div className="mb-4">
                <label className="block text-gray-700 font-bold mb-2" htmlFor="supplier">
                    Supplier
                </label>
                <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="supplier"
                    type="text"
                    name="supplier"
                    value={product.supplier}
                    onChange={handleChange}
                />
            </div>
            <div className="mb-4">
                <label className="block text-gray-700 font-bold mb-2" htmlFor="price">
                    Price
                </label>
                <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="price"
                    type="text"
                    name="price"
                    value={product.price}
                    onChange={handleChange}
                />
            </div>
            <div className="flex items-center justify-between">
                <button
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    type="submit"
                >
                    Add Product
                </button>
            </div>
        </form>
    );
};

export default AddProductForm