function UserRow({ name, active, role }) {
	return (
		<div className=''>
			<span className=''>{name}</span>
			<span className=''>{active}</span>
			<span className=''>{role}</span>
		</div>
	);
}

export default UserRow;
