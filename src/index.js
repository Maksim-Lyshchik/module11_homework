function countDown(n) {
	if (typeof n != "number") return "Значение введено не верно! Введите число";
	if (n < 1) return "Введите число больше 1"
	for (let i = n; i >= 1; --i) {
  	return(i);
  } 
}

module.exports = countDown;
