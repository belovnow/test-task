using backend.Database;
using backend.Entity;
using backend.Requests;
using Microsoft.EntityFrameworkCore;

namespace backend.Services;

public class PostService(NspkContext db)
{
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

    public List<PostDto> GetAll()
    {
        var posts = db.Posts.Include(u => u.User);
        var result = posts
            .OrderBy(s => s.CreatedDate)
            .Select(p =>
                new PostDto()
                {
                    Id = p.Id,
                    Title = p.Title,
                    CreatedDate = p.CreatedDate,
                    UserId = p.UserId,
                    Name = p.User.Name
                }).ToList();

        return result;
    }
}
