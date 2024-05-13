using dttlLesson04.Models;
using System;
using System.Collections.Generic;
using System.EnterpriseServices;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace dttlLesson04.Controllers
{
    public class DttlCustomerScaffdingController : Controller
    {
        // GET: DttlCustomerScaffding
        private static List<DttlCustomer> ListCustomers = new List<DttlCustomer>()
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
        public ActionResult Index()
        {

            return View(ListCustomers);
        }
        [HttpGet]
        public ActionResult DttlCreate()
        {
            var model =new DttlCustomer();
            return View(model);
        }
        [HttpPost]
        public ActionResult DttlCreate(DttlCustomer model)
        {
            //them moi doi tuong khach hang vao danh sach du lieu
            ListCustomers.Add(model);
            //chuyen ve trang danh sach
            //return View(model);
            return RedirectToAction("Index");
        }
        public ActionResult DttlEdit(int id)
        {
            var customer = ListCustomers.FirstOrDefault(x=>x.CustomerId==id);
            return View(customer);
        }
    }
}