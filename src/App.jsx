import {useState} from 'react'
import './App.css'
import Navigation from "./components/Navigation.jsx";
import Body from "./components/Body.jsx";

function App() {
    const [user, setUser] = useState({
        avatar: 'https://gravatar.com/avatar/000?d=monsterid',
        name: 'Monster'
    })

    const [stats, setStats] = useState({
        followers: 100,
        following: 50
    })

    // Функция для изменения аватара
    const changeAvatar = (newAvatarUrl) => {
        setUser(prevUser => ({
            ...prevUser,
            avatar: newAvatarUrl
        }));
    }

    return (
        <div className={'app'}>
            {/* Передаем функцию в навигацию (верхний правый аватар) */}
            <Navigation user={user} changeAvatar={changeAvatar}/>
            {/* Передаем функцию в боди (левый аватар в сайдбаре) */}
            <Body user={user} stats={stats} changeAvatar={changeAvatar}/>
        </div>
    )
}

export default App