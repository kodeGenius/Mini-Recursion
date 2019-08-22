//Mini recursion
const findGreaterNumber = (a, b) =>{
	let val = (a > b) ?
		`${a} is greater than ${b}` : 
                `${b} is greater than ${a}`
	return val;
};
console.log(mini (13, 67))
