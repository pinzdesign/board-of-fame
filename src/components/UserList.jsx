import UserCard from "./UserCard";

function UserList() {

    const users = [
        {
            "username": "John Cena",
            "age": 23,
            "position": "Frontend Developer",
            "freedays": 3,
            "favorite": true
        },
        {
            "username": "Brittany Smith",
            "age": 19,
            "position": "Intern",
            "freedays": 5,
            "favorite": false
        },
        {
            "username": "Bill Overbeck",
            "age": 29,
            "position": "Graphical Designer",
            "freedays": 4,
            "favorite": false
        },
    ]

    return (
        <>
        {
            users.map((item) => <UserCard username={item.username} age={item.age} position={item.position} freedays={item.freedays} favorite={item.favorite} />)
        }
        </>
    )
}

export default UserList;