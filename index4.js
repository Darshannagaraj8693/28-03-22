function testhundred(x) {
  return ((Math.abs(100 - x) <= 20) ||
	 (Math.abs(400 - x) <= 20));
}

alert(testhundred(10));
alert(testhundred(90));
alert(testhundred(99));
alert(testhundred(199));
alert(testhundred(200));
