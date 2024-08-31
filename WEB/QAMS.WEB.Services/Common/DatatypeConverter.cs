using System;
using System.Collections.Generic;
using System.Text;

namespace QAMS.WEB.Services
{
    public class DatatypeConverter
    {
        public static DateTime? SetDateTime(object val)
        {
            if (val is DBNull) return null;
            return Convert.ToDateTime(val);
        }

        public static System.Int32? SetIntValue(object val)
        {
            if (val is DBNull) return null;
            return Convert.ToInt32(val);
        }

        public static System.Boolean? SetBoolValue(object val)
        {
            if (val is DBNull) return null;
            if (val is string strVal)
            {
                // Handle string representations of boolean values
                if (strVal == "0") return false;
                if (strVal == "1") return true;
            }
            return Convert.ToBoolean(val);
        }

        public static System.Decimal? SetDecimalValue(object val)
        {
            if (val is DBNull) return null;
            return Convert.ToDecimal(val);
        }

        public static System.Double? SetDoubleValue(object val)
        {
            if (val is DBNull) return null;
            return Convert.ToDouble(val);
        }
    }
}

