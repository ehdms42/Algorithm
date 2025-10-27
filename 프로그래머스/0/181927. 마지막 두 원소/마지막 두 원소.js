function solution(num_list) {
  let last = num_list[num_list.length - 1];
  let before = num_list[num_list.length - 2];
  
  if (last > before) num_list.push(last - before);
  else num_list.push(last * 2);
  
  return num_list;
}