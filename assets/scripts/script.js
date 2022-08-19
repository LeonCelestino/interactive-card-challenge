document.querySelector("[data-js='cardnumberinput']").addEventListener('input', (e) => {
    let target = e.target;
    let position = target.selectionEnd;
    let length = target.value.length;
    
    target.value = target.value.replace(/[^\dA-Z]/g, '').replace(/(.{4})/g, '$1 ').trim();
    
    target.selectionEnd = position += ((target.value.charAt(position - 1) === ' ' && target.value.charAt(length - 1) === ' ') ? 1 : 0);

    const liveCardInput = document.querySelector("[data-js='cardnumber']");
    liveCardInput.innerHTML = `<p>${target.value}</p>`
});


document.querySelector("[data-js='cardnameinput']").addEventListener('input', (e) => {
    let target = e.target;
    let position = target.selectionEnd;
    let length = target.value.length;

    target.value = target.value.replace(/[0-9]/g, '');

    const liveCardInput = document.querySelector("[data-js='cardname']");
    liveCardInput.innerHTML = `<p>${target.value}</p>`
})



document.querySelector("[data-js='cardmonthinput']").addEventListener('input', (e) => {
    let target = e.target;
    let position = target.selectionEnd;
    let length = target.value.length;

    target.value = target.value.replace(/[^\dA-Z]/g, '')

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
    
    target.value = target.value.replace(/[^\dA-Z]/g, '')

    const liveCardInput = document.querySelector("[data-js='cardyear']");
    liveCardInput.innerHTML = `<p>${target.value}</p>`

})


document.querySelector("[data-js='cardcvcinput']").addEventListener('input', (e) => {
    let target = e.target;
    let position = target.selectionEnd;
    let length = target.value.length;
    
    target.value = target.value.replace(/[^\dA-Z]/g, '')

    const liveCardInput = document.querySelector("[data-js='cardcvc']");
    liveCardInput.innerHTML = `<p>${target.value}</p>`

})



document.querySelector("[data-js='submitbutton']").addEventListener("submit", (e)=>
{
    e.preventDefault();

    
})