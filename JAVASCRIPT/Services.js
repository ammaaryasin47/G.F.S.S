let counts = setInterval(updated);
let upto = 0;
function updated() {
   let count = document.getElementById("counter");
   count.innerHTML = ++upto;
   if (upto === 1000) {
      clearInterval(counts);
   }
}
