namespace QAMS.Entities.Common
{
    public class RequestDetailsEntity
    {
        public RequestDetailsEntity()
        {
        }
        private string documentdetailsField;

        private string packingdetailsField;

        private string softwaredetailsField;

        private string testingdetailsField;

        private string processdetailsField;

        private string otherdetailsField;

        private int? productField;

        private int? changerelatedtoField;
        public int? ChangeRelatedTo
        {
            get
            {
                return changerelatedtoField;
            }
            set
            {
                changerelatedtoField = value;
            }
        }
        private int? batchorlotnumberField;
        public int? BatchOrLotNumber
        {
            get
            {
                return batchorlotnumberField;
            }
            set
            {
                batchorlotnumberField = value;
            }
        }

        private string batchorlotdetailField;
        public string BatchOrLotDetail
        {
            get
            {
                return batchorlotdetailField;
            }
            set
            {
                batchorlotdetailField = value;
            }
        }
        private int? equipmentField;
        public int? Equipment
        {
            get
            {
                return equipmentField;
            }
            set
            {
                equipmentField = value;
            }
        }
        public string DocumentDetails
        {
            get
            {
                return documentdetailsField;
            }
            set
            {
                documentdetailsField = value;
            }
        }
        private string facilityutilitydetailsField;
        public string FacilityUtilityDetails
        {
            get
            {
                return facilityutilitydetailsField;
            }
            set
            {
                facilityutilitydetailsField = value;
            }
        }
        private string validationdetailsField;
        public string ValidationDetails
        {
            get
            {
                return validationdetailsField;
            }
            set
            {
                validationdetailsField = value;
            }
        }

        public string PackingDetails
        {
            get
            {
                return packingdetailsField;
            }
            set
            {
                packingdetailsField = value;
            }
        }

        public string SoftwareDetails
        {
            get
            {
                return softwaredetailsField;
            }
            set
            {
                softwaredetailsField = value;
            }
        }

        public string TestingDetails
        {
            get
            {
                return testingdetailsField;
            }
            set
            {
                testingdetailsField = value;
            }
        }
        private string supplierserviceproviderdetailsField;
        public string SupplierServiceProviderDetails
        {
            get
            {
                return supplierserviceproviderdetailsField;
            }
            set
            {
                supplierserviceproviderdetailsField = value;
            }
        }

        public string ProcessDetails
        {
            get
            {
                return processdetailsField;
            }
            set
            {
                processdetailsField = value;
            }
        }

        public string OtherDetails
        {
            get
            {
                return otherdetailsField;
            }
            set
            {
                otherdetailsField = value;
            }
        }

        public int? Product
        {
            get
            {
                return productField;
            }
            set
            {
                productField = value;
            }
        }
    }
}
