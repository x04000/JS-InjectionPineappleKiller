console.log("Starting JS-InjectionPineappleKiller...")
document.write('<h1 style="color:CYAN">JS-InjectionPineappleKiller v1.0 | by x04000</h1>')
document.write('<a style="color:GREEN" href="https://github.com/x04000">GitHub</a>')
document.write('<p></p><span>WebName > </span><input id="pkwebname"><p></p>')
document.write('<h1 id="logo" style="color:RED">[Panel]</h1>')
document.write('<span style="color:RED" id="text1">[1] </span>')
document.write('<span style="color:BLUE" id="text2">UsernameBruteForce</span><p></p>')
document.write('<input id="pkinput">')
document.write('<button id="pkbutton" onclick="pkexecute()">Execute</button><p></p>')
document.write('<p id="result"></p>')
function pkexecute() {
    let pkbutton = document.getElementById("pkbutton").innerHTML;
    let pkinput = document.getElementById("pkinput").value;
    let pkwebname = document.getElementById("pkwebname").value;
    console.log("PineappleKiller > Option = "+pkinput)
    if (pkinput == "1") {
        let pkwebname = document.getElementById("pkwebname").value;
        console.log("PineappleKiller > Selected option: GetValueBruteForce")
        console.log("PineappleKiller > WebName = "+pkwebname)
        document.getElementById("pkinput").value = "";
        var pkfound = 0;
        try {
            console.log("Trying: "+username)
            var pkfound = 1;
        } catch {
            console.log("Try 1 | Variable: username | Invalid")
        }
        if (pkfound == 1) {
            console.log("Try 2 | ")
            document.getElementById("result").innerHTML = "Variable: username | Value: "+username;
        }
        else {
            try {
                console.log("Trying: "+user)
                var pkfound = 1;
            } catch {
                console.log("Try 2 | Variable: user | Invalid")
            }
            if (pkfound == 1) {
                document.getElementById("result").innerHTML = "Variable: user | Value: "+user;
            }
        }
    }
}
console.log("Done!")
alert("PineappleKiller > Sucesfully injected! | Thanks for choose PineappleKiller :) | by x04000")
console.log("PineappleKiller > Version: 1.0")
console.log("PineappleKiller > by x04000")
console.log("PineappleKiller > GitHub: https://github.com/x04000")