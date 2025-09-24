using backend.Database;
using backend.Entity;
using Microsoft.EntityFrameworkCore;

namespace backend.Services;

public class UserService(NspkContext db)
{
    public User? GetUser()
    {
        return db.Users.FirstOrDefault();
    }
}