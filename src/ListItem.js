import './styles/SideBar.css';

function ListItem(props) {
    return (
        <li> {props.icon} {props.name}</li>
    );
}

export default ListItem;
