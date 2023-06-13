//ts-check

/**
 * searchs the data-form attribute found in the html
 * @param {HTMLElement} form - inspects the data-form attribute 
 */ 
const form = document.querySelector("[data-form]");
/**
 * searchs the data-result attribute found in the html
 * @type {HTMLElement<number> | null} result - inspects the data-result attribute
 */
const result = document.querySelector("[data-result]");



form.addEventListener("submit", (event) => {
  event.preventDefault();
  const entries = new FormData(event.target);
  const { dividend, divider } = Object.fromEntries(entries);
  if(!dividend || !divider){  
    result.innerText = "Division not performed. Both values are required in inputs. Try again";
  }else if(dividend < 0 || divider < 0){
    result.innerText = "Division not performed. Invalid number provided. Try again";
    throw new Error (" ");
  }else if(dividend === "yolo" && divider === "+++"){
      document.body.innerHTML = /*html*/ `
      Something critical went wrong. Please reload the page
      `;
  }else{
    result.innerText = parseFloat(Math.floor(dividend / divider));
  }
});