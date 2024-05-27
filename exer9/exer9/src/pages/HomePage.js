import PageHeader from "../components/PageHeader";
import Product from "../components/Product";

export default function HomePage(props) {
    // console.log(props.menuData[2])
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
                                <Product data={[product, props.menuData[2], props.menuData[3]]} />
                            </div>
                        )
                    })
                }
                <div>
                    {
                        props.menuData[3].map((cart, index) => {
                            return (
                                <li key={index}>{cart.name}</li>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    );
}