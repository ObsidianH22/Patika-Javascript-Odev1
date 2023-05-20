

let userName = prompt("Lütfen adınızı giriniz!")

let greeting = document.querySelector("#greeting")
greeting.innerHTML=`${greeting.innerHTML} <small class="text1 text-center" style="font-weight: bolder;">${userName}</small>`


setInterval(myTimer, 1000);

function myTimer() {
  const date = new Date();

  let gun = date.getDay();

  let gunler =["Pazar","Pazartesi","Salı","Çarşamba","Perşembe","Cuma","Cumartesi"];

  document.getElementById("myClock").innerHTML = `<span> ${date.toLocaleTimeString()} ${gunler[gun]}</span>`;
}

  

