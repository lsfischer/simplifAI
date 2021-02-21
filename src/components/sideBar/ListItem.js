import '../../styles/ListItem.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function ListItem(props) {
    return (
        <li> 
            <div className='ListItemIcon'>
                <FontAwesomeIcon icon={props.icon}/> 
            </div>
            <div className='ListItemName'>
                {props.name}
            </div></li>
    );
}

export default ListItem;
