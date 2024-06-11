using Asp.Versioning;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace StoreApi.Controllers
{
  
    [Route("api/v{version:apiVersion}/[Controller]")]
    [ApiController]
    public class BaseApiController : ControllerBase
    {
    }
}
