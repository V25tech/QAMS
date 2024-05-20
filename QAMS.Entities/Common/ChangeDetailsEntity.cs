using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace QAMS.Entities.Common
{
    public class ChangeDetailsEntity
    {
        public ChangeDetailsEntity() { }


        private string proposedchangeField;

        private string justificationforproposedchangeField;

        private int? changerelatedtoField;

        private int? equipmentField;

        private string documentdetailsField;

        private string facilityutilitydetailsField;

        private string validationdetailsField;

        private string packingdetailsField;

        private string softwaredetailsField;

        private string testingdetailsField;

        private string supplierserviceproviderdetailsField;

        private string processdetailsField;

        private string otherdetailsField;

        private int? productField;
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
        private int? materialField;
        public int? Material
        {
            get
            {
                return materialField;
            }
            set
            {
                materialField = value;
            }
        }
        private string existingprocedureField;
        public string ExistingProcedure
        {
            get
            {
                return existingprocedureField;
            }
            set
            {
                existingprocedureField = value;
            }
        }
        public string ProposedChange
        {
            get
            {
                return proposedchangeField;
            }
            set
            {
                proposedchangeField = value;
            }
        }

        public string JustificationForProposedChange
        {
            get
            {
                return justificationforproposedchangeField;
            }
            set
            {
                justificationforproposedchangeField = value;
            }
        }

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
