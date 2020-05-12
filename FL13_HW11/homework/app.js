const data = [
  {
    'folder': true,
    'title': 'Pictures',
    'children': [
      {
        'title': 'logo.png'
      },
      {
        'folder': true,
        'title': 'Vacations',
        'children': [
          {
            'title': 'spain.jpeg'
          }
        ]
      }
    ]
  },
  {
    'folder': true,
    'title': 'Desktop',
    'children': [
      {
        'folder': true,
        'title': 'screenshots',
        'children': null
      }
    ]
  },
  {
    'folder': true,
    'title': 'Downloads',
    'children': [
      {
        'folder': true,
        'title': 'JS',
        'children': null
      },
      {
        'title': 'nvm-setup.exe'
      },
      {
        'title': 'node.exe'
      }
    ]
  },
  {
    'title': 'credentials.txt'
  }
];

const rootNode = document.getElementById('root');

let ul = document.createElement('UL');
rootNode.append(ul);

let li1 = document.createElement('LI');
li1.className = 'folder';
li1.innerText = 'Pictures'
li1.setAttribute('onclick', 'folderClick(event,this)');
let li2 = document.createElement('LI');
li2.className = 'folder';
li2.innerText = 'Desktop'
li2.setAttribute('onclick', 'folderClick(event,this)');
let li3 = document.createElement('LI');
li3.className = 'folder';
li3.innerText = 'Downloads'
li3.setAttribute('onclick', 'folderClick(event,this)');
let li4 = document.createElement('LI');
li4.className = 'file';
li4.innerText = 'credentioals.txt'
li4.setAttribute('onclick', 'fileClick(event,this)');

ul.append(li1);
ul.append(li2);
ul.append(li3);
ul.append(li4);

function folderClick(e, item){
  if(e.which===1){
    let arr = item.innerHTML.split('<');

   switch(arr[0]){
    case 'Pictures':
      if(item.children.length===0){
        item.className = 'openFolder';

        let ul = document.createElement('UL');
        item.append(ul);
        let li1 = document.createElement('LI');
        li1.className = 'file';
        li1.innerText = 'logo.png'

        li1.setAttribute('onclick', 'fileClick(event,this)');
        let li2 = document.createElement('LI');
        li2.className = 'folder';
        li2.innerText = 'Vocations'
        li2.setAttribute('onclick', 'folderClick(event,this)');

        ul.append(li1);
        ul.append(li2);
      }else{
        item.className = 'folder';
        item.firstElementChild.remove();
      }
      break;
      case 'Desktop':
        if(item.children.length===0){
          item.className = 'openFolder';
  
          let ul = document.createElement('UL');
          item.append(ul);
          let li1 = document.createElement('LI');
          li1.className = 'folder';
          li1.innerText = 'screenshots'
          li1.setAttribute('onclick', 'fileClick(event,this)');
          ul.append(li1);

        }else{
          item.className = 'folder';
          item.firstElementChild.remove();
        }

        if(e.which===1){
          if(item.children.length!==0){
            return;
          }
          let name = item.innerText;
          item.innerText = '';
      
          let input = document.createElement('INPUT');
          input.className = 'input'
          input.type = 'text';
          input.value = name;
          item.append(input);
        
      }
        break;
        default : 
   }
  }
}
 

function fileClick(e, item){
 if(e.which===1){
    if(item.children.length!==0){
      return;
    }
    let name = item.innerText;
    item.innerText = '';

    let input = document.createElement('INPUT');
    input.className = 'input'
    input.type = 'text';
    input.value = name;
    item.append(input);

    input.focus();
   input.setSelectionRange(0, item);
   input.addEventListener('blur', () => {
    input.setAttribute('disabled', true);
})
}
}
