import Title from './components/Title';
import UsersList from './components/UsersList';

const USERS = [
	{
		name: 'John Wayne',
		active: 'Active',
		role: 'Teacher'
	},
	{
		name: 'Harrison Ford',
		active: 'Active',
		role: 'Developer'
	},
	{
		name: 'Miguel Indurain',
		active: 'Active',
		role: 'Developer'
	}
];
function App() {
	return (
		<UsersList users={USERS}>
			<Title>Listado de putos usuarios</Title>
		</UsersList>
	);
}
export default App;
