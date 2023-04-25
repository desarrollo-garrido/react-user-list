import style from './UserRole.module.css';
function UserRole({ role }) {
	// Ojo con esto, es como  un if pero se utiliza bastante. Lo he visto que lo
	// utiliza Midu en varios proyectos. En concreto (uno que me acuerdo), sustituyendo
	// al swith en un reducer para ver el action.
	const ROLE_STYLES = {
		teacher: ['Profesor', style.teacher],
		student: ['Alumno', style.student],
		other: ['Otros', style.other]
	};
	const [roleName, roleClassName] = ROLE_STYLES[role] || ROLE_STYLES.other;
	return (
		<div className={style.role}>
			<span className={roleClassName}>{roleName}</span>
		</div>
	);
}

export default UserRole;
