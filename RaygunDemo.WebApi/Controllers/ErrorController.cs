using RaygunDemo.WebApi.Models;
using RaygunDemo.WebAPI.Models;
using System.Collections.Generic;
using System.Linq;
using System;
using System.Web.Http;
using System.Web.Http.Cors;
using Mindscape.Raygun4Net.WebApi;
using Mindscape.Raygun4Net.Messages;

namespace RaygunDemo.WebAPI.Controllers
{
    [EnableCorsAttribute("http://localhost:9001", "*", "*")]
    public class ErrorController : ApiController
    {
        private RaygunWebApiClient _raygunClient = new RaygunWebApiClient();

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
                _raygunClient.SendInBackground(e);
            }
        }

        public void SendWithUserInformation()
        {
            try
            {
                throw new ApplicationException("Ahh we know what user it is that we caught creating an exception..");
            }
            catch (Exception e)
            {
                _raygunClient.UserInfo = new RaygunIdentifierMessage("user@email.com")
                {
                    IsAnonymous = false,
                    FullName = "Seth Reid",
                    FirstName = "Seth",
                    Email = "Contact@sethreid.co.nz"
                };
                _raygunClient.SendInBackground(e);
                _raygunClient.UserInfo = null;
            }
        }

        public void SendWithTags()
        {
            try
            {
                throw new ApplicationException("This time I've tagged the exception with tags by passing a List<string>");
            }
            catch (Exception e)
            {

                _raygunClient.Send(e, new List<string>() { "my cool tag", "my other cool tag" });
            }
        }

        public void SendWithCustomData()
        {
            try
            {
                throw new ApplicationException("Using a dictionary for a custom data object is cool");
            }
            catch (Exception e)
            {
                var customData = new Dictionary<string, object>() {
                    { "key", "value" }
                };
                _raygunClient.Send(e, customData);
            }
        }
    }
}
