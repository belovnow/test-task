using backend.Requests;
using backend.Services;
using Microsoft.AspNetCore.Mvc;

namespace backend.Controller;

[ApiController]
[Route("api/[controller]")]
public class PostController([FromServices] PostService PostService) : ControllerBase
{
    /// <summary>
    /// Создание поста.
    /// </summary>
    /// <param name="request">Запрос на создание поста.</param>
    /// <param name="ctx">Токен отмены.</param>
    [HttpPost]
    [ProducesResponseType(StatusCodes.Status204NoContent)]
    public async Task<IActionResult> Create(
        [FromBody] CreatePostRequest request, 
        CancellationToken ctx = default)
    {
        await PostService.Create(request, ctx);
        return NoContent();
    }

    /// <summary>
    /// Получение всех постов с сортировкой по дате создания.
    /// </summary>
    [HttpGet]
    [ProducesResponseType(StatusCodes.Status200OK)]
    public async Task<IActionResult> GetAll(CancellationToken ctx = default)
    {
        var result = await PostService.GetAll(ctx);
        return Ok(result);
    }
}
