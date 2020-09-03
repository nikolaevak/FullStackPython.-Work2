const dataURL = "https://api.jsonbin.io/b/5f1759b5c1edc466175baf5f";

//const startObj = {
 // "text":[
 //   "Жили-были {var1} да {var2}",
   
 // ]
//}///;

//btn-create
const btnCreate = $('#btn-create') ;
console.log('btn-create', btnCreate);
/*//textResult
const textResult = $('speach');
console.log('textResult', textResult);

btnCreate.click(function () {
  const textResult = $('speach');
  textResult.html(startObj.text);
}); */

const textResult = $("#result1");

//получить данные через getJson
function handleButton() {
  $.getJSON (dataURL, //url 
     function (data) { //callback
         console.log ('data',data) //вывод данных на консоль
         textResult.append(JSON.stringify(data));
        }
);          
    }  

  // взять данные по dataUrl, вытащить их и передать в handleData

//}

function handleData(data) {
  

  // кажется, какой-то из этих способов сработает
  //const var1 = $("input[name=var1]")[0].value();
  const var1 = $("input[name=var1]").val();
  const var2 = $("input[name=var2]").val();
  const var3 = $("input[name=var3]").val();
  const var4 = $("input[name=var4]").val();
  const var5 = $("input[name=var5]").val();
  const var6 = $("input[name=var6]").val();
  const speach = $("textarea[id=exampleSpeach]").val();



  //const var1 = $("input[name=var1]")[0].default()

  //const var1 = $("input[name=var1]").value();
 

  // надо сделать так чтобы сообщения подменились на значения из формы
  let text = {
    "text":[
      `Жили-были ${var1} да ${var2}`,
      `Была у них ${var3}`,
      `Снесла ${var3} ${var4}, не простое - золотое`,
      `- ${var1} бил, бил - не разбил`,
      `- ${var2} била, била - не разбила`,
      `${var5} бежала, ${var6} задела, ${var4} упало и разбилось.`,
      `${var1} плачет, ${var2} плачет, а ${var3} кудахчет:`,
      `${speach}`,
    ]
  };
  
    $("#result1").html(text.text);
  
}

function init() {
  $("#btn-create").click(handleButton);
  $("#btn-replace").click(handleData);
}

$(document).ready(init);
