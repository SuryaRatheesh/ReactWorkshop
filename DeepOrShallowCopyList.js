// Deep copy and shallow copy using list
const originalList=[
    { date: 'date1', reading: 3, id: 20055 },
    { date: 'date2', reading: 5, id: 20053 }
];
  
const shallowcopy = [...originalList]; //shallow copy using spread operator
const deepcopy = JSON.stringify(originalList); // deep copy 
originalList.push( { date: 'date3', reading: 6, id: 45652 });

console.log(originalList)    
// shallow copy 
console.log(shallowcopy)   
      
// deep copy 
console.log(deepcopy) 