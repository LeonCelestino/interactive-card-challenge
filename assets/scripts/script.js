document.querySelector("[data-js='cardnumberinput']").addEventListener('input', (e) => {
    let target = e.target;
    let position = target.selectionEnd;
    let length = target.value.length;
    
    target.value = target.value.replace(/[^\d]/g, '').replace(/(.{4})/g, '$1 ').trim();
    
    target.selectionEnd = position += ((target.value.charAt(position - 1) === ' ' && target.value.charAt(length - 1) === ' ') ? 1 : 0);
    console.log(length + ' ' + ' ' + target.value.length);

    const liveCardInput = document.querySelector("[data-js='cardnumber']");
    liveCardInput.innerHTML = `<p>${target.value}</p>`
});

const liveCardInput = document.querySelector("[data-js='cardname']");
const cardNameInput = document.querySelector("[data-js='cardnameinput']");

cardNameInput.addEventListener('input', (e) => {
  const { target } = e;
  const { selectionEnd, value } = target;
  const length = value.length;
  const sanitizedValue = value.replace(/[^A-Za-z ]/g, '');

  target.value = sanitizedValue;
  liveCardInput.innerHTML = `<p>${sanitizedValue}</p>`;

  console.log(length)
  if (length >= 26) {
    document.querySelector("#card-name p").style.fontSize = "max(.8rem, .4vw)";
  }
  if (length >= 36) {
    document.querySelector("#card-name p").style.fontSize = "max(.7rem, .4vw)";
  }
});



document.querySelector("[data-js='cardmonthinput']").addEventListener('input', (e) => {
    let target = e.target;
    let position = target.selectionEnd;
    let length = target.value.length;

    target.value = target.value.replace(/[^\d]/g, '')

    const liveCardInput = document.querySelector("[data-js='cardmonth']");
    liveCardInput.innerHTML = `<p>${target.value}</p>`
    if (target.value == 0 || target.value > 12)
    {
        document.querySelector("[data-js='errormessage']").innerHTML = `One year has 12 months, zero  isn't a month aswell. Please, type again`;
        
    } else
    {
        document.querySelector("[data-js='errormessage']").innerHTML = ``;
    }
})


document.querySelector("[data-js='cardyearinput']").addEventListener('input', (e) => {
    let target = e.target;
    let position = target.selectionEnd;
    let length = target.value.length;
    
    target.value = target.value.replace(/[^\d]/g, '')

    const liveCardInput = document.querySelector("[data-js='cardyear']");
    liveCardInput.innerHTML = `<p>${target.value}</p>`

})


document.querySelector("[data-js='cardcvcinput']").addEventListener('input', (e) => {
    let target = e.target;
    let position = target.selectionEnd;
    let length = target.value.length;
    
    target.value = target.value.replace(/[^\d]/g, '')

    const liveCardInput = document.querySelector("[data-js='cardcvc']");
    liveCardInput.innerHTML = `<p>${target.value}</p>`

})



document.querySelector("[data-js='formsubmit']").addEventListener("submit", (e)=>
{
    e.preventDefault();

    /* SELECTING DOM INPUTS */

    const cardname = document.querySelector("[data-js='cardnameinput'");
    const cardnumber = document.querySelector("[data-js='cardnumberinput'");
    const cardmonth = document.querySelector("[data-js='cardmonthinput'");
    const cardyear = document.querySelector("[data-js='cardyearinput'");
    const cardcvc = document.querySelector("[data-js='cardcvcinput'");

    const domArr = [cardname, cardnumber, cardmonth, cardyear, cardcvc];
    const numbersInputArr = [cardnumber, cardyear, cardcvc];

    /* SELECTING FORM SUBMITTING DOM */

    const form = document.querySelector("[data-js='formsubmit']");
    const congratulationsBox = document.querySelector("#submitted");

    const validInputs = Array.from(domArr).filter( el => el.value !== "" );
    console.log(validInputs);
    const validNumberInputs = Array.from(numbersInputArr).filter(el => el.value.length == el.getAttribute("maxlength"));
    const invalidNumberInputs = Array.from(numbersInputArr).filter(el => el.value.length < el.getAttribute("maxlength"));
    console.log(validNumberInputs);
    if (validInputs.length < 5)
    {
        domArr.forEach((el, i) => {
             
            if (el.value === "")
            {

                el.nextElementSibling.classList.add("emptyfield");

            } 
            if (cardmonth.value === "")
            {
                cardmonth.nextElementSibling.nextElementSibling.classList.add("emptyfield")
            }
            
        })
    } 
    else
    {
        
        domArr.forEach((el, i) => {

            el.nextElementSibling.classList.remove("emptyfield");
  
        }) 
        
        if (validNumberInputs.length == 3)
        {
            validNumberInputs.forEach((el) =>
            {
                 el.nextElementSibling.classList.remove("invalidnumber");
            })

            if (cardmonth.value == 0 || cardmonth.value > 12)
            {
                cardmonth.nextElementSibling.nextElementSibling.classList.add("invaliddate");
            } 
            else
            {   
                cardmonth.nextElementSibling.nextElementSibling.classList.remove("invaliddate");

                if(cardyear.value < 22)
                {
                    cardyear.nextElementSibling.classList.add("cardexpired");
                } 
                else
                {
                    cardyear.nextElementSibling.classList.remove("cardexpired");

                    form.classList.add("opacity-animation");
                    setTimeout(()=>
                    {
                        form.classList.add("active");
                        congratulationsBox.classList.add("active");
                        
                    }, 500);
                    
                    setTimeout(()=>congratulationsBox.classList.add("opacity-animation"), 1000);
                   
                }
            }
        } 
        else
        {
            invalidNumberInputs.forEach((el) =>
                {
                    el.nextElementSibling.classList.add("invalidnumber");
                })
        }
    }
    
    
})