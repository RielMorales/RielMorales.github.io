import PageHeader from "../components/PageHeader";
import Product from "../components/Product";
import { pushcart } from "../App";

export default function HomePage(props) {
    let navMenus = props.menuData;
    let products = navMenus[1];
    return (
        <div className="page">
            <PageHeader data={navMenus[0]} />
            <div className="HomePageBody">
                {
                    products.map((product) => {
                        return (
                            <div className="all-products" key={product.id}>
                                <Product>{ product }</Product>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
}