namespace Core1Test.Presentation.App.Controllers
{
    using System.Text;
    using System.IO;
    using Constants.HomeController;
    using Microsoft.AspNet.Mvc;

    public class HomeController : Controller
    {
        public HomeController()
        {
        }

        [HttpGet("", Name = HomeControllerRoute.Index)]
        public IActionResult Index()
        {
            using (StreamReader c = new StreamReader(new FileStream("wwwroot/index.html", FileMode.Open)))
            {
                return Content(c.ReadToEnd(), "text/html", Encoding.UTF8);
            }
        }
    }
}
