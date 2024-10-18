export const getUserRole =(roleCode)=>{
    if(roleCode == 1){
        return "Root"
    }

    if(roleCode == 2){
        return "Nurse"
    }

    if(roleCode == 3){
        return "Admin"
    }

    return "None"

}

export const getLastWord =(words)=> {
    var n = words.split(" ");
    return n[n.length - 1];

}

export const patientExists =(array, id)=> {
    // Iterate through each object in the array
    for (let i = 0; i < array.length; i++) {
      // Check if the object's id matches the given id
      if (array[i].birthID === id) {
        // If a match is found, return true
        return true;
      }
    }
  
    // If no match is found after iterating through the array, return false
    return false;
}

export const getSelectedUser =(array, id)=> {
    
    // Iterate through each object in the array
    for (let i = 0; i < array.length; i++) {
      // Check if the object's id matches the given id
      if (array[i].userID === id) {
        // If a match is found, return the match
        return array[i]
      }
    }
  
    // return results
    return null
}

export const getExistingPatient =(array, id)=> {
    
  // Iterate through each object in the array
  for (let i = 0; i < array.length; i++) {
    // Check if the object's id matches the given id
    if (array[i].birthID === id) {
      // If a match is found, return the match
      return array[i]
    }
  }

  // return results
  return null
}

export const getAccessState =(access)=>{
  if(access){
    return " *BLOCK SYSTEM ACCESS* "
  }
  return " *GRANT SYSTEM ACCESS* "

}

export const  mergeObjects =(obj1, obj2)=> {
  // Create a new object to store the combined properties
  const combinedObject = {};

  // Copy properties from obj1 to the combined object
  for (const property in obj1) {
    combinedObject[property] = obj1[property];
  }

  // Copy properties from obj2 to the combined object, overwriting any existing properties
  for (const property in obj2) {
    combinedObject[property] = obj2[property];
  }

  // Return the combined object
  return combinedObject;
}

export const getBeforeFirstComma=(str)=> {
  const index = str.indexOf(",");
  if (index !== -1) {
    return str.substring(0, index);
  } else {
    return str;
  }
}

export const  isNumeric = (str)=> {
  if (typeof str != "string") return false // we only process strings!  
    return !isNaN(str) && // use type coercion to parse the _entirety_ of the string (`parseFloat` alone does not do this)...
           !isNaN(parseFloat(str)) // ...and ensure strings of whitespace fail
}