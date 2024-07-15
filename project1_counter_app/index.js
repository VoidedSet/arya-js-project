let count = 0
let savedata = document.getElementById("entries")

function increment() {
    count += 1
    document.getElementById("count").innerText = count;
    console.log(count)
}

function save(){
    savedata.innerText += " - " + count
    console.log(count)
}

username = "Kshayik"

welcomeMSG = "Welcome " + username; 

document.getElementById("welcome").innerText = welcomeMSG;