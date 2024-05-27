export default function NavMenu(props){
    let menu = props.data;
    return (
        <li key={menu.id} onClick={() => {console.log("Pressed "+menu.name)}}>
            <a href={menu.url}>
                {menu.name}
            </a>
        </li>
    )
}