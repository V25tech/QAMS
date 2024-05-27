using System;

namespace QAMS.Entities.Common
{
    //public class RequestDetailsEntity
    //{
    //    public RequestDetailsEntity()
    //    {
    //    }
    //    private string documentdetailsField;

    //    private string packingdetailsField;

    //    private string softwaredetailsField;

    //    private string testingdetailsField;

    //    private string processdetailsField;

    //    private string otherdetailsField;

    //    private string productField;

    //    private string changerelatedtoField;
    //    public string ChangeRelatedTo
    //    {
    //        get
    //        {
    //            return changerelatedtoField;
    //        }
    //        set
    //        {
    //            changerelatedtoField = value;
    //        }
    //    }
    //    private int? batchorlotnumberField;
    //    public int? batchNoLotNo
    //    {
    //        get
    //        {
    //            return batchorlotnumberField;
    //        }
    //        set
    //        {
    //            batchorlotnumberField = value;
    //        }
    //    }

    //    private string batchorlotdetailField;
    //    public string BatchOrLotDetail
    //    {
    //        get
    //        {
    //            return batchorlotdetailField;
    //        }
    //        set
    //        {
    //            batchorlotdetailField = value;
    //        }
    //    }
    //    private string equipmentField;
    //    public string Equipment
    //    {
    //        get
    //        {
    //            return equipmentField;
    //        }
    //        set
    //        {
    //            equipmentField = value;
    //        }
    //    }
    //    public string DocumentDetails
    //    {
    //        get
    //        {
    //            return documentdetailsField;
    //        }
    //        set
    //        {
    //            documentdetailsField = value;
    //        }
    //    }
    //    private string customerField;
    //    public string customer
    //    {
    //        get
    //        {
    //            return customerField;
    //        }
    //        set
    //        {
    //            customerField = value;
    //        }
    //    }
    //    private string marketField;
    //    public string market
    //    {
    //        get
    //        {
    //            return marketField;
    //        }
    //        set
    //        {
    //            marketField = value;
    //        }
    //    }
    //    private string facilityutilitydetailsField;
    //    public string FacilityUtilityDetails
    //    {
    //        get
    //        {
    //            return facilityutilitydetailsField;
    //        }
    //        set
    //        {
    //            facilityutilitydetailsField = value;
    //        }
    //    }
    //    private string validationdetailsField;
    //    public string ValidationDetails
    //    {
    //        get
    //        {
    //            return validationdetailsField;
    //        }
    //        set
    //        {
    //            validationdetailsField = value;
    //        }
    //    }

    //    public string PackingDetails
    //    {
    //        get
    //        {
    //            return packingdetailsField;
    //        }
    //        set
    //        {
    //            packingdetailsField = value;
    //        }
    //    }
    //    //private DateTime targetDateofClosureField;
    //    //public DateTime targetDateofClosure
    //    //{
    //    //    get
    //    //    {
    //    //        return targetDateofClosureField;
    //    //    }
    //    //    set
    //    //    {
    //    //        targetDateofClosureField = value;
    //    //    }
    //    //}

    //    private string batchNoLotDetailsField;
    //    public string batchNoLotDetails
    //    {
    //        get
    //        {
    //            return batchNoLotDetailsField;
    //        }
    //        set
    //        {
    //            batchNoLotDetailsField = value;
    //        }
    //    }

    //    public string SoftwareDetails
    //    {
    //        get
    //        {
    //            return softwaredetailsField;
    //        }
    //        set
    //        {
    //            softwaredetailsField = value;
    //        }
    //    }

    //    public string TestingDetails
    //    {
    //        get
    //        {
    //            return testingdetailsField;
    //        }
    //        set
    //        {
    //            testingdetailsField = value;
    //        }
    //    }
    //    private string typeOfChangeField;
    //    public string typeOfChange
    //    {
    //        get
    //        {
    //            return typeOfChangeField;
    //        }
    //        set
    //        {
    //            typeOfChangeField = value;
    //        }
    //    }
    //    private string supplierserviceproviderdetailsField;
    //    public string SupplierServiceProviderDetails
    //    {
    //        get
    //        {
    //            return supplierserviceproviderdetailsField;
    //        }
    //        set
    //        {
    //            supplierserviceproviderdetailsField = value;
    //        }
    //    }

    //    public string ProcessDetails
    //    {
    //        get
    //        {
    //            return processdetailsField;
    //        }
    //        set
    //        {
    //            processdetailsField = value;
    //        }
    //    }

    //    public string OtherDetails
    //    {
    //        get
    //        {
    //            return otherdetailsField;
    //        }
    //        set
    //        {
    //            otherdetailsField = value;
    //        }
    //    }
    //    private string qualityEventsField;
    //    public string qualityEvents
    //    {
    //        get
    //        {
    //            return qualityEventsField;
    //        }
    //        set
    //        {
    //            qualityEventsField = value;
    //        }
    //    }
    //    private string initiatingDepartmentField;
    //    public string initiatingDepartment
    //    {
    //        get
    //        {
    //            return initiatingDepartmentField;
    //        }
    //        set
    //        {
    //            initiatingDepartmentField = value;
    //        }
    //    }
    //    public string Product
    //    {
    //        get
    //        {
    //            return productField;
    //        }
    //        set
    //        {
    //            productField = value;
    //        }
    //    }
    //    private string externalReferenceField;
    //    public string externalReference
    //    {
    //        get
    //        {
    //            return externalReferenceField;
    //        }
    //        set
    //        {
    //            externalReferenceField = value;
    //        }
    //    }
    //    private string referenceField;
    //    public string reference
    //    {
    //        get
    //        {
    //            return referenceField;
    //        }
    //        set
    //        {
    //            referenceField = value;
    //        }
    //    }
    //    //private DateTime dateofInitiationField;
    //    //public DateTime tardateofInitiation
    //    //{
    //    //    get
    //    //    {
    //    //        return dateofInitiationField;
    //    //    }
    //    //    set
    //    //    {
    //    //        dateofInitiationField = value;
    //    //    }
    //    //}
        
    //}
}
