namespace backend.Requests;

public record CreatePostRequest(string Title, string Content, DateTime CreatedDate, int UserId);
