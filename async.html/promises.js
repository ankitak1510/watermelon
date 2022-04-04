const posts=[
    {title: 'post one', body: 'this is post one', createdAt:new Date().getTime()},
    {title: 'post two', body:'this is post two',createdAt:new Date().getTime()}
 ];
 
 let intervalId=0; 
 
 
    function getpost(){
        clearInterval(intervalId);
        intervalId=setInterval(()=>{
        let output='';
        for(let i=0;i<posts.length;i++){
            output+=`<li>${posts[i].title}- last updates ${((new Date().getTime-posts[i].createdAt)/1000)} seconds ago <\li>`
        }
        console.log('time running id=', intervalId)
        document.body.innerHTML=output;
     },1000)
 
 
 
     function createPost(post){
         return new Promise((resolve,reject)=>{
             setTimeout( ()=>{
                 posts.push(post);
                 const error= false;
                 if(!error){
                     resolve();
                 }
                 else{
                     reject('error:something went wrong');
                 }
             },2000);
         });
        }

        function deletePost(){
         return new Promise( (resolve,reject)=>{
             setTimeout( ()=>{
                 if(post.values !==0){
                     resolve(posts.pop());
                 }
                 else{
                     reject('array is empty now');
                 }
             },1000);
         } );
        }
        createPost({title:'post three', body:'this is post three'})
        create4thPost({titlte:'post four', body:'this is post four'})
 
         function create4thPost(post,callback){
             setTimeout(()=>{
                 posts.push({...post, createdAt:new Date().getTime()})
                 callback()
             },6000)
         }
 
         getpost()
 
         
 
        
 
 
 
         var timer;
         var count=0
         function LastEdited(){
             count=0;
             clearInterval(timer)
             timer=setInterval(()=>{
                 count++;
                 console.log(count)
 
             },5000);}
 
    }
