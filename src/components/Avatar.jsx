const Avatar = ({size, user, changeAvatar}) => {

    const handleClick = () => {
        const newUrl = prompt('Введите URL нового аватара:');
        // Проверяем, что юзер не нажал "Отмена" и не оставил строку пустой
        if (newUrl && newUrl.trim() !== '') {
            changeAvatar(newUrl.trim());
        }
    }

    return (
        <img
            className={`user-avatar ${size ?? ''}`}
            src={user.avatar}
            alt={user.name}
            onClick={handleClick}
            style={{ cursor: 'pointer' }} // Чтобы при наведении был "пальчик"
        />
    )
}

export default Avatar;