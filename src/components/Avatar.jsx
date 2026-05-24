const Avatar = ({size, user, changeAvatar}) => {

    const handleClick = () => {
        const newUrl = prompt('Enter the URL of the new avatar:');
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
            style={{ cursor: 'pointer' }}
        />
    )
}

export default Avatar;