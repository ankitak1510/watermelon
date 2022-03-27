//var items= document.getElementsByClassName('listgroupitem');
//console.log(items);
//console.log(items[2]);
//items[2].style.backgroundColor='yellow';
//for(var i=0;i<items.length;i++){
 //   items[i].style.fontWeight='bold';
//}

//var li= document.getElementsByTagName('li');
//console.log(li[2]);
//li[2].style.backgroundColor='green';

//var lastitem= document.querySelector('.listgroupitem:last-child');
//lastitem.style.color='blue';

//var titles=document.querySelectorAll('.sheader');
//console.log(titles);
//titles.textContent='hello';

//var odd= document.querySelectorAll('li:nth-child(odd');
//for(var i=0;i<odd.length;i++){
  //  odd[i].style.backgroundColor='#f4f4f4';
//}

var itemlist= document.querySelector('#items');
console.log(itemlist.parentElement);
itemlist.parentElement.style.backgroundColor='yellow';
console.log(itemlist.parentNode.parentNode);
console.log(itemlist.childNode);
console.log(itemlist.nextSibling);
console.log(itemlist.previousSibling);

//var newdiv= document.createElement('div');
//newdiv.className='hello';
//newdiv.id='hello1';
//newdiv.setAttribute('title','hello div');
//var newdivtext= document.createTextNode('hello world');
//newdiv.appendChild(newdivtext);
 // container= document.querySelector('container');
 
 //container.insertBefore(newdiv,sheader);

 //console.log(newdiv);

 
console.log(itemlist.parentElement);

let body=document.getElementById('body');
let list=document.body.childNodes[2];
let item1=document.body.childNodes[4];
let hellow=document.createTextNode("hello world")
let hello=document.createTextNode("hello");
body.insertBefore(hellow, list);

body.insertBefore(hello, item1);

console.log(body.childElementCount);


 






