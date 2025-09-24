using backend.Database;
using backend.Entity;
using backend.Requests;
using Microsoft.EntityFrameworkCore;

namespace backend.Services;

/// <summary>
/// Сервис для работы с постами.
/// </summary>
/// <param name="db">Контекст базы данных.</param>
public class PostService(NspkContext db)
{
    /// <summary>
    /// Создание поста.
    /// </summary>
    /// <param name="request">Запрос на создание поста.</param>
    /// <param name="ctx">Токен отмены.</param>
    public async Task Create(CreatePostRequest request, CancellationToken ctx = default)
    {
        var post = new Post()
        {
            Title = request.Title,
            Content = request.Content,
            CreatedDate = request.CreatedDate,
            UserId = request.UserId
        };

        await db.Posts.AddAsync(post, ctx);
        await db.SaveChangesAsync(ctx);
    }

    /// <summary>
    /// Получение всех постов с сортировкой по дате создания.
    /// </summary>
    public async Task<IReadOnlyList<PostDto>> GetAll(CancellationToken ctx = default)
    {
        var result = await db.Posts
            .OrderBy(s => s.CreatedDate)
            .Select(p =>
                new PostDto(p.Id,
                    p.Title,
                    p.Content,
                    p.CreatedDate,
                    p.UserId,
                    p.User.Name))
            .ToListAsync(ctx);

        return result;
    }
}
