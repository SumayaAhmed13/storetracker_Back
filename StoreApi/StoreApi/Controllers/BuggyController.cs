using Asp.Versioning;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace StoreApi.Controllers
{
    [ApiVersion("1.0")]
    public class BuggyController : BaseApiController
    {
        [HttpGet("not-found")]
        [MapToApiVersion("1.0")]
        public ActionResult GetNotFound()
        {
            return NotFound();
        }
        [HttpGet("bad-request")]
        [MapToApiVersion("1.0")]
        public ActionResult GetBadRequest()
        {
            return BadRequest(new ProblemDetails { Title = "This is a bad request" });
        }
        [HttpGet("unauthorised")]
        [MapToApiVersion("1.0")]
        public ActionResult GetUnauthorised()
        {
            return Unauthorized();
        }
        [HttpGet("validation-error")]
        [MapToApiVersion("1.0")]
        public ActionResult GetValidationError()
        {
            ModelState.AddModelError("Problem1", "This is Frist Error");
            ModelState.AddModelError("Problem2", "This is Second Error");
            return ValidationProblem();
        }
        [HttpGet("server-error")]
        [MapToApiVersion("1.0")]
        public ActionResult GetServerError()
        {
            throw new Exception("This is Server Error");
        }
    }
}
