using backend.Requests;
using backend.Services;
using Microsoft.AspNetCore.Mvc;

namespace backend.Controller;

[ApiController]
[Route("api/[controller]")]
public class PostController([FromServices] PostService PostService) : ControllerBase
{
    [HttpPost]
    public async Task<IActionResult> Create([FromBody] CreatePostRequest request, CancellationToken ctx = default)
    {
        await PostService.Create(request, ctx);
        return NoContent();
    }

    [HttpGet]
    public IActionResult GetAll()
    {
        var result = PostService.GetAll();
        return Ok(result);
    }
}
