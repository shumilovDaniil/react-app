import dialogsStyle from './../Dialogs.module.css';


function Message(props) {
    return (
        <div className={dialogsStyle.messages}>
            {props.elements}
        </div>
    );
}

export default Message;