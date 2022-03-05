//declaring the arrays

var weekDays =['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];


class Birthday{
    getDayOfWeek(){
        const day=document.querySelector('#day').value;
        const month=document.querySelector('#month').value;
        const year=document.querySelector('#year').value;
    
    if(day==='' || month ==='' || year===''){
    this.showAlert();
    }
    else  if(day <=0 || day >31||  month >12 ){
      this.showAlert();
        }

        else{
            const female = ['Akosua','Adwoa','Abenaa','Akua','Yaa','Afua','Ama'];
            const male = ['Kwasi','Kwadwo','Kwabena','Kwaku','Yaw','Kofi','Kwame'];
            const siku = new Date(`${month} ${day} ${year}`)
            const selection= document.querySelector('#gender');
            const dayResult = document.querySelector('.result-day');
            const nameResult = document.querySelector('.result-name');
            document.querySelector('.result').style.display = 'block';
            
              //  siku.getDay() is the function that get the specific day of birth from the date constructor above
     
    if(selection.value === 'male'){
        if(siku.getDay() === 0) {
          dayResult.innerHTML =`You were born on a Sunday`;
          nameResult.innerHTML = `your Akan name is ${male[0]}`;
        }
        else if(siku.getDay() === 1){
          dayResult.innerHTML =`You were born on a Monday`;
          nameResult.innerHTML = `your Akan name is ${male[1]}`;
        }
        else if(siku.getDay() === 2){
          dayResult.innerHTML =`You were born on a Tuesday`;
          nameResult.innerHTML = `your Akan name is ${male[2]}`;
        }
        else if(siku.getDay() === 3){
          dayResult.innerHTML =`You were born on a Wednesday`;
          nameResult.innerHTML = `your Akan name is ${male[3]}`;
        }
        else if(siku.getDay() === 4){
          dayResult.innerHTML =`You were born on a Thursday`;
          nameResult.innerHTML = `your Akan name is ${male[4]}`;
        }
        else if(siku.getDay() === 5){
          dayResult.innerHTML =`You were born on a Friday`;
          nameResult.innerHTML = `your Akan name is ${male[5]}`;
        }
        else if(siku.getDay() === 6){
          dayResult.innerHTML =`You were born on a Saturday`;
          nameResult.innerHTML = `your Akan name is ${male[6]}`;
        }
          }
          else {
            if(siku.getDay() === 0) {
              dayResult.innerHTML =`You were born on a Sunday`;
              nameResult.innerHTML = `your Akan name is ${female[0]}`;
            }
            else if(siku.getDay() === 1){
              dayResult.innerHTML =`You were born on a Monday`;
              nameResult.innerHTML = `your Akan name is ${female[1]}`;
            }
            else if(siku.getDay() === 2){
              dayResult.innerHTML =`You were born on a Tuesday`;
              nameResult.innerHTML = `your Akan name is ${female[2]}`;
            }
            else if(siku.getDay() === 3){
              dayResult.innerHTML =`You were born on a Wednesday`;
              nameResult.innerHTML = `your Akan name is ${female[3]}`;
            }
            else if(siku.getDay() === 4){
              dayResult.innerHTML =`You were born on a Thursday`;
              nameResult.innerHTML = `your Akan name is ${female[4]}`;
            }
            else if(siku.getDay() === 5){
              dayResult.innerHTML =`You were born on a Friday`;
              nameResult.innerHTML = `your Akan name is ${female[5]}`;
            }
            else if(siku.getDay() === 6){
              dayResult.innerHTML =`You were born on a Saturday`;
              nameResult.innerHTML = `your Akan name is ${female[6]}`;
            }
          }
         }
          
        }

          // show alert Method
  showAlert(){
    // check for any alerts 
    this.clearAlert();
    // create div
    const div = document.createElement('div');
    // add class to the div
    div.className = 'alert';
    // add text to the div
    div.appendChild(document.createTextNode('something is wrong'));
    // get parent
    const container = document.querySelector('.card');
    // get search box
  const search = document.querySelector('.form');
  // insert alert
  container.insertBefore(div,search);
  
   // timeout after 3 seconds 
   setTimeout(()=>{
    this.clearAlert();
  },3000);
  
  }
  // clear alert message
  clearAlert(){
    const currentAlert = document.querySelector('.alert');
    if(currentAlert){
      currentAlert.remove();
    }
  }
  }

    // this code runs the code in the birthday class

const ala = new Birthday();



document.querySelector('.btn-submit').addEventListener('click', getDay)

function getDay(e) {
  ala.getDayOfWeek();
e.preventDefault();
};