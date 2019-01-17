const isEven = (a) =>{
	a-=2;
	if(a == 0) return true;
	else if(a == 1) return false;
	else if(a<0) return isEven(-a);
	else return isEven(a);
}
console.log(isEven(1002))