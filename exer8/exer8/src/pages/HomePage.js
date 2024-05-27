import PageHeader from "../components/PageHeader";

export default function HomePage(props) {
    let navMenus = props.menuData;
    return (
        <div className="page">
            <PageHeader>{navMenus}</PageHeader>
            <body>Hello World</body>
        </div>
    );
}