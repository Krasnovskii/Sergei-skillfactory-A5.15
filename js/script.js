dataURL = "https://api.myjson.com/bins/jcmhn";

let arr = "";

function handle(arg) {
  arr = arg["text"];
  let peremen = "";
  for (i in arr) {
    peremen = peremen + arr[i] + "<br>";
  };
  $(".text p").html(peremen);
};

$("#btn-load").click(function() {
  $.getJSON(dataURL, handle);
});

let inpt_data = [];
let input_data_final = "";

$("#btn-change").click(function() {
  $(".form-control").each(function() {
    let input = $(this).val();
    if (input != 0) {
      inpt_data.push($(this).val());
    };
    input = "";
  });
  let p_data = $("div.text p").html();
  let aaarrr = [0, 1, 2, 3, 4, 5, 6];
  for (var j = 0; j <= inpt_data.length; j++) {
    p_data = p_data.split("{" + "var" + (j+1) + "}").join(inpt_data[j]);
    if (j == 6) {
      p_data = p_data.split("{speach}").join("Ко - Ко - Кооооо");
    }
  };
  $(".text p").html(p_data);
});
