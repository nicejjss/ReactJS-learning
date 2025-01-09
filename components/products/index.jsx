import ProductItem from "./components/product-item";

function ProductList({name, city, listProduct}) {
  return (
    <div>
      <h3>Product List</h3>
      {/* <ProductItem /> */}
      <ul>
      {
        listProduct.map((item, index) => {
            return (
              <ProductItem item={item}  key={`item-${index}`} itemID={`item-${index}`}/>
            );
        })
      }
      </ul>
    </div>
  );
};

export default ProductList;