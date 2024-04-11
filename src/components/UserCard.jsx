import { useState } from "react"

function UserCard(props) {
    const username = props.username
    const age = props.age
    const position = props.position

    const [freedays, addFreeDay] = useState(props.freedays);
    const [favorite, setFavorite] = useState(props.favorite);

    function addFree() {
        addFreeDay(() => {
            return freedays + 1
        })
    }

    function addFavorite(prev) {
        setFavorite(function(prev) {
            return !prev;
        })
    }

    return (
        <>
            <div className="userCard">
                {favorite && ( <img className="favorite" src="star.png" alt="star" /> )}
                <h4>{username}</h4>
                <p>Age: {age}</p>
                <p>Position: {position}</p>
                <p>Free Days: {freedays}</p>
                <p>
                    <button onClick={addFree}>Add Free Day</button>
                    <button onClick={addFavorite}>Favorite</button>
                </p>
            </div>
        </>
    )
}

export default UserCard;