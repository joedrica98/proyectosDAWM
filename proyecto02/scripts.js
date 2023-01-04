var arr = [];
var arr2 = [];

function filtrarByCrypto(value) {
  var table = document.getElementById("columnas-anime");
  table.innerHTML = "";
  $.ajax({
    method: "GET",
    url: `https://api.coingecko.com/api/v3/coins/ethereum/market_chart?vs_currency=usd&days=1&interval=daily`,
    success: function (response) {
      tabla(response, value);
      $.ajax({
        method: "GET",
        url: `https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=usd&days=1&interval=daily`,
        success: function (response) {
          tabla(response, value);
          $.ajax({
            method: "GET",
            url: `https://api.coingecko.com/api/v3/coins/solana/market_chart?vs_currency=usd&days=1&interval=daily`,
            success: function (response) {
              tabla(response, value);
            },
          });
        },
      });
    },
  });
}

function filtrarByCurrency() {
  $.ajax({
    method: "GET",
    url: `https://api.coingecko.com/api/v3/coins/ethereum/market_chart?vs_currency=usd&days=1&interval=daily`,
    success: function (response) {
      tabla2(response);
      $.ajax({
        method: "GET",
        url: `https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=usd&days=1&interval=daily`,
        success: function (response) {
          tabla2(response);
          $.ajax({
            method: "GET",
            url: `https://api.coingecko.com/api/v3/coins/solana/market_chart?vs_currency=usd&days=1&interval=daily`,
            success: function (response) {
              tabla2(response);
            },
          });
        },
      });
    },
  });
}

function tabla(data, value) {
  console.log(data);
  var denominador;
  var table = document.getElementById("columnas-anime");
  if (value == "market_caps") {
    denominador = 320000000000;
  }
  if (value == "total_volumes") {
    denominador = 25000000000;
  }
  if (value == "prices") {
    denominador = 20000;
  }

  var row = `<td style="--size: calc(${data[value][0][1]} / ${denominador})">${data[value][0][1]}</td>`;

  table.innerHTML += row;
}

function tabla2(data) {
  var table = document.getElementById("barras-anime");

  var row = `<td style="--size: calc(${data["prices"][0][1]} / 20000)">${data["prices"][0][1]}</td>`;
  table.innerHTML += row;
}

window.onload = function () {
  filtrarByCrypto("market_caps");
  filtrarByCurrency();
};
