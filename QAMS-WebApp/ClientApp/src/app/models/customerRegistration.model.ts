export interface CustomerRegistration {
    id:any,
    name:string
    uniqueCode:string
    contactName:string
    address:string
    city:string
    state:string
    country:string
    zipCode:string,
    fax:string
    email:string
    remarks:string
};

export interface Customers {
    id: string
    name: string
    createdBy: string
    createdDate: string | Date
};

