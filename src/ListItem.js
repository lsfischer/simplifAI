import './styles/SideBar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function ListItem(props) {
    return (
        <li> <FontAwesomeIcon icon={props.icon}/> {props.name}</li>
    );
}

export default ListItem;
