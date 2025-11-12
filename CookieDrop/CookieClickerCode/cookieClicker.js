// self-explanitory variables
var cookieCount = 0;
var cookiesPerClick = 1;
var upgrade1Cost = 10;
var upgrade2Cost = 100;

// Event listener for clicking the cookie
    document.getElementById('cookiePicture').addEventListener('click', function() {
        cookieCount = cookieCount + cookiesPerClick;
        document.getElementById('cookiesOutput').innerText = "Cookies: " + Math.floor(cookieCount);
    });

// Event listener for upgrading the cookies per click
    document.getElementById('upgrade1Button').addEventListener('click', function() {
        if (cookieCount >= upgrade1Cost) {
            cookieCount -= upgrade1Cost;
            cookiesPerClick++;
            upgrade1Cost = upgrade1Cost * 1.2;
            document.getElementById('cookiesOutput').innerText = "Cookies: " + Math.floor(cookieCount);
            document.getElementById('cpcOutput').innerText = "Cookies Per Click: " + cookiesPerClick;
            document.getElementById('upgrade1Cost').innerText = "Upgrade Cost: " + Math.floor(upgrade1Cost);
        }
    });
