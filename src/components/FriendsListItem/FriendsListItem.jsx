import css from './FriendsListItem.module.css'
import clsx from 'clsx';

const FriendListItem = ({friends}) => {
    const {avatar,  name, isOnline} = friends;
    const isActive = clsx(css.status,  isOnline?  css.green : css.red)

    return(
    <div>
     <img src={avatar} alt="Avatar" width="48" />
     <p>{name}</p>
     <p className={isActive}>{isOnline? "Online" : "Offline"}</p>
    </div>)

}


export default FriendListItem;