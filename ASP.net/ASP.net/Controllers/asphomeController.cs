using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace ASP.net.Controllers
{
    public class asphomeController : Controller
    {
        // GET: asphome
        public ActionResult Index()
        {
            ViewBag.message = "Chào mừng bạn đến với ASP.NET MVC 5";
            return View();
        }
        //GET: /Home/About
        public ActionResult About()
        {
            //sử dung ViewBag để đưa dữ liệu ra View
            ViewBag.message = "Đây là trang About";
            return View();
        }
    }
}
