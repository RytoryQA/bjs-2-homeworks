function compareArrays(arr1, arr2) {
	if (arr1.length === arr2.length && arr1.every((item, index) => item === arr2[index])) {
		return true;
	}
	return false;
}

function getUsersNamesInAgeRange(users, gender) {

	let result = users.filter(user => user.gender === gender).map(user => user.age).reduce((acc, user, index, users) => {
		acc += user;
		if (index === users.length - 1) {
			let avg = acc / users.length;
			return avg;
		}
		return acc;
	}, 0)
	return result;
}