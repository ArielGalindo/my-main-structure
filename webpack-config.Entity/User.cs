using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace webpack_config.Entity
{
    public class User
    {
        [Key]
        [Column("User_Id")]
        [ScaffoldColumn(false)]
        public int UserId { get; set; }

        [Column("FullName")]
        [DataType(DataType.Text)]
        [Display(Name = "FullName")]
        [Required(ErrorMessage = "Please, fill out all fields.")]
        public string FullName { get; set; }
        
        [Column("UserName")]
        [DataType(DataType.Text)]
        [Display(Name = "UserName")]
        [Required(ErrorMessage = "Please, fill out all fields.")]
        public string UserName { get; set; }
        
        [Column("Password")]
        [DataType(DataType.Password)]
        [Display(Name = "Password")]
        [Required(ErrorMessage = "Please, fill out all fields.")]
        [RegularExpression(@"^((?=.*[a-z])(?=.*[A-Z])(?=.*\d)).+$")]
        [StringLength(100, ErrorMessage = "The {0} must be at least {2} characters long.", MinimumLength = 8)]
        public string Password { get; set; }

        [Column("PasswordConfirmed")]
        [DataType(DataType.Password)]
        [Display(Name = "Confirm Password")]
        [Compare("Password", ErrorMessage = "Confirm password doesn't match, type again!")]
        public string PasswordConfirmed { get; set; }
    }
}