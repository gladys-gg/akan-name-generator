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
            