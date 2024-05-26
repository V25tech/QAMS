using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace QAMS.Entities.Common
{
    public class ImpactDetailsEntity
    {
        public ImpactDetailsEntity()
        {

        }

        private string isChangeImpactProductMaterialField;

        private string impactedproductmaterialsField;

        private bool? isAnyProceduresImpactedField;

        private string impactedproceduresField;

        private string commentsField;

        public string isChangeImpactProductMaterial
        {
            get
            {
                return isChangeImpactProductMaterialField;
            }
            set
            {
                isChangeImpactProductMaterialField = value;
            }
        }

        public string impactProductOrMaterials
        {
            get
            {
                return impactedproductmaterialsField;
            }
            set
            {
                impactedproductmaterialsField = value;
            }
        }

        public string isAnyProceduresImpacted
        {
            get
            {
                return isAnyProceduresImpactedField;
            }
            set
            {
                isAnyProceduresImpactedField = value;
            }
        }

        public int? impactedProcedures
        {
            get
            {
                return impactedproceduresField;
            }
            set
            {
                impactedproceduresField = value;
            }
        }

        public string comments
        {
            get
            {
                return commentsField;
            }
            set
            {
                commentsField = value;
            }
        }
    }
}
