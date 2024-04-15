using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace lesson2.Controllers
{
    public class productController : Controller
    {
        // GET: product~ http://localhost:port/product
        public ActionResult Index()
        {
            ViewBag.name = "thuylinh-k22CNT1";
            return View();
        }
        public ActionResult Details(int ? id)
        {
            ViewBag.id = id;
            return View();
        }
        public string GetName()
        {
            return "thuy linh-CNT1";
        }
        public JsonResult ListName()
        { string [] name  = { "hung","dung","sang","trong" };
            return Json(name, JsonRequestBehavior.AllowGet);  
        }
    }
}