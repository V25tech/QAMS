export interface CustomerRegistration {
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
    initiateBy: string
    createdDate: string | Date
};

