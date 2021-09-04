import ItemStyle from './Item.module.css';

function Item(props) {
    return (
        <div className={ItemStyle.item}>
                {/* AVATAR => */}
                <div className={ItemStyle.avatar}>
                    <img src={props.avatar} alt="Image description"/>
                </div>

            <div className={ItemStyle.content}>
                {/* NAME => */}
                <p className={ItemStyle.name}>{props.name}</p>

                {/* MESSAGE => */}
                <div className={ItemStyle.content}>{props.message}</div>
            </div>
        </div>
    );
}

export default Item;