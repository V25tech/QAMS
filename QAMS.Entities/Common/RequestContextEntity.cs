using System;
using System.Collections.Generic;

namespace QAMS.Common.Entities
{

    public class RequestContext
    {

        private int pagenumberField = 1;

        private int pagesizeField = 9999;

        public int PageNumber
        {
            get
            {
                return this.pagenumberField;
            }
            set
            {
                this.pagenumberField = value;
            }
        }

        public int PageSize
        {
            get
            {
                return this.pagesizeField;
            }
            set
            {
                this.pagesizeField = value;
            }
        }
        public int planId { get; set; }

        public int userId { get; set; }

        public string userName { get; set; }

        public string password { get; set; }
    }
}
