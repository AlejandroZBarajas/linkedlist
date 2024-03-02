import { Node } from "./Node.mjs"

export class LinkedList {
    #count
    #head
    #playing=0

    constructor(){
        this.#count = 0
        this.#head = undefined
    }
    getPlaying(){
        return this.#playing
    }
    setPlaying(value){
        this.#playing=value
    }
    pushEl(element) {
        const node = new Node(element)
        let current
        if (this.#head == null){ 
        this.#head = node;
        } else {
        current = this.#head
        while (current.next != null){
        current = current.next;
        }
        current.next = node
        }
        this.#count++
        }
    isEmpty(){
        return this.size() === 0
    }
    size(){
        return this.#count
    }  
}