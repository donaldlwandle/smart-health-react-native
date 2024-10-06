export const  removeObjectByPropertyValue =(array)=> {
    // Filter the array to keep only objects where the specified property value doesn't match the given value
    const filteredArray = array.filter(obj => obj["userRole"] !== 1);
  
    // Return the filtered array
    return filteredArray;
  }