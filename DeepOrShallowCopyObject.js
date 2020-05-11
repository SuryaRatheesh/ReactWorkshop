//Deep or shallow copy using object
let sampleObject = {
    string: 'Test',
    number: 123456,
    date: new Date('1999-12-31T23:59:59')
  }

  let shallowcopy = Object.assign({}, sampleObject); //shallow copy of abject
  
  let deepcopy = JSON.parse(JSON.stringify(sampleObject)) // deep copy of object

  sampleObject.name = "newadded";

  console.log(sampleObject)
  console.log(shallowcopy) 
  console.log(deepcopy) 
  
