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

        private bool? isChangeImpactProductMaterialField;

        private string impactedproductmaterialsField;

        private bool? isAnyProceduresImpactedField;

        private int? impactedproceduresField;

        private string commentsField;

        public bool? isChangeImpactProductMaterial
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

        public bool? isAnyProceduresImpacted
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
