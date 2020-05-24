using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace ReactMVCWebapp
{
    public class ContactsController : Controller
    {
        private readonly ILogger<ContactsController> _logger;

        public ContactsController(ILogger<ContactsController> logger)
        {
            _logger = logger;
        }

        public IActionResult Index()
        {
            return View();
        }
    }
}