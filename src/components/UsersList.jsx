import UserRow from './UserRow';
import style from './UsersList.module.css';

function UsersList({ users, children }) {
	const usersRendered =
		users.length > 0 ? (
			users.map(user => <UserRow key={user.name} {...user} />)
		) : (
			<p>No hay usuarios que mostrar</p>
		);
	return (
		<div className={style.list}>
			{children}
			{usersRendered}
		</div>
	);
}

export default UsersList;
