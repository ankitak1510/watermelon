class stack{
    constructor(){
        this.item=[]
        this.count=0
    }

    push(element){
        this.item[this.count]=element
        console.log(element+" " + "added to" + " " +this.count)
        this.count +=1
        return this.count-1

    }

    pop(){
        if(this.count==0) return undefined
        
        this.count-=1
        console.log(this.item[this.count-1] + " "+ "deleted")
        return this.item[this.count-1]
    }

    peek(){
        console.log("top element is"+ this.item(this.count-1))
        return this.item(this.count-1)
    }

    isEmpty(){
        console.log(this.count==0?'stack is empty':'stack is not empty')
        return this.count==0
    }

}
let stack1= new stack()

stack1.push(100)
stack1.push(200)
stack1.push(300)
stack1.pop()
console.log(stack1.pop())