function remove_character(str, char_pos) 
 {
  part1 = str.substring(0, char_pos);
  part2 = str.substring(char_pos + 1, str.length);
  return (part1 + part2);
 }

alert(remove_character("Python",0));
alert(remove_character("Python",3));
alert(remove_character("Python",5));
