console.log(window.innerWidth); //breedte
console.log(window.innerHeight); //hoogte
let imageNames = ["een.png",
  "twee.png",
  "drie.png",
  "vier.png",
  "vijf.png",
  "zes.png",
  "zeven.png",
  "acht.png",
  "negen.png",
  "tien.png",
  "elf.png",
  "twaalf.png",
  "dertien.png",
  "veertien.png",
  "vijftien.png",
  "zestien.png",
  "zeventien.png",
  "achttien.png",
  "negentien.png",
  "twintig.png"
];
let tumbs = document.getElementById('tumbs');
let display = document.getElementById('display');

let number = 0;
let picRow = 5; //how many pictures every row
let picAmount = 20; //how many pictures in total
let picLast = picAmount - 1;
//bij starten script een random image grote weergave
selectImage(Math.floor(Math.random() * imageNames.length));

//maak de kleine images aan
for (let i = 0; i < imageNames.length; i++) {
  let tumb = new Image();
  //images worden uitde map small gehaald
  tumb.src = "images/small/" + imageNames[i];
  tumb.id = i;
  tumbs.appendChild(tumb);
  tumb.addEventListener("click", function(e) {
    selectImage(e.target.id);
  });
}

right.addEventListener("click", function(z) {
  selectImageR();
  console.log("right");
});
left.addEventListener("click", function(z) {
  selectImageL();
  console.log("left");
});
up.addEventListener("click", function(z) {
  selectImageU();
  console.log("up");
});
down.addEventListener("click", function(z) {
  selectImageD();
  console.log("down");
});


function selectImage(id) {
  //image wordt uit de map big gehaald
  display.src = "images/big/" + imageNames[id];
  number = id;
  console.log(number);
}

function selectImageR() {

  ++number;
  if (number < picAmount) {

    display.src = "images/big/" + imageNames[number];
  } else {
    number = 0;
    display.src = "images/big/" + imageNames[number];
  }
}

function selectImageL() {

  --number;
  if (number > -1) {

    display.src = "images/big/" + imageNames[number];
  } else {
    number = picLast;
    display.src = "images/big/" + imageNames[number];
  }
}

function selectImageD() {
  number = Number(number);
  number = number + picRow;
  if (number < picAmount) {

    display.src = "images/big/" + imageNames[number];
  } else {
    number = number - picRow;
    display.src = "images/big/" + imageNames[number];
  }
}

function selectImageU() {

  number = number - picRow;
  if (number > -1) {

    display.src = "images/big/" + imageNames[number];
  } else {
    number = number + picRow;
    display.src = "images/big/" + imageNames[number];
  }
}
