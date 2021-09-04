import dialogsStyle from './Dialogs.module.css';
import {NavLink} from 'react-router-dom';

import Chat from './Chat/Chat.jsx'
import Message from './Message/Message.jsx'


function DialogsItem(props) {
    return (
        <div className={dialogsStyle.message}>
            <NavLink to={'/dialogs/' + props.id}>{props.name}</NavLink>
        </div>
    );
}

function ChatItem(props) {
    return (
        <div className={dialogsStyle.chat_item}>
            <div className={dialogsStyle.chat_user}>{props.name}</div>
            <div className={dialogsStyle.chat_content}>{props.message}</div>
        </div>
    );
}

function Dialogs(props) {
    // перебор мэпом =>
    let ChatElements = props.ChatData.map(c => <ChatItem name={c.name} message={c.message}/>);
    let DialogsElements = props.DialogsData.map(d => <DialogsItem name={d.name} id={d.id}/>);

    return (
        <div>
            <div className={dialogsStyle.section_title}>Dialogs block</div>
            <div className={dialogsStyle.wrapper}>
                <Message elements={DialogsElements}/>
                <Chat elements={ChatElements}/>
            </div>
        </div>
    );
}

export default Dialogs;