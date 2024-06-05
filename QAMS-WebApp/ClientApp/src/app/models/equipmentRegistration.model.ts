export interface EquipmentRegistration {
    equipmentName:string,
    equipmentId:string,
    make:string,
    model:string,
    serialNumber:string,
    installedLocation:string,
    department:string,
    installedOn:string |Date,
    warranty:string | Date,
    suppliedBy:string,
    software:string
};

export interface Equipments{
    id:string,
    name:string,
    make:string,
    model:string,
    department:string,
    createdDate:string |Date,
    initiatedBy:string
   
};






  
