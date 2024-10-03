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

    
    
}