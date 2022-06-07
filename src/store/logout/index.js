import { logout } from '../auth';

export default function Logout() {
	localStorage.removeItem('token');
	return logout();
}