using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel;
using System.Linq;
using System.Web;

namespace DTTLLesson06.Models
{
    public class DTLSong
    {
        public int ID { get; set; }
        [DisplayName("Tiêu đề")]
        [Required(ErrorMessage = "DTL:Hãy nhập trường này!!!")]
        public string dtlTitle { get; set; }
        [DisplayName("tác giả")]
        [Required(ErrorMessage = "DTL: Hãy nhập tên tác giá ")]
        [StringLength(20, MinimumLength = 2, ErrorMessage = "DTL: Độ dài trong khoảng [2-20]")]
        public string dtlAuthor { get; set; }
        [DisplayName("Nghệ sĩ")]
        [Required(ErrorMessage = "DTL: Hãy nhập năm nghệ sĩ")]
        public string dtlArtist { get; set; }
        [DisplayName("Năm xuất bản")]
        [Required(ErrorMessage = "DTL: Hãy nhập năm xuất bản")]
        [RegularExpression(@"[0-9]{4}", ErrorMessage = "DTL: Hãy nhập 4 ký tự từ số")]
        [Range(1900, 2016, ErrorMessage = "DTL: Hãy nhập giá trị trong khoảng [1900-2016]")]
        public int dtlYearRelease { get; set; }





    }
}