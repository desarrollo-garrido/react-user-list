import UserRole from './UserRole';
import UserStatus from './UserStatus';
import style from './userRow.module.css';
function UserRow({ name, active, role }) {
	return (
		<div className={style.wrapper}>
			<div className={style.name}>
				<span>{name}</span>
			</div>
			<UserStatus active={active} />
			<UserRole role={role} />
		</div>
	);
}

export default UserRow;
