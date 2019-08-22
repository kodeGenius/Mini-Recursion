//Mini recursion
const findGreaterNumber = (a, b) =>{
	let val = (a > b) ?
		`${a} is greater than ${b}` : 
                `${b} is greater than ${a}`
	return val;
};
console.log(findGreaterNumber (13, 67));
