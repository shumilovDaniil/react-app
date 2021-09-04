import dialogsStyle from './../Dialogs.module.css';
import {NavLink} from 'react-router-dom';


function ChatItem(props) {
    return (
        <div className={dialogsStyle.chat_item}>
            <div className={dialogsStyle.chat_user}>{props.name}</div>
            <div className={dialogsStyle.chat_content}>{props.message}</div>
        </div>
    );
}

export default ChatItem;