console.log("Starting JS-InjectionPineappleKiller...")
document.write('<h1 id="pklogo" style="color:CYAN">JS-InjectionPineappleKiller v1.0 | by x04000</h1>')
document.write('<a id="pkgithub" style="color:GREEN" href="https://github.com/x04000">GitHub</a>')
document.write('<h1 id="pkpanellogo" style="color:RED">[Panel]</h1>')
document.write('<span style="color:RED" id="pktext1">[1] </span>')
document.write('<span style="color:BLUE" id="pktext2">Uninject</span><p id="pkp1"></p>')
document.write('<span style="color:RED" id="pktext3">[2] </span>')
document.write('<span style="color:BLUE" id="pktext4">UsernameBruteForce</span><p id="pkp2"></p>')
document.write('<input id="pkinput">')
document.write('<button id="pkbutton" onclick="pkexecute()">Execute</button><p id=pkp3></p>')
document.write('<p id="pkresult"></p>')
function pkuninject() {
    document.getElementById("pklogo").parentNode.removeChild(document.getElementById("pklogo"));
    document.getElementById("pkgithub").parentNode.removeChild(document.getElementById("pkgithub"));
    document.getElementById("pkpanellogo").parentNode.removeChild(document.getElementById("pkpanellogo"));
    document.getElementById("pktext1").parentNode.removeChild(document.getElementById("pktext1"));
    document.getElementById("pktext2").parentNode.removeChild(document.getElementById("pktext2"));
    document.getElementById("pktext3").parentNode.removeChild(document.getElementById("pktext3"));
    document.getElementById("pktext4").parentNode.removeChild(document.getElementById("pktext4"));
    document.getElementById("pkinput").parentNode.removeChild(document.getElementById("pkinput"));
    document.getElementById("pkbutton").parentNode.removeChild(document.getElementById("pkbutton"));
    document.getElementById("pkresult").parentNode.removeChild(document.getElementById("pkresult"));
    document.getElementById("pkp1").parentNode.removeChild(document.getElementById("pkp1"));
    document.getElementById("pkp2").parentNode.removeChild(document.getElementById("pkp2"));
    document.getElementById("pkp3").parentNode.removeChild(document.getElementById("pkp3"));
}
function pkexecute() {
    let pkinput = document.getElementById("pkinput").value;
    document.getElementById("pkinput").value = "";
    console.log("PineappleKiller > Option = "+pkinput)
    if (pkinput == "1") {
        document.getElementById("pkinput").value = "";
        var pkconfirm = prompt("Are you sure to inject? [Y/n]")
        if (pkconfirm == "Y") {
            pkuninject()
            alert("PineappleKiller > Sucessfully uninjected! Have a good day :)")
        }
        else if (pkconfirm == "y") {
            pkuninject()
            alert("PineappleKiller > Sucessfully uninjected! Have a good day :)")
        }
        else if (pkconfirm == "N") {
            console.log("PineappleKiller > Uninjection operation cancelled")
            alert("PineappleKiller > Uninjection operation cancelled")
            document.getElementById("pkresult").innerHTML = "Uninjection operation cancelled";
        }
        else if (pkconfirm == "n") {
            console.log("PineappleKiller > Uninjection operation cancelled")
            alert("PineappleKiller > Uninjection operation cancelled")
            document.getElementById("pkresult").innerHTML = "Uninjection operation cancelled";
        }
        else {
            console.log("PineappleKiller > Invalid option! Uninjection operation cancelled")
            alert("PineappleKiller > Invalid option! Uninjection operation cancelled")
            document.getElementById("pkresult").innerHTML = "Invalid option! Uninjection operation cancelled";
        }
    }
    if (pkinput == "2") {
        console.log("PineappleKiller > Selected option: UsernameBruteForce")
        var pkfound = 0;
        try {
            console.log("Trying: "+username)
            var pkfound = 1;
        } catch {
            console.log("Try 1 | Variable: username | Invalid")
        }
        if (pkfound == 1) {
            console.log("Try 1 | Variable: username | Value: "+username)
            document.getElementById("pkresult").innerHTML = "Variable: username | Value: "+username;
        }
        else {
            try {
                console.log("Trying: "+user)
                var pkfound = 1;
            } catch {
                console.log("Try 2 | Variable: user | Invalid")
            }
            if (pkfound == 1) {
                console.log("Try 2 | Variable: user | Value: "+user)
                document.getElementById("pkresult").innerHTML = "Variable: user | Value: "+user;
            }
            else {
                try {
                    console.log("Trying: "+Username)
                    var pkfound = 1;
                } catch {
                    console.log("Try 3 | Variable: Username | Invalid")
                }
                if (pkfound == 1) {
                    console.log("Try 3 | Variable: Username | Value: "+Username)
                    document.getElementById("pkresult").innerHTML = "Variable: Username | Value: "+Username;
                }
                else {
                    try {
                        console.log("Trying: "+User)
                        var pkfound = 1;
                    } catch {
                        console.log("Try 4 | Variable: User | Invalid")
                    }
                    if (pkfound == 1) {
                        console.log("Try 4 | Variable: User | Value: "+User)
                        document.getElementById("pkresult").innerHTML = "Variable: User | Value: "+User;
                    }
                    else {
                        try {
                            console.log("Trying: "+usernamecredential)
                            var pkfound = 1;
                        } catch {
                            console.log("Try 5 | Variable: usernamecredential | Invalid")
                        }
                        if (pkfound == 1) {
                            console.log("Try 5 | Variable: usernamecredential | Value: "+usernamecredential)
                            document.getElementById("pkresult").innerHTML = "Variable: usernamecredential | Value: "+usernamecredential;
                        }
                        else {
                            try {
                                console.log("Trying: "+usercredential)
                                var pkfound = 1;
                            } catch {
                                console.log("Try 6 | Variable: usercredential | Invalid")
                            }
                            if (pkfound == 1) {
                                console.log("Try 6 | Variable: usercredential | Value: "+usercredential)
                                document.getElementById("pkresult").innerHTML = "Variable: usercredential | Value: "+usercredential;
                            }
                            else {
                                try {
                                    console.log("Trying: "+Usernamecredential)
                                    var pkfound = 1;
                                } catch {
                                    console.log("Try 7 | Variable: Usernamecredential | Invalid")
                                }
                                if (pkfound == 1) {
                                    console.log("Try 7 | Variable: Usernamecredential | Value: "+Usernamecredential)
                                    document.getElementById("pkresult").innerHTML = "Variable: Usernamecredential | Value: "+Usernamecredential;
                                }
                                else {
                                    try {
                                        console.log("Trying: "+Usercredential)
                                        var pkfound = 1;
                                    } catch {
                                        console.log("Try 8 | Variable: Usercredential | Invalid")
                                    }
                                    if (pkfound == 1) {
                                        console.log("Try 8 | Variable: Usercredential | Value: "+Usercredential)
                                        document.getElementById("pkresult").innerHTML = "Variable: Usercredential | Value: "+Usercredential;
                                    }
                                    else {
                                        try {
                                            console.log("Trying: "+UsernameCredential)
                                            var pkfound = 1;
                                        } catch {
                                            console.log("Try 9 | Variable: UsernameCredential | Invalid")
                                        }
                                        if (pkfound == 1) {
                                            console.log("Try 9 | Variable: UsernameCredential | Value: "+UsernameCredential)
                                            document.getElementById("pkresult").innerHTML = "Variable: UsernameCredential | Value: "+UsernameCredential;
                                        }
                                        else {
                                            try {
                                                console.log("Trying: "+UserCredential)
                                                var pkfound = 1;
                                            } catch {
                                                console.log("Try 10 | Variable: UserCredential | Invalid")
                                            }
                                            if (pkfound == 1) {
                                                console.log("Try 10 | Variable: UserCredential | Value: "+UserCredential)
                                                document.getElementById("pkresult").innerHTML = "Variable: UserCredential | Value: "+UserCredential;
                                            }
                                            else {
                                                console.log("UsernameBruteForce > Username credential isn't found")
                                                document.getElementById("pkresult").innerHTML = "UsernameBruteForce > Username credential isn't found";
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}
console.log("Done!")
alert("PineappleKiller > Sucesfully injected! | by x04000")
console.log("PineappleKiller > Version: 1.0")
console.log("PineappleKiller > by x04000")
console.log("PineappleKiller > GitHub: https://github.com/x04000")