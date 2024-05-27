using DTTLLesson06.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace DTTLLesson06.Controllers
{
    public class DTLSongController : Controller
    {
        // GET: DTLSong
        private static List<DTLSong> dTLSongs = new List<DTLSong>()
        {
            new DTLSong{ID = 100, dtlTitle="thùy linh",dtlAuthor="K22CNT1", dtlArtist="linh", dtlYearRelease=2024},
            new DTLSong{ID = 101, dtlTitle="miss ",dtlAuthor="K22CNT1", dtlArtist="linh", dtlYearRelease=1999},
        };
        
        
        public ActionResult Index()
        {
            return View(dTLSongs);
        }
        public ActionResult DTLCreate()
        {
            var dtlSong = new DTLSong();
            return View(dtlSong);
        }
        [HttpPost]
        public ActionResult DthCreate(DTLSong dTHSong)
        {
            if (!ModelState.IsValid)
            {
                return View(dTHSong);
            }
            //nếu dữ liệu đúng thì lưu vào danh sách
            dTLSongs.Add(dTHSong);
            return RedirectToAction(" Index");
        }
    }
}