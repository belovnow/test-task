namespace backend.Services;

public record PostDto
{
    public int Id { get; set; }
    public string Title { get; set; } = string.Empty;
    public DateTime CreatedDate { get; set; }
    public int UserId { get; set; }
    public string Name { get; set; } = string.Empty;
}
