import { FunctionComponent, useMemo, useState } from 'react';
import User from './User';
import '../../App.css';

const getRandomYear = (min: number, max: number) => {
    return Math.floor(Math.random() * (max - min) + min)
}

const getRandomFi = (min: number = 0, max: number = 3) => {
    const names = ['Bill', 'Scot', 'Garry'];
    const surnames = ['Ivanov', 'Petrov', 'Sidorov'];

    return {
        name: names[Math.floor(Math.random() * (max - min) + min)],
        surname: surnames[Math.floor(Math.random() * (max - min) + min)]
    }
}

interface Props {
    initialVisible?: boolean
}

const userList = {
    title: "Список пользователей",
    users: [
        {
            name: getRandomFi().name,
            surname: getRandomFi().surname,
            years: getRandomYear(10, 50),
            date: "03/02/1999",
        },
        {
            name: getRandomFi().name,
            surname: getRandomFi().surname,
            years: getRandomYear(10, 50),
            date: "11/08/1990"
        },
        {
            name: getRandomFi().name,
            surname: getRandomFi().surname,
            years: getRandomYear(10, 50),
            date: "07/05/1988"
        }
    ]
}



const UserList: FunctionComponent<Props> = ({ initialVisible = true }) => {
    const [visible, setVisible] = useState(initialVisible)
    const [filter, setFilter] = useState("");

    let memo = useMemo(()=> {
        return userList.users.filter((user) => user.name.toLowerCase().includes(filter.toLowerCase()));
    },[filter])

    const buttonHandler = () => {
        setVisible(prev => !prev)
    }

    return (
        <>
            <div className={"user_wrapper"}>
                <h2>Задание : 1</h2>
                <button className={"user__btn"} onClick={buttonHandler}>{visible ? "Скрыть" : "Показать"}</button>
                <input value={filter} onChange={({ target: { value } }) => {
                    setFilter(value)
                }}/>
                {visible &&
                    <ul className="user__list">
                        {memo.map((item) =>
                            <User date={item.date} years={item.years} surname={item.surname} name={item.name} key={Math.random()} />
                        )}
                    </ul>
                }
            </div>
        </>
    )
}

export default UserList;


