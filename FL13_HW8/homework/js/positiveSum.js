function arraySum(euros) {
  
  let result = euros.filter(function(elem) {
	if (elem >= 0) {
		return true;
	} else {
		return false;
	}
});
  const sum = result.reduce((total, amount) => total + amount);
  return sum;
}
arraySum([0, -3, 5, 7]);