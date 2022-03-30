function test50(x, y) 
{
  return ((x == 50 || y == 50) || (x + y == 50));
}
alert(test50(50, 50))
alert(test50(20, 50))
alert(test50(20, 20))
alert(test50(20, 30))
