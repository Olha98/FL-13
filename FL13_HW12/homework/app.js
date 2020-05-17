document.querySelector('.')


const root = document.getElementById('root');
 root.ClassName = 'saction';
 let templates = [{
   parent: root,
   tag: 'DIV',
   className: 'container',
   innerText: 'Rictrepresents a list of booksures',
   onclick: false},
  {parent: root,
   tag :'div',
   className: 'content',
   innerText: 'Preview',
   onclick: false}];
 
 
 let divs = [];
 for (let i = 0; i < 2; i++) {
     divs.push(create( templates[i]));
 }
 
 function create(template){
     let el = document.createElement(template.tag);
     el.className = template.className;
     el.innerText = template.innerText;
     if (template.onclick){
         el.setAttribute('onclick', template.onclick);
     }
     template.parent.append(el);
     return el;
 }

 let ul = create({parent: divs[0] , tag: 'ul', className: 'nav', innerText: '', onclick: false});
 
 let link = ['add', 'edit', 'preview']
 
 let links = {};
 
 for (let i = 0; i < data.length; i++) {
     let li = create({parent: ul, tag: 'LI', className: 'book', innerText: ''})
     li.setAttribute('id', 'book' + data[i].id);
 
     let a = create({parent: li, tag: 'A', className: 'clickEdit', innerText: data[i].name}, onclick = false);
     let href = '?id={' + data[i].id + '}#preview';
     a.setAttribute('href', href);
 
     let button = create({parent: li, tag: 'BUTTON', className: 'editBook', innerText: 'Edit book', onclick: false});
     links[href] = data[i];
     href = '?id={' + data[i].id + '}#edit';
     button.setAttribute('href', href);
     links[href] = data[i];
 
 }
 console.log(links, 'ok');
 
 
let buttonAdd = create({
  parent: ul , 
  tag: 'BUTTON', 
  className: 'addBook', 
  innerText: 'Add book', 
  onclick: "localStorage.add_book('arr'); arr.value=''"});
let href = '#add';
buttonAdd.setAttribute('href', href);
 links['add'] = 'add';
 
 function add_book(e){
      if(e.which===1){
      divs[1].innerHTML = `
         <form class="add-book">
         <div class="title">
           <label>
             Назва книги:
             <input required type="text" placeholder="Назва книги">
           </label>
         </div>`
 }
         return divs[1].innerHTML;
 }
 
 function edit_book(){
   let i;
   i
 }
 function preview_book(){
     for (let i = 0; i < data.length; i++) {
    divs[1].innerHTML = `
         <div class="preview_book">
           <div>${data[i]}</div>
         </div>`
  }
  return divs[1].innerHTML
 }
 
 var updatestate,contentEl, navEL;
 
 
 contentEl = document.querySelector('.content');
 navEL = document.querySelector('.nav');
 
 updatestate = function(state){
   if(!state){
      return;
   }
 
   if (state.page.split[1] === 'add'){
      alert('add_book');
     add_book(links[state.page]);
   } else if (state.page.split[1] === 'edit'){
       alert('edit_book');
       edit_book(links[state.page]);
   } else {
       alert('preview_book');
       preview_book(links[state.page]);
   }
 };
 
 
 window.addEventListener('hashchange', updatestate);
 
 navEL.addEventListener('click', function(e){
 
 if(e.target.tagName !=='A' && e.target.tagName !=='BUTTON' && e.target.tagName !=='add'){
   return;
 }
 var state;
 state = {
   page: e.target.getAttribute('href')
 };
 history.pushState(state,'', state.page);
 updatestate(state);
 e.preventDefault();
 });
 
 
 
 
 
 