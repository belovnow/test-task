using backend.Entity;
using backend.Services;
using Microsoft.AspNetCore.Mvc;

namespace backend.Controller;

[ApiController]
[Route("api/[controller]")]
public class UserController(UserService userService)
{
    [HttpGet]
    public User? GetUser()
    {
        return userService.GetUser();
    }
}