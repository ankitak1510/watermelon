var form = document.getElementById('myform');
var itemdel = document.getElementById('expenses');
var itemedit = document.getElementById('expenses');

var ul = document.getElementById('expenses');

const posts=[]

const arr=JSON.parse(localStorage.getItem('userdetails')) || [];

let x=-1;
// Form submit event
form.addEventListener('submit', addItem);
// Delete event
itemdel.addEventListener('click', removeItem);
itemedit.addEventListener('click', editItem);

ul.addEventListener('click', removeItem);


// Add item
function addItem(e){
    e.preventDefault();
    
    // Get input value
    const name = document.getElementById('ename').value;
    const amount = document.getElementById('amount').value;
    const type = document.getElementById('type').value;
    const detailsobj={
        name:name,
        amount:amount,
        type:type
    }
    
    var li = document.createElement('li');
    //
    // Add class
    //li.className = 'vxxitem';
    // Add text node with input value
    //li.innerHTML=" Expense name="+(name)+"   , Expense amount= "+(amount)+"   , Expense type= "+type;
    // li.appendChild(document.createTextNode(name))
    // li.appendChild(document.createTextNode(amount))
    // li.appendChild(document.createTextNode(type))
    li.appendChild(document.createTextNode(`Expense Name: ${name} and Expense Amount:${amount} and Expense Type:${type}`));
   
   
    //local storage
    arr.push(detailsobj);
    localStorage.setItem('userdetails',JSON.stringify( arr))
    JSON.parse(localStorage.getItem('userdetails')) 
     
    // Create del button element
    var deleteBtn = document.createElement('button');
    var editbtn=document.createElement('button')
  
    // Add classes to del button
    deleteBtn.className = 'delete';
    //assign id(index) to the delete and edit button //domcontent loaded
  deleteBtn.id=arr.length-1;
  editbtn.id=arr.length-1;
    // Append text node
    deleteBtn.appendChild(document.createTextNode('Delete Expense'));


    editbtn.appendChild(document.createTextNode('Edit Expense'));
  
    // Append button to li
    li.appendChild(deleteBtn);
    li.appendChild(editbtn);
    
  
    // Append li to list
    itemdel.appendChild(li);
  }
  //document.getElementById('expenses').value = "200";
   //console.log(itemdel[x])
   //const parent =document.querySelector('#expenses')
   //const child=parent.querySelector(`#${x}`)
   //console.log(parent)
 
  




function onscreendetails(){
  
  
    arr.forEach((element,index) =>{
      const li=document.createElement('li');
      var deleteBt=document.createElement('button')
      var editBt=document.createElement('button')
      deleteBt.id=index;
      editBt.id=index;
      deleteBt.appendChild(document.createTextNode('Delete Expense'));
      editBt.appendChild(document.createTextNode('Edit Expense'));
    
      deleteBt.className = 'delete';
      

      li.appendChild(document.createTextNode(`Expense Name: ${element.name} and Expense Amount:${element.amount} and Expense Type:${element.type}`));
      li.appendChild(deleteBt);
      li.appendChild(editBt);
      ul.appendChild(li)
      
    });
    
    //console.log(arr)
}
onscreendetails();

   
function editItem(e)
{
  
      var li = e.target.id;
      var l=e.target.parentElement
      //x=li;
      //console.log(li) 
      console.log(l)
      document.getElementById('ename').value=arr[li].name
      document.getElementById('amount').value=arr[li].amount
      document.getElementById('type').value=arr[li].type
      arr.splice(li,1)

        localStorage.removeItem("userdetails")
        localStorage.setItem('userdetails',JSON.stringify( arr))
        itemdel.removeChild(l);
     
      
     
  
}

  // Remove item
function removeItem(e){
    
      if(confirm('Are You Sure?')){
        var li = e.target.id;
        var l=e.target.parentElement
        //console.log(li)        //   --->to check if the value of returned id is correct? 
        arr.splice(li,1)

        localStorage.removeItem("userdetails")
        localStorage.setItem('userdetails',JSON.stringify( arr))
        itemdel.removeChild(l);
        
        
      
    }
  }
  