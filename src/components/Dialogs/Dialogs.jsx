import dialogsStyle from './Dialogs.module.css';
import {NavLink} from 'react-router-dom';

// COMPONENTS =>
import DialogsItem from './DialogsItem/DialogsItem.jsx'
import ChatItem from './ChatItem/ChatItem.jsx'

// <= FUNCTIONS HAVE BEEN MOVED TO OTHER FOLDERS =>
// function DialogsItem(props) {
//     return (
//         <div className={dialogsStyle.message}>
//             <NavLink to={'/dialogs/' + props.id}>{props.name}</NavLink>
//         </div>
//     );
// }
//
// function ChatItem(props) {
//     return (
//         <div className={dialogsStyle.chat_item}>
//             <div className={dialogsStyle.chat_user}>{props.name}</div>
//             <div className={dialogsStyle.chat_content}>{props.message}</div>
//         </div>
//     );
// }

function Dialogs(props) {
    // перебор мэпом =>
    let ChatElements = props.ChatData.map(c => <ChatItem name={c.name} message={c.message}/>);
    let DialogsElements = props.DialogsData.map(d => <DialogsItem name={d.name} id={d.id}/>);

    return (
        <div>
            <div className={dialogsStyle.section_title}>Dialogs block</div>
            <div className={dialogsStyle.wrapper}>
                {DialogsElements}
                {ChatElements}
            </div>
        </div>
    );
}

export default Dialogs;