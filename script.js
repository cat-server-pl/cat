var countDownDate = new Date("feb 1, 2024 16:00:00").getTime();
        var x = setInterval(function() {
            var now = new Date().getTime();
            var remaining = countDownDate - now;
            var days = Math.floor(remaining / (1000 * 60 * 60 * 24));
            var hours = Math.floor((remaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            var minutes = Math.floor((remaining % (1000 * 60 * 60)) / (1000 * 60));
            var seconds = Math.floor((remaining % (1000 * 60)) / 1000);
            document.getElementById("timer").innerHTML = days + "d " + hours + "h " + minutes + "m " + seconds + "s ";
            if (remaining < 0) {
                clearInterval(x);
                document.getElementById("timer").innerHTML = "SERWER JEST OTWARTY!";
                document.getElementById("link").style.display = "block"; // Pokaż link do serwera Discord
            }
        }, 1000);