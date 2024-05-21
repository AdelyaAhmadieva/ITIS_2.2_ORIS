using PokemonAPI.Controllers;

namespace PokemonAPIntegrationsTests;

[TestClass]
public class PokemonControllerTests
{
    private PokemonController _controller;
    
    [TestInitialize]
    public void Initialize()
    {
        //TODO: Написать минимум по 4 теста на каждый метод
        //TODO: В качестве давнныз использовать Moq (ссылки вк) 
        //TODO: Тестировать через HTTP_Client
        
        _controller = new PokemonController();
    }
    
    [TestMethod]
    public void GetAll_whenQueryIsNull_ReturnData()
    {
        // Arrange
        
        // Act
        
        // Assert
        
    }
}