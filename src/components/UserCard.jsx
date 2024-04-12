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
            <div className="bg-white rounded-xl shadow-lg p-6 shrink-0 relative">
                {favorite && ( <img className="absolute top-4 right-4 w-7 h-7" src="../board-of-fame/star.png" alt="star" /> )}
                <h4 className="text-lg font-bold text-center mt-2">{username}</h4>
                <p className="text-gray-500 text-center">Age: {age}</p>
                <p className="text-gray-500 text-center">Position: {position}</p>
                <p className="text-gray-500 text-center">Free Days: {freedays}</p>
                <p>
                    <button onClick={addFree}>Add Free Day</button>
                    <button onClick={addFavorite}>Favorite</button>
                </p>
            </div>
        </>
    )
}

export default UserCard;