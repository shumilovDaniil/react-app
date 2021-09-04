import dialogsStyle from './../Dialogs.module.css';
import {NavLink} from 'react-router-dom';


function DialogsItem(props) {
    return (
        <div className={dialogsStyle.message}>
            <NavLink to={'/dialogs/' + props.id}>{props.name}</NavLink>
        </div>
    );
}


export default DialogsItem;