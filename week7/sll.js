class Node {
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor(head =null){
        this.head = head;
        this.tail = null;
    }
    
    //count the length of the list
    size () {
        let count = 0
        let node = this.head;

        while(node != null){
            count++;
            node= node.next;
        }
        return count;
    }
    getLast(){

    }
    
}



let list = new LinkedList();

let hikmah = new Node('hikmah');

list.head = hikmah;
list.tail = hikmah;

//head -> hikmah <- tail
//head -> hikmah -> vinson <- tail

let vinson = new Node('vinson')

hikmah.next = vinson;
list.tail = vinson;

// head -> hikmah -> vinson -> ben <- tail
let ben = new Node('ben')

hikmah.next.next = ben;
list.tail = ben;


let latisha = new Node('latisha')
hikmah.next.next.next = latisha
list.tail = latisha;


//how do we console log. 
