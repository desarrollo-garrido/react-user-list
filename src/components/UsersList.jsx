import UserRow from './UserRow';
function UsersList({ users, children }) {
	const usersRendered = users.map(user => <UserRow key={user.name} {...user} />);
	return (
		<div className=''>
			{children}
			{usersRendered}
		</div>
	);
}

export default UsersList;
