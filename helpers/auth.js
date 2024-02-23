function isAuthorized(userRole, pageRole) {
	if (userRole === 'manager') {
		return pageRole !== 'customer';
	}
	if (userRole === 'employee') {
		return pageRole === 'employee';
	}
	if (userRole === 'customer') {
		return pageRole === 'customer';
	}
}

export default isAuthorized;
