import FriendListItem from "../FriendsListItem/FriendsListItem";
import css from "./FriendList.module.css"

const FriendList = ({friends}) => {
 return (<ul className={css.list}>
    {friends.map((friends) => {
        return (
            <li key={friends.id} className={css.listItem}>
            <FriendListItem  friends = {friends}/>
        </li>
        )
    })}
 </ul>)
}



export default FriendList;