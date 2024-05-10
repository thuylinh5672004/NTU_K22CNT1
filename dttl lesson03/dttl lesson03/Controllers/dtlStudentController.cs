using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace dttl_lesson03.Controllers
{
    public class dtlStudentController : Controller
    {
        // GET: dtlStudent
        public ActionResult Index()
        {
            ViewBag.fullName = "Đào Thị Thùy Linh";
            ViewData["Birthday"] = "4/6/2004";
            TempData["Phone"] = "099668856";

            return View();
        }
        public ActionResult Details()
        {
            string dtlStr = "";
            dtlStr += "<h3> Họ và Tên: Đào Thị Thùy Linh</h3>";
            dtlStr += "<p>Mã số:2245778";
            dtlStr += "<p> Địa chỉ email:thuylinh03@gmail.com";
            ViewBag.Details = dtlStr ;
            
            return View("chiTiet");
        }
        public ActionResult ngonnguRazor() 
        {
            string[] names = { "Trần văn thái", "Nguyễn thị Mai" };
            return View();
            
        }
        //html
        //get: dtlStudent/AddNewStudent
        public ActionResult AddNewStudent()
        {
            return View();
        }
        [HttpPost]
        public ActionResult AddNewStudent(FormCollection form)
        {
            //lay du lieu tren form
            string fullname = form["fullName"];
            string masv = form["masv"];

            string taikhoan= form["taikhoan"];
            string matkhau= form["matkhau"];

            string dtlStr="<h3>"+ fullname+"</h3>";
            dtlStr +="<p>"+ masv;
            dtlStr += "<p>" + taikhoan;
            dtlStr += "<p>" + matkhau;
            ViewBag.info = dtlStr ;
            return View("ketqua");
        }
    }
}