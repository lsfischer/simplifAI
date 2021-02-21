import './styles/SideBar.css';
import ListItem from './ListItem.js';

function SideBar() {
    return (
        <div className='SideBar'>
            <div className='PhotoDiv'>
                <div className='UserPhoto'></div>
            </div>

            <div className='SideMenu'> 
                <ul>
                   <ListItem icon='blabla' name="Expenses"/>
                   <ListItem icon='blabla' name="Travel"/>
                   <ListItem icon='blabla' name="Stormy"/>
                   <ListItem icon='blabla' name="Health"/>
                   <ListItem icon='blabla' name="Food"/>
                </ul>

            </div>
        </div>
    );
}

export default SideBar;
