function test37(x) 
{
  if (x % 3 == 0 || x % 7 == 0) 
  {
    return true;
  } 
  else {
    return false;
  }
}

alert(test37(12));
alert(test37(14));
alert(test37(10));
alert(test37(11));
