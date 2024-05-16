function attachGradientEvents() {
  let gradient = document.getElementById(`gradient`);
  gradient.addEventListener(`mousemove`, gradientMove);
  gradient.addEventListener(`mouseout`, gradientOut);
let output= document.getElementById(`result`);

  function gradientMove(event) {
    let final = event.offsetX / (event.target.clientWidth -1)
    
    let percent = Math.trunc(final * 100);
    output.textContent = `${percent}%`;
  }
  function gradientOut(evenet){
    document.getElementById(`result`).textContent="";
  }
};