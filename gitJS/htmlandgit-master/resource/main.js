function validateForm() {
    let validated = true;
    // direct
    let name = document.getElementById("name").value;
    // by form
    let age = document.forms["register"]["age"].value;
    let email = document.forms["register"]["email"].value;
    let username = document.forms["register"]["username"].value;
    let password = document.forms["register"]["password"].value;
    let rpassword = document.forms["register"]["rpassword"].value;
    let bio = document.forms["register"]["bio"].value;

    if (name == null || name.length > 30) {
        validated = false;
        // handle sau khi validate
        alert("Tên không được để trống hoặc ngắn hơn 30 kí tự!")
    }

    if (age == null || age < 18 || age > 80) {
        validated = false;
        alert("Tuổi không được bé hơn 18 hoặc lớn hơn 80!")
    }

    function checkEmail() { 
        var email = document.getElementById('email'); 
        var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/; 
        if (!filter.test(email.value)) { 
                 alert('Hay nhap dia chi email hop le.\nExample@gmail.com');
                 email.focus; 
                 return false; 
        }
        else{ 
                 alert('Email hop le'); 
        } 
    } 

    if (username == null || username.length >= 30 || username.length < 6) {
        // TODO: Check kí tự đặc biệt
        var format = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
        if(format.test(String)){
            validated = false;
        }
        validated = false;
        alert("Tên tài khoản không được chứa kí tự đặc biệt và phải lớn hơn 6 kí tự, bé hơn 30 kí tự");
    }

    if (password == null || password > 36 || password < 8) {
        validated = false;
        alert("Mật khẩu phải lớn hơn 8 kí tự và bé hơn 36 kí tự!")
        if (rpassword == null || rpassword != password ) {
            validated = false;
            alert("Nhập lại mật khẩu và mật khẩu đang không giống nhau, vui lòng kiểm tra lại!");
        }
    }

    if (bio == null || bio.length < 300) {
        validated = false;
        alert("Tiểu sử không được ngắn hơn 300 kí tự");
    }
    return validated;
}