using dttlLesson04.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace dttlLesson04.Controllers
{
    public class DttlCustomerController : Controller
    {
        // GET: DttlCustomer
        public ActionResult Index()
        {
            return View();
        }
        //Action:CustomerDetail
        public ActionResult DttlCustomerDetail()
        {
            //tao doi tuong du lieu
            var customer = new DttlCustomer()
            {
                CustomerId = 1,
                FirstName = "Dao thi thuylinh",
                LastName = "Linh",
                Address = "K22CNT1",
                YearOfBirth = 2004
            };
            ViewBag.customer = customer;
            return View();

        }
        public ActionResult DttlListCustomer()
        {
            var list= new List<DttlCustomer>()
            {
                new DttlCustomer()
                {
                     CustomerId = 1,
                    FirstName = "Dao thi thuylinh",
                    LastName = "Linh",
                    Address = "K22CNT1",
                    YearOfBirth = 2004

                },
                new DttlCustomer()
                {
                     CustomerId = 2,
                    FirstName = "nguyen van thong",
                    LastName = "thong",
                    Address = "K22CNT1",
                    YearOfBirth = 2002
                },
                new DttlCustomer()
                {
                     CustomerId = 3,
                    FirstName = "nguyen hong van",
                    LastName = "van",
                    Address = "K22CNT1",
                    YearOfBirth = 2003
                },
                new DttlCustomer()
                {
                     CustomerId = 4,
                    FirstName = "tran dai nghia",
                    LastName = "nghia",
                    Address = "K22CNT1",
                    YearOfBirth = 2001
                },

            };
            //ViewBag.list = list;//dua du lieu ra viwe bang doi tuong viewbag

            return View(list);
        }
    }
}