﻿using RaygunDemo.WebApi.Models;
using RaygunDemo.WebAPI.Models;
using System.Collections.Generic;
using System.Linq;
using System.Web.Http;

namespace RaygunDemo.WebAPI.Controllers
{
    [EnableCorsAttribute("http://localhost:52436", "*", "*")]
    public class ProductsController : ApiController
    {
        // GET: api/Products
        public IEnumerable<Product> Get()
        {
            var productRepository = new ProductRepository();
            return productRepository.Retrieve();
        }

        public IEnumerable<Product> Get(string search)
        {
            var productRepository = new ProductRepository();
            var products = productRepository.Retrieve();
            return products.Where(p => p.ProductCode.Contains(search));
        }


        // GET: api/Products/5
        public string Get(int id)
        {
            return "value";
        }

        // POST: api/Products
        public void Post([FromBody]string value)
        {
        }

        // PUT: api/Products/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE: api/Products/5
        public void Delete(int id)
        {
        }
    }
}
