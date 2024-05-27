import PageHeader from "../components/PageHeader";
import Product from "../components/Product";

export default function HomePage(props) {
    let navMenus = props.menuData;
    let products = navMenus[1];
    let cart = navMenus[2];
    return (
        <div className="page">
            <PageHeader>{navMenus[0]}</PageHeader>
            <div className="HomePageBody">
                {
                    products.map((product) => {
                        return (
                            <div className="all-products" key={product.id}>
                                <Product>{ [product, cart] }</Product>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
}