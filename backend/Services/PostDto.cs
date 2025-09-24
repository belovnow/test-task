namespace backend.Services;

/// <summary>
/// DTO для поста.
/// </summary>
/// <param name="Id">Идентификатор поста.</param>
/// <param name="Title">Название поста.</param>
/// <param name="Content">Содержимое поста.</param>
/// <param name="CreatedDate">Дата создания поста.</param>
/// <param name="UserId">Идентификатор пользователя.</param>
/// <param name="Name">Имя пользователя.</param>
public record PostDto(
    int Id,
    string Title,
    string Content,
    DateTime CreatedDate,
    int UserId,
    string Name);
