import Item from './Item/Item';

function CommentsList(props) {
    return (
        <div>
            <Item name={props.name} avatar={props.avatar} message={props.message}/>
        </div>
    );
}

export default CommentsList;


// name
// avatar (img src)
// message