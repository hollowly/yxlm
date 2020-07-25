
//判断是否输入正确用户名密码
function login()
{
    var uers = document.getElementById("user").value;
    var pass = document.getElementById("pass").value;

    if(uers == "")
    {
        alert("请输入用户名");
    }
    else if(pass == "")
    {
        alert("请输入密码");
    }
    else if(uers == "4511" && pass == "123456")
    {
        alert('登录成功........即将跳转到主页');
        window.open("sign-index.html",'_blank');                 
        // parent.location.href="index.html";
    }
    else
    {
        alert("请输入正确的用户名和密码");
    }
}