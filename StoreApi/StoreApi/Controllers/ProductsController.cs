using Asp.Versioning;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using StoreApi.Data;
using StoreApi.Entities;

namespace StoreApi.Controllers
{
    [ApiVersion("1.0")]
    public class ProductsController : BaseApiController
    {
        private readonly StoreContext context;

        public ProductsController(StoreContext _context)
        {
            context = _context;
        }
        [HttpGet]
        [MapToApiVersion("1.0")]
        public async Task<ActionResult<List<Product>>> GetProducts()
        {
            return await context.Products.ToListAsync();
            
        }

        [HttpGet("{id}")]
        [MapToApiVersion("1.0")]
        public async Task< ActionResult<Product>>GetProduct(int id)
        {
            var product= await context.Products.FindAsync(id);   
            if(product == null) return NotFound();
            return Ok(product);
           
        }
    }
}
