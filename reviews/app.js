//var object
const reviews = [{
    id: 1,
    name: 'susan smith',
    job: "web developer",
    img:"/img/rev/1_rev.jpeg",
    text:
      '" I´m baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry "',
  },
  {
    id: 2,
    name: "anna johnson",
    job: "web designer",
    img:"/img/rev/2_rev.jpeg",
    text:
      '" Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal. "',
  },
  {
    id: 3,
    name: "peter jones",
    job: "product manager",
    img:"/img/rev/3_rev.jpeg",
    text:
      '" Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag. "',
  },
  {
    id: 4,
    name: "bill anderson",
    job: "cloud engineer",
    img:"/img/rev/5_rev.jpeg",
    text:
     '" Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic "' ,
  },];

// getElements

const img = document.getElementById("img_rev");
const author = document.getElementById("name_rev");
const job = document.getElementById("job");
const review = document.getElementById("text");
const prev = document.getElementById("prev");
const next = document.getElementById("next");

let indexN = 0;


// load

window.addEventListener("DOMContentLoaded", function() { 
    let item = reviews[indexN];
    img.src = item.img;
    author.textContent = item.name;
    job.textContent = item.job;
    review.textContent = item.text;
});

function showPerson(person){
    const item = reviews[person];
    img.src = item.img;
    author.textContent = item.name;
    job.textContent = item.job;
    text.textContent =item.text;
}
next.addEventListener("click", function() {
    indexN++;
    if(indexN > reviews.length -1) {
        indexN = 0;
    }
    showPerson(indexN);
});
prev.addEventListener("click", function(){
    indexN--;
    if(indexN < 0) {
        indexN = reviews.length -1;
    }
    showPerson(indexN);
});
