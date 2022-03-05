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