import css from './Profile.module.css'

const Profile = ({name, tag, location, stats: {followers, views, likes,}}) => {
    return (
    <div className={css.profile}>
        <div className={css.profileContent}>
            <img
                src="https://cdn-icons-png.flaticon.com/512/2922/2922506.png"
                alt="User avatar"
                width={40}
            />
            <p className={css.title}>{name}</p>
            <p className={css.tag}>{tag}</p>
            <p className={css.location}>{location}</p>
        </div>

         <ul className={css.list}>
            <li className={css.listItem}>
                <span>Followers</span>
                <span>{followers}</span>
            </li>
            <li className={css.listItem}>
                <span>Views</span>
                <span>{views}</span>
            </li>
            <li className={css.listItem}>
                <span>Likes</span>
                <span>{likes}</span>
            </li>
        </ul>
    </div>

    )
}

export default Profile;