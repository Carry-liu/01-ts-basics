/* function getFirstElement(arr) {
    return arr[0];
  }
  
  getFirstElement([1, 2, 3]);           // 1
  getFirstElement(["a", "b", "c"]);     // "a"
  getFirstElement([true, false, true]); // true
  */
 
  function getFirstElement<T>(arr: T[]): T {
    return arr[0];
  }
  
  
  // явна типізація дженериків у викликах
  getFirstElement<number>([1, 2, 3]);           // 1
  getFirstElement<string>(["a", "b", "c"]);     // "a"
  getFirstElement<boolean>([true, false, true]); // true
  
  // Не дозволить змішані типи:
  getFirstElement<number>([1, 2, "3"]); 
  getFirstElement<string>(["a", "b", 3]); 
  
  // змішані типи:
  getFirstElement<number | string>([1, "2", 3]); 
  