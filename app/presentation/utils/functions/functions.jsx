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