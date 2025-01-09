import './item.css';
import stytles from './item.module.css';

function ButtonComponent() {
    return (<button>Click</button>);
}

function abc() {
    console.log('abc');
    return null; // Return null to avoid rendering this component
}

const ProductItem = ({ item, itemID }) => {
    abc(); // Call abc function
    if (itemID === 'item-1') {
        return ''; // Skip rendering this item
    }
    return (
        <div className="product-item">
            <h3 className='name'>name: {item.name}</h3>
            {
                // Check if itemID is item-2 so that change the price color
                itemID === 'item-2' ? (
                    <p className={stytles.priceHigh}>price: {item.price}</p>
                ) : (
                    <p className="price">price: {item.price}</p>
                )
            }
            <p>id: {item.id}</p>
            <ButtonComponent />
        </div>
    );
};

export default ProductItem;