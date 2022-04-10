import { FunctionComponent } from 'react';
import { UserProps } from '../../interfaces/user-props.interface';

const User: FunctionComponent<UserProps> = ({date, name, surname, years}) => {
    return (
        <>
            <li className="user__item">
                Имя: {name}
                <br />
                Фамилия: {surname}
                <br />
                Возраст: {years}
                <br />
                Дата рождения: {date}
            </li>
        </>
    )
}

export default User;


