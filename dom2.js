var items= document.getElementsByClassName('listgroupitem');
console.log(items);
console.log(items[2]);
items[2].style.backgroundColor='yellow';
for(var i=0;i<items.length;i++){
    items[i].style.fontWeight='bold';
}