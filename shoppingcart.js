/*
    Got a little carried away. Made a stand alone function that does not alter original cart *HW assignment*
    Seperately, I made a customer class with a shopping cart method that did keep track of changes to cart
*/

function shoppingCart(action, object, cart=[]){
    let shoppingCart = cart.slice()
    if(object || action=="empty" || action=='show'){
        switch(action){

        case 'add':
            shoppingCart.push(object); 
            console.log(`Here is your current cart:`)
                for(const item of shoppingCart){
                    console.table(item)
                }
            return shoppingCart
            break;

        case 'remove':
            if(shoppingCart.includes(object)){
                let index = shoppingCart.indexOf(object)
                shoppingCart.splice(index,1)
                console.log(`Here is your new cart:`)
                for(const item of shoppingCart){
                    console.table(item)
                }
                return shoppingCart
            }else{
                console.log("Item is not in your cart, but here is your current cart:")
                for(const item of shoppingCart){
                    console.table(item)
                }
                return shoppingCart
            }   
            
            break;

        case 'empty':
            shoppingCart.splice(0,shoppingCart.length)
            console.log(`Your cart is now empty:`)
            for(const item of shoppingCart){
                console.table(item)
            }
            return shoppingCart
            break;

        case 'show':
            console.log(`Here is your current cart:`)
            for(const item of shoppingCart){
                console.table(item)
            }
            return shoppingCart
            break;

        default:
            console.log("Please select a valid action")
            console.log(`Here is your current cart:`)
            for(const item of shoppingCart){
                console.table(item)
            }
        }
    }else{
        console.log(`You did not designate an object, but here is your current cart:`)
        for(const item of shoppingCart){
            console.table(item)
        }
        return shoppingCart
    }
    }
    

    eggs = {
            name: "Eggs",
            price: 5,
            desc: "Dozen Eggs"
        }
    bacon = {
            name: "Bacon",
            price: 5,
            desc: "Sizzling"
        }
    lettuce = {
            name: "Lettuce",
            price: 5,
            desc: "Crispy Head of Lettuce"
        }
    tomato = {
            name: "Tomato",
            price: 5,
            desc: "Juicy"
        }
    
cart1 =[eggs,bacon,lettuce]

shoppingCart("add", tomato, cart1) 
shoppingCart("remove", tomato, cart1) 
shoppingCart("show", tomato, cart1) 
shoppingCart("empty", tomato, cart1)
 



//===========================================================================================//
//===========================================================================================//
//===========================================================================================//
//===========================================================================================//


class Customer{
    constructor(name, cart=[]){
        this.name = name;
        this.cart=cart;
    }

    enterStore(){
        console.log(`Welcome to our store ${this.name}!`);
    }


    makeItem(itemName, itemPrice, itemDesc){
        return {
            name: itemName,
            price: itemPrice,
            desc: itemDesc
        }
    }

    shoppingCart(action, object){

        if(object || action=="empty" || action=='show'){
            switch(action){
    
            case 'add':
                this.cart.push(object); 
                console.log(`Here is your new cart:`)
                for(const item of this.cart){
                    console.table(item)
                }
                return this.cart
                break;
    
            case 'remove':
                if(this.cart.includes(object)){
                    let index = this.cart.indexOf(object)
                    this.cart.splice(index,1)
                    console.log(`Here is your new cart:`)
                    for(const item of this.cart){
                        console.table(item)
                    }
                    return this.cart
                }else{
                    console.log("Item is not in your cart, but here is your current cart:")
                    for(const item of this.cart){
                        console.table(item)
                    }
                    return this.cart
                }
                
                break;
    
            case 'empty':
                this.cart.splice(0,this.cart.length)
                console.log(`Your cart is now empty:`)
                for(const item of this.cart){
                    console.table(item)
                }
                return this.cart
                break;
    
            case 'show':
                console.log(`Here is your current cart:`)
                for(const item of this.cart){
                    console.table(item)
                }
                return this.cart
                break;
    
            default:
                console.log("Please select a valid action")
                console.log(`Here is your current cart:`)
                for(const item of this.cart){
                    console.table(item)
                }
            }
        }else{
            console.log(`You did not designate an object, but here is your current cart:`)
            for(const item of this.cart){
                console.table(item)
            }
            return this.cart
        }
        }
}



let jalen = new Customer("Jalen")
jalen.enterStore()
let eggs2 = jalen.makeItem('eggs',5,"dozen eggs")
let lettuce2 = jalen.makeItem('lettuce',2,"head of lettuce")
let tomato2 = jalen.makeItem('tomato',3,"juicy")
let bacon2 = jalen.makeItem('bacon',10,"sizzling")
jalen.shoppingCart('add',eggs2)
jalen.shoppingCart('add',lettuce2)
jalen.shoppingCart('add',tomato2)
jalen.shoppingCart('add',bacon2)
jalen.shoppingCart('empty','')
jalen.shoppingCart('add',tomato2)
jalen.shoppingCart('add',bacon2)
jalen.shoppingCart('show','')
jalen.shoppingCart('remove',tomato2)













