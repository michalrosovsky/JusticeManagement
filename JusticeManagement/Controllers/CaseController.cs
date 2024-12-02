using Microsoft.AspNetCore.Mvc;

namespace Case
{
    [ApiController]
    [Route("Case")]
    public class CaseController : ControllerBase
    {

        private readonly ICaseService _caseService;

        public CaseController(ICaseService caseService)
        {
            _caseService = caseService;
        }



        [HttpPost("CreateCase")]
        public async Task<IActionResult> CreateCase([FromBody] Case request) =>
            Ok(_caseService.CreateCase(request));

    }
}