using RaygunDemo.WebApi.Models;
using RaygunDemo.WebAPI.Models;
using System.Collections.Generic;
using System.Linq;
using System;
using System.Web.Http;
using System.Web.Http.Cors;
using Mindscape.Raygun4Net.WebApi;

namespace RaygunDemo.WebAPI.Controllers
{
    [EnableCorsAttribute("http://localhost:9001", "*", "*")]
    public class ErrorController : ApiController
    {
        // GET: api/Products
        public void ThrowUnhandledError()
        {
            throw new ApplicationException("OMG uncaugt exception!");
        }

        public void CatchAndSendToRaygun()
        {
            try
            {
                throw new ApplicationException("At least we caught this one. Lets send it to raygun");
            }
            catch (Exception e)
            {
                new RaygunClient().SendInBackground(e);
            }
        }

        public void SendWithUserInformation()
        {
            var productRepository = new ProductRepository();
        }

        public void SendWithCustomData()
        {
            var productRepository = new ProductRepository();
        }
    }
}
