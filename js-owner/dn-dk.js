		// localStorage.setItem("user1", 'nguyentanloi@gmail.com - 123321');
		// localStorage.setItem("user2", 'trantanthanh@gmail.com - 123321');
		localStorage.setItem("login", JSON.stringify(['ngoduyphuc@gmail.com - Npduy123456', 'trantanthanh@gmail.com - Npduy12345']))
		function checkText(){
		var regex = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
		var user = document.getElementById("username").value;
		if(regex.test(user))
			return true;
		else{
			alert('Username must be email');
			return false;
		}
		}
		function checkpass(){
			var re = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
			var p = document.getElementById("password").value;
			var p1 = document.getElementById("password1").value;
			var check = 0;
			if(re.test(p)){
				check = 1;
			}else{
				alert("Minimum of eight characters, at least one uppercase letter, one lowercase letter and one number");
				check = 0;
			}
			if(p!=p1){
				alert("The two passwords do not match");
				check = 0;
			}else{
				check = 1;
			}
			if(check!=0)
			return true;
			else
			return false;
		}
		function register(){
			if(checkText() && checkpass()){
				var user = document.getElementById("username").value;
				var pass = document.getElementById("password").value;
				var login = user + ' - ' + pass;
				if (typeof(Storage) !== "undefined"){
					var arr = JSON.parse(localStorage.getItem("login"));
					arr.push(login);
					localStorage.setItem("login", JSON.stringify(arr));
					alert("Registration successful");
				}
			}
		}
		function dn(){
			var check=0;			
			var User = document.getElementById("username").value;
			if (User.length == 0) {
				alert("user not value");
				return
			}			
			var pass = document.getElementById("password").value;
			if (pass.length == 0) {
				alert("chưa nhập tên");
				return
			}
			var login = User + ' - ' + pass;
			var arrLogin = JSON.parse(localStorage.getItem("login"));
			for (let index = 0; index < arrLogin.length; index++) {
				if (arrLogin[index] == login) {
					check = 1;
				}
			}		
			if (check==1){				
				location.assign("../html/HomePageSereinSignIn.html");
				// alert(document.getElementById("btnDNHome").value);
				// document.getElementById("btnDNHome").value=User;
			}
			else
			{
				alert("Login information is incorrect");
				document.getElementById("username").focus();
			}
		}