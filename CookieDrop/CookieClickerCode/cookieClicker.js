// self-explanitory variables
var cookieCount = 0;
var cookiesPerClick = 1;
var cookiesPerSecond = 0 * 10 ;
var upgrade1Cost = 10;
var upgrade2Cost = 100;
var upgradeCPC = 0.5 + cookiesPerSecond / 2;
var upgradeCPS = 0.05 + cookiesPerClick / 8 * 10;

//total cookie amount used to scale upgrades when the numbers get very high
var totalCookieAmount = 0;

// main function which updates cookies with CPS and updates the upgradeCPC and upgradeCPS values
var ups = 1000/15
var timer = setInterval(main, ups)

function main()
{
    cookieCount = cookieCount + cookiesPerSecond / 10 

    upgradeCPC = 0.5 + cookiesPerSecond / 2 + (totalCookieAmount/400000);
    upgradeCPS = 0.05 + cookiesPerClick / 8 + (totalCookieAmount/400000);

    document.getElementById('upgrade1Button').innerText = "+" + upgradeCPC.toFixed(2) + " Cookies Per Click: " + (Math.round(upgrade1Cost * 100) / 100) + " Cookies"
    document.getElementById('upgrade2Button').innerText = "+" + upgradeCPS.toFixed(2) + " Cookies Per Second: " + (Math.round(upgrade2Cost * 100) / 100) + " Cookies"
    document.getElementById('cookiesOutput').innerText = "Cookies: " + Math.round(cookieCount * 100) / 100;

    totalCookieAmount = totalCookieAmount + cookiesPerSecond
    
}

// Event listener for clicking the cookie
    document.getElementById('cookiePicture').addEventListener('click', function() {
        cookieCount = cookieCount + cookiesPerClick;
        //document.getElementById('cookiesOutput').innerText = "Cookies: " + Math.round(cookieCount * 100) / 100;
        totalCookieAmount = totalCookieAmount + cookiesPerClick
    });

// Event listener for upgrading the cookies per click
    document.getElementById('upgrade1Button').addEventListener('click', function() {
        if (cookieCount >= upgrade1Cost) {
            cookieCount -= upgrade1Cost;
            cookiesPerClick = cookiesPerClick + 0.5 + cookiesPerSecond/2;
            
            upgrade1Cost = upgrade1Cost * 1.15;
            
            document.getElementById('cookiesOutput').innerText = "Cookies: " + Math.round(cookieCount * 100) / 100;
            document.getElementById('cpcOutput').innerText = "Cookies Per Click: " + Math.round(cookiesPerClick * 100) / 100;

            //old method for cost
            //document.getElementById('upgrade1Cost').innerText = "Upgrade Cost: " + Math.floor(upgrade1Cost);
        }
    });

    document.getElementById('upgrade2Button').addEventListener('click', function() {
        if (cookieCount >= upgrade2Cost) {
            cookieCount -= upgrade2Cost;
            cookiesPerSecond = cookiesPerSecond + 0.05 + cookiesPerClick/8;
            
            upgrade2Cost = upgrade2Cost * 4.5;
            
            document.getElementById('cookiesOutput').innerText = "Cookies: " + Math.round(cookieCount * 100) / 100;
            document.getElementById('cpsOutput').innerText = "Cookies Per Second: " + Math.round(cookiesPerSecond * 100) / 100;
            
            //old method for cost
            //document.getElementById('upgrade1Cost').innerText = "Upgrade Cost: " + Math.floor(upgrade1Cost);
           
        }
    });
