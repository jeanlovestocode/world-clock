// hawaii

function updateTime() {
  let hawaiiCity = document.querySelector("#hawaii");
  let hawaiiCityDate = hawaiiCity.querySelector(".date");
  let hawaiiCityTime = hawaiiCity.querySelector(".time");
  let hawaiiTime = moment().tz("US/Hawaii");

  hawaiiCityDate.innerHTML = hawaiiTime.format("MMMM Do YYYY");
  hawaiiCityTime.innerHTML = hawaiiTime.format("h:mm:ss [<small>]A[</small>]");

  // seoul
  let seoulCity = document.querySelector("#seoul");
  let seoulCityDate = seoulCity.querySelector(".date");
  let seoulCityTime = seoulCity.querySelector(".time");
  let seoulTime = moment.tz("Asia/Seoul");

  seoulCityDate.innerHTML = seoulTime.format("MMMM Do YYYY");
  seoulCityTime.innerHTML = seoulTime.format("h:mm:ss [<small>]A[</small>]");

  // vancouver
  let vanCity = document.querySelector("#vancouver");
  let vanCityDate = vanCity.querySelector(".date");
  let vanCityTime = vanCity.querySelector(".time");
  let vanTime = moment.tz("America/Vancouver");

  vanCityDate.innerHTML = vanTime.format("MMMM Do YYYY");
  vanCityTime.innerHTML = vanTime.format("h:mm:ss [<small>]A[</small>]");

  // saopaulo
  let saoCity = document.querySelector("#sao");
  let saoCityDate = saoCity.querySelector(".date");
  let saoCityTime = saoCity.querySelector(".time");
  let saoTime = moment.tz("America/Sao_Paulo");

  saoCityDate.innerHTML = saoTime.format("MMMM Do YYYY");
  saoCityTime.innerHTML = saoTime.format("h:mm:ss [<small>]A[</small>]");
}

updateTime();
setInterval(updateTime, 1000);
