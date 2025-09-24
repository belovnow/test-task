namespace backend.Requests;

/// <summary>
/// Запрос на создание поста
/// </summary>
/// <param name="Title">Описание.</param>
/// <param name="Content">Содержимое.</param>
/// <param name="CreatedDate">Дата создания.</param>
/// <param name="UserId">Идентификатор пользователя.</param>
public record CreatePostRequest(string Title, string Content, DateTime CreatedDate, int UserId);
