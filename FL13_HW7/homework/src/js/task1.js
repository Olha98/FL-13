let twenty = 20;
let four = 4;
let time = new Date().getHours();
let empty = '';
let login = prompt(`Input login`);


  if (login === null && login === empty) {
   alert('Canceled');
  }else if (login.length < four) {
    alert('I don`t know any users having name length less than 4 symbols');
  } else{
    alert('I don’t know you');
  }

 let password = prompt(`Input password`);
   if(password === null && password === empty){
      alert('Wrong password');
  } else if (login === 'User' && password === 'UserPass') {
    if (time < twenty) {
      alert('Good day dear User');
    } else {
      alert('Good evening dear User');
    }
  } else if (login === 'Admin' && password === 'RootPass') {
    if (time < twenty) {
      alert('Good day dear Admin');
    } else {
      alert('Good evening dear Admin');
    }
  } else {
    alert('I don’t know you');
  }


