using System;
using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using QAMS.WEB.Services;
using VAMLIbrary.Core.Common;

namespace QAMS.WEB.API.Controllers
{
    [Route("api/masterdata")]
    [ApiController]

    public class MasterDataController : ControllerBase
    {
        private readonly IMasterDataService masterDataService;

        /// <summary>
        /// 
        /// </summary>
        /// <param name="agencyService"></param>
        public MasterDataController(IMasterDataService masterDataService)
        {
            this.masterDataService = masterDataService;
        }

        /// <summary>
        /// Auto Suggest zipcodes
        /// </summary>
        /// <param name="zipcode"></param>
        /// <returns></returns>
        [ProducesResponseType(typeof(List<ZipCodeInformation>), 200)]
        [HttpGet("zipcodes/{zipCode}")]
        public ActionResult<List<ZipCodeInformation>> GetZipcodes(string fields, string zipCode)
        {
            var result = masterDataService.GetZipcodes(fields, zipCode);
            return result;
        }

    }
}
