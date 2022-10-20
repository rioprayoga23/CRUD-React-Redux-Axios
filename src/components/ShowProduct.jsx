import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  deleteProducts,
  getProducts,
  productSelector,
} from "../features/ProductSlice";
import { Link } from "react-router-dom";

const ShowProduct = () => {
  const dispatch = useDispatch();
  const products = useSelector(productSelector.selectAll);

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  return (
    <div className="box mt-5">
      <Link to={"/add"} className="button is-success mb-5">
        Add Product
      </Link>
      <table className="table is-striped is-fullwidth">
        <thead>
          <th>No</th>
          <th>Title</th>
          <th>Price</th>
          <th>Actions</th>
        </thead>
        <tbody>
          {products.map((product, index) => (
            <tr key={product.id}>
              <td>{index + 1}</td>
              <td>{product.title}</td>
              <td>{product.price}</td>
              <td>
                <Link
                  to={`/edit/${product.id}`}
                  className="button is-info is-small"
                >
                  Edit
                </Link>
                <button
                  onClick={() => dispatch(deleteProducts(product.id))}
                  className="button is-danger is-small"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ShowProduct;
