tabris.ui.set("toolbarVisible", false);
var page = new tabris.Page({
  topLevel: true
}).open();
//---------------------------------------------------------------------------------------------------------------------------

new tabris.TextView({
  centerX: 0, top: "1%",
  text: "QUICK INSTA-CALCULATOR",
  font: "bold 27px"
}).appendTo(page);

new tabris.Composite({
  top: "8%", height: 1, width: screen.width/1.085, centerX: 0,
  background: "rgba(0,0,0,0.6)"
}).appendTo(page);

var line = new tabris.Composite({
  top: "10%", centerX: 0, bottom: "79%", width: 1,
  background: "black"
}).appendTo(page);

var line2 = new tabris.Composite({
  top: "57.8%", centerX: 0, bottom: 15, width: 1,
  background: "black"
}).appendTo(page);

var box1 = new tabris.Composite({
  top: [line, 5], centerX: 0, width: screen.width/1.25, height: 40,
  background: "black"
}).appendTo(page);

var sum = new tabris.TextView({
  left: 1, right: 1, bottom: 1, top: 1,
  background: "white",
  alignment: "center",
  font: "18px"
}).appendTo(box1);

var box2 = new tabris.Composite({
  top: [box1, 5], centerX: 0, width: screen.width/1.25, height: 40,
  background: "black"
}).appendTo(page);

var minus = new tabris.TextView({
  left: 1, right: 1, bottom: 1, top: 1,
  background: "white",
  alignment: "center",
  font: "18px"
}).appendTo(box2);

var box3 = new tabris.Composite({
  top: [box2, 5], centerX: 0, width: screen.width/1.25, height: 40,
  background: "black"
}).appendTo(page);

var divide = new tabris.TextView({
  left: 1, right: 1, bottom: 1, top: 1,
  background: "white",
  alignment: "center",
  font: "18px"
}).appendTo(box3);

var box4 = new tabris.Composite({
  top: [box3, 5], height: 40, centerX: 0, width: screen.width/1.25,
  background: "black"
}).appendTo(page);

var multiplication = new tabris.TextView({
  left: 1, right: 1, bottom: 1, top: 1,
  background: "white",
  alignment: "center",
  font: "18px"
}).appendTo(box4);

var input1 = new tabris.TextInput({
  left: 15, right: [line, 20] , top: "11%", height: 50,
  keyboard: "number",
  message: "First input",
  alignment: "center"
}).on("input", math).appendTo(page);

var input2 = new tabris.TextInput({
  left: [line, 20], right: 15, top: "11%", height: 50,
  keyboard: "number",
  message: "Second input",
  alignment: "center"
}).on("input", math).appendTo(page);

function math(){
  if (input1.get("text") == "" && input2.get("text") == ""){
    sum.set("text", "")
    minus.set("text", "")
    divide.set("text", "")
    multiplication.set("text", "")
  } else if (!input1.get("text") == "" && !input2.get("text") == "") {
    sum.set("text", (input1.get("text") +" + "+ input2.get("text")) +" = "+(input1.get("text") - -input2.get("text")))
     minus.set("text", (input1.get("text") +" - "+ input2.get("text")) +" = "+(input1.get("text") - input2.get("text")))
      divide.set("text", (input1.get("text") +" / "+ input2.get("text")) +" = "+(input1.get("text") / input2.get("text")))
        multiplication.set("text", (input1.get("text") +" x "+ input2.get("text")) +" = "+(input1.get("text") * input2.get("text")))
  } else if (input1.get("text") == "" && !input2.get("text") == ""){
        sum.set("text", (0 +" + "+ input2.get("text")) +" = "+(0 - -input2.get("text")))
     minus.set("text", (0 +" - "+ input2.get("text")) +" = "+(0 - input2.get("text")))
      divide.set("text", (0 +" / "+ input2.get("text")) +" = "+(0 / input2.get("text")))
        multiplication.set("text", (0 +" x "+ input2.get("text")) +" = "+(0 * input2.get("text")))
  } else if (!input1.get("text") == "" && input2.get("text") == ""){
        sum.set("text", (input1.get("text") +" + "+ 0 +" = "+(input1.get("text") - -0)))
     minus.set("text", (input1.get("text") +" - "+ 0 +" = "+(input1.get("text") - 0)))
      divide.set("text", (input1.get("text") +" / "+ 0 +" = "+(input1.get("text") / 0)))
        multiplication.set("text", (input1.get("text") +" x "+ 0 +" = "+(input1.get("text") * 0)))
  }
}
      
