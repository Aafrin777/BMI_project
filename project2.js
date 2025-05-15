const form = document.querySelector('form');
//first step is to need to submit form so this time we'll use                  SUBMIT events  than callback
form.addEventListener('submit', function(event){
    event.preventDefault();

    const height = parseInt(document.querySelector('#height').value)

    const weight = parseInt(document.querySelector('#weight').value)

    const results = document.querySelector('#results')

    if (height === '' || height < 0 || isNaN(height)) {
        results.innerHTML = `please give a valid value ${height}`;
    }

    else if(weight === '' || weight < 0 || isNaN(weight)) {
        results.innerHTML = `please give a valid value ${weight}`;
    }

    else{
        const bmi = (weight / ((height*height) / 10000)).toFixed(2);

        //show results
        results.innerHTML = `<span>${bmi}<span>`;
    }
});

/*

-> first select form submit button is inside it and need to submit form

-> formula to calculate BMI:
   weight in kilogram divided by height in meter squared

-> event.preventDefault();
   before we submit hold for a moment

-> parseInt :
   height or weight value might be in string so conver it int and get .value

-> In CONDITION we saying value should not be = empty , 0 , NaN if it is give statement [please give a valid value]

-> toFixed :
   in case result value is too large after calculation so avoid

*/