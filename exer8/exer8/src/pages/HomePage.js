import PageHeader from "../components/PageHeader";
import Product from "../components/Product";

export default function HomePage(props) {
    let navMenus = props.menuData;
    return (
        <div className="page">
            <PageHeader>{navMenus[0]}</PageHeader>
            {/* <body>Hello World</body> */}
            <div className="HomePageBody">
                {/* {console.log("Body Content")}
                {console.log(navMenus[1])} */}
                {
                    navMenus[1].map((product) => {
                        return (
                            <Product key={product.id}>{ product }</Product>
                        )
                    })
                }
            </div>
        </div>
    );
}