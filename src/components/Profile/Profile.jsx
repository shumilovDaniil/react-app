import profileImg from '../../img/profile-img.jpg';
import profileStyle from './Profile.module.css';

// COMPONENTS =>
import CommentsList from './CommentsList/CommentsList';

function Profile(props) {

    let CommentElements = props.CommentsData.map(c => <CommentsList name={c.name} avatar={c.avatar} message={c.message}/>);

    console.log(props.CommentsData);

    return (
        <main className={profileStyle.profile}>
            <strong className={profileStyle.section_title}>Profile</strong>
            <h1>Kendl Johnson</h1>
            <img src='https://pbs.twimg.com/profile_images/1531766746/Kendl_Johnson.jpg' alt={'Img description'}/>
            <div className={profileStyle.comments}>
                <div className={profileStyle.title}>Send your comments here:</div>
                <div className={profileStyle.form}>
                    <textarea className={profileStyle.textarea} cols="5" rows="4"></textarea>
                    <button className={profileStyle.button}>Send</button>
                </div>
                {CommentElements}
            </div>
        </main>
    );
}

export default Profile;