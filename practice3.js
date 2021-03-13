const login_btn = document.createElement('a')
login_btn.innerText = 'ログイン'
login_btn.setAttribute('id','login')
login_btn.setAttribute('class','btn btn-login')
login_btn.setAttribute('href','https://tookyofreelance.jp/')
document.getElementById('js-for-web').appendChild(login_btn)

// 6
document.getElementById('register').click()

// 7
window.onload = function(){
  document.getElementById('service-title').innerText='デイトラ'
}

// 8
document.getElementById("button").addEventListener('click',function(){
  document.getElementById('service-title').innerText='デイトラ'
})

$(function(){
	const status = $('#user-status').val();
  alert(status);
  const button = $('#register');

  if (status === "visiter"){
    button.text("登録");
    button.removeClass('btn-login');
    button.addClass('btn-register');
  }else if(status === "user"){
    button.text("ログイン");
    button.removeClass('btn-register');
    button.addClass('btn-login');
    $('.login-area').append('<a href="https://tokyofreelance.jp/" class="btn btn-withdraw">退会</a>')
  }
});







