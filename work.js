//alert(localStorage["user"]);
var storage = {};

function loginform(){
    if(storage.user && storage.pass){
        if($("#loginForm").length>0&&$("p.error").length==0){
            $("#loginForm #nme").val(storage.user);
            $("#loginForm #pwd").val(storage.pass);
            $("#loginForm [type=submit]").click();
        }
    }
}
chrome.runtime.sendMessage({greeting: "hello"}, function(response) {
  storage = response.storage;
  loginform();
});
