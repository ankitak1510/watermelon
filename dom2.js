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

var lastitem= document.querySelector('.listgroupitem:last-child');
lastitem.style.color='blue';

var titles=document.querySelectorAll('.sheader');
console.log(titles);
titles.textContent='hello';

var odd= document.querySelectorAll('li:nth-child(odd');
for(var i=0;i<odd.length;i++){
    odd[i].style.backgroundColor='#f4f4f4';
}

