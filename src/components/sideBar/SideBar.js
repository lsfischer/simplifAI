import '../../styles/SideBar.css';

import ListItem from './ListItem.js';

function SideBar() {
    return (
        <div className='SideBar'>
            <div className='PhotoDiv'>
                <div className='UserPhoto'></div>
            </div>

            <div className='SideMenu'> 
                <ul>
                   <ListItem icon={['fas', 'user']} name="Profile"/>
                   <ListItem icon={['fas', 'wallet']} name="Expenses"/>
                   <ListItem icon={['fas', 'globe-europe']} name="Travel"/>
                   <ListItem icon={['fas', 'heartbeat']} name="Health"/>
                   <ListItem icon={['fas', 'cogs']} name="Configurations"/>
                </ul>

            </div>
        </div>
    );
}

export default SideBar;
