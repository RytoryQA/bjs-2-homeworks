function compareArrays(arr1, arr2) {
	if (arr1.length === arr2.length && arr1.every((item, index) => item === arr2[index])) {
		return true;
	}
	return false;
}

function getUsersNamesInAgeRange(users, gender) {

	return users.filter(user => user.gender === gender)
		.map(user => user.age)
		.reduce((acc, age, index, users) => acc + age / users.length, 0);
}
