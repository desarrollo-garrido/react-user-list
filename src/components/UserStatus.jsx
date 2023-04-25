import style from './UserStatus.module.css';

function UserStatus({ active }) {
	// Definimos una className para el role (active = green, inactive = red)
	const activeClassName = active ? style.active : style.inactive;

	return (
		<div className={style.status}>
			<span className={activeClassName}>{active ? 'Activo' : 'Inactivo'}</span>
		</div>
	);
}

export default UserStatus;
