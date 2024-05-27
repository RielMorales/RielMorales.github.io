import PageHeader from "../components/PageHeader";
import Product from "../components/Product";
import Cart from "../components/Cart";

export default function HomePage(props) {
    // console.log(props.menuData[2])
    let navMenus = props.menuData;
    let products = navMenus[1];
    let productTotal = 0;
    let i = 0;
    while (i < props.menuData[3].length){
        productTotal = productTotal + props.menuData[3][i].qty
        i = i + 1;
    }
    return (
        <div className="page">
            <PageHeader data={navMenus[0]} />
            <div className="HomePageBody">
                <div className="products-container">
                    <div className="products">
                        {
                            products.map((product) => {
                                return (
                                    <Product key={product.id} data={[product, props.menuData[2], props.menuData[3]]} />
                                )
                            })
                        }
                    </div>
                </div>

                <div className="cart-container">
                    <div className="cart">
                        <h3>Shopping Cart: {productTotal}</h3>
                        
                        <div className="cart-list">
                            {
                                (() => {
                                    if (props.menuData[3].length == 0){
                                        return <h3 className="no-products">There is no product in cart.</h3>
                                    } else {
                                        return (
                                            props.menuData[3].map((cart, index) => {
                                                return (
                                                    <Cart key={index} data={cart} />                
                                                )
                                            })
                                        )
                                    }
                                })()
                            }
                        </div>
                        {/* {
                            props.menuData[3].map((cart, index) => {
                                return (
                                    <Cart key={index} data={cart} />                    
                                )
                            })
                        } */}

                    </div>
                </div>
            </div>
        </div>
    );
}