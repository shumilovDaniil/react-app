import dialogsStyle from './../Dialogs.module.css';


function Chat(props) {
    return (
        <div className={dialogsStyle.chat}>
            {props.elements}
        </div>
    );
}

export default Chat;