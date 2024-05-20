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

        private bool? doesthechangeimpactproductmaterialqualityField;

        private int? impactedproductmaterialsField;

        private bool? areanyproceduresimpactedField;

        private int? impactedproceduresField;

        private string commentsField;

        public bool? DoesTheChangeImpactProductMaterialQuality
        {
            get
            {
                return doesthechangeimpactproductmaterialqualityField;
            }
            set
            {
                doesthechangeimpactproductmaterialqualityField = value;
            }
        }

        public int? ImpactedProductMaterials
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

        public bool? AreAnyProceduresImpacted
        {
            get
            {
                return areanyproceduresimpactedField;
            }
            set
            {
                areanyproceduresimpactedField = value;
            }
        }

        public int? ImpactedProcedures
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

        public string Comments
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
