/**
 * If the user enters a valid email address, the function will set a cookie with the name "userName"
 * and the value of the user's name. 
 * 
 * If the user does not enter a valid email address, the function will alert the user to enter a valid
 * email address. 
 * 
 * If the user does not enter a name, the function will alert the user to enter a name.
 **/

function handleClick(cname, cvalue) {
  let userValue = document.getElementById("email").value;

  let pos_of_at = userValue.indexOf("@");


  if (userValue == " " || pos_of_at < 0) {
    alert("You must enter a valid email address");
    document.getElementById("email").focus();
  } else {
    
    cvalue = document.getElementById("userName").value;
    if(cvalue == "") {
      alert("You must enter a name")
    }

    else{
      document.cookie = cname + " = " + cvalue + ";";

    window.location.href = "choice.html";
    }

    


  }
}

/**
 * It takes a cookie name as a parameter and returns the value of the cookie.
 */
function getCookie(cname) {
  let name = cname + "=";

  let decodedCookie = decodeURIComponent(document.cookie);

  let ca = decodedCookie.split(";");

  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];

    c = c.trim();

    if (c.indexOf(c) == 0) {
      return c.substring(name.length, c.length);
    }
  }

  return "cookie not found";
}




/**
 * The function checkCookie() is called when the page loads. It calls the function getCookie() which
 * returns the value of the cookie named "userName" and then displays it in the HTML element with the
 * id "userName".
 * 
 * The function display_date() is called when the page loads. It displays the current date and time in
 * the HTML element with the id "date".
 */
function checkCookie() {
  document.getElementById("userName").innerHTML = getCookie();

}

function display_date() {
  let CDate = new Date()
  let NewDate=CDate.toDateString(); 
  let refresh=1000;
  NewDate = NewDate + " - " + CDate.toLocaleTimeString();
  document.getElementById('date').innerHTML = NewDate;
  mytime=setTimeout('display_date()',refresh);
}

checkCookie();
display_date();



 