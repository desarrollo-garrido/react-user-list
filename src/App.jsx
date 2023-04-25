import UsersList from './components/UsersList';

const USERS = [
	{
		name: 'John Wayne',
		active: true,
		role: 'teacher'
	},
	{
		name: 'Harrison Ford',
		active: true,
		role: 'student'
	},
	{
		name: 'Miguel Indurain',
		active: true,
		role: 'developer'
	},
	{
		name: 'Lucas Greenhandled',
		active: false,
		role: 'student'
	}
];
function App() {
	return (
		<UsersList users={[]}>
			<h1>Listado de Usuarios</h1>
		</UsersList>
	);
}
export default App;
