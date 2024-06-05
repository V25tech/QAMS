export interface BatchLotParticulars {
      batchType:string
      productMaterial:string
      batchLotNo:string
      batchLotSize:string
      manufacturingDate:string
      expiryDate:string
      arno:string
      otherDetails:string
  };

  export interface BatchLot {
       
    batchNoLotNo: string,
    productMaterial:string,
    arNo: string,
    initiatedBy: string,
    date: string|Date
    
};

