using TeamHost.Common;

namespace TeamHost.Entities;

/// <summary>
///     Сущность информации о пользователи
/// </summary>
public class UserInfo : BaseEntity
{
    /// <summary>
    ///     Имя
    /// </summary>
    public string FirstName { get; set; }

    /// <summary>
    ///     Фамилия
    /// </summary>
    public string LastName { get; set; }

    /// <summary>
    ///     Отчество
    /// </summary>
    public string? Patronimic { get; set; }

    /// <summary>
    ///     Информауия о себе
    /// </summary>
    public string? About { get; set; }

    /// <summary>
    ///     День рождения
    /// </summary>
    public DateTime? Birthday { get; set; }

    /// <summary>
    ///     Страна
    /// </summary>
    public Country? Country { get; set; }

    /// <summary>
    ///     ИД страны
    /// </summary>
    public Guid? CountryId { get; set; }

    /// <summary>
    ///     Nav-prop
    /// </summary>
    public User? User { get; set; }

    /// <summary>
    ///     ИД пользователя
    /// </summary>
    public Guid? UserId { get; set; }
}