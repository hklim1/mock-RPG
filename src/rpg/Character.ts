import { v4 as uuidv4} from 'uuid'
import Inventory from './Inventory'
import Weapon from './Weapon'
import Armor from './Armor'
import InventoryItem from './InventoryItem'

export default class Character {
    private readonly _id: string
    private _name: string
    private _archtype:  string
    // private _fightingStyle: 'range' | 'melee'
    private _inventory: Inventory

    constructor (name: string, archtype: string){
        this._id = uuidv4()
        this._name = name
        this._archtype = archtype
        // this._fightingStyle = fightingStyle
        this._inventory = new Inventory()
    }

    public get characterInventory(){
        return this._inventory.inventory
    }

    public get characterInven(){
        return this._inventory
    }

    public get characterArchtype(){
        return `${this._name}'s archtype is: ${this._archtype}`
    }

    public set characterArchtype(archtype: string){
        this._archtype = archtype
    }

    // public get characterFightingStyle(){
    //     return `${this._fightingStyle}`
    // }

    // public set characterFightingStyle(fightingStyle: "range" | "melee"){
    //     this._fightingStyle = fightingStyle
    // }

    static createRPGCharacter(): Character{
        const name: string = (<HTMLInputElement>document.getElementById("create-character-name")).value
        if (name == ''){
            throw new Error ('Please enter a valid name.')
        }
        const archtype: string = (<HTMLInputElement>document.getElementById("race-archtype")).value
        if (archtype == ''){
            throw new Error ('Please enter a valid archtype.')
        }
        return new Character(name, archtype)
    }

     addToInventory(obj: Weapon | Armor | InventoryItem): void{
        this._inventory.inventory.push(obj)
    }

    inventoryValue():number {
        let totalValue = 0
        this._inventory.inventory.forEach(currentItem => {
            totalValue += currentItem.itemPrice
        })
        return totalValue
    }
    
    printInventory(): void{
        this._inventory.inventory.forEach(currentItem => {
            console.log(currentItem)
        })
    }

    inventoryHTMLElement(): void {
        const characterDiv = document.getElementById('character-stuff')
        if(characterDiv == null) {
            return;
        }
        characterDiv.innerHTML = '' // need this line to restart with a fresh slate, otherwise will add repeats
        let characterH = document.createElement('h2')
        characterH.innerText = `${this._name}'s Inventory`
        const characterInventoryDiv = document.createElement('div');
        characterInventoryDiv.id = 'character-inventory'
        characterDiv.appendChild(characterH)
        characterDiv.appendChild(characterInventoryDiv)
        this._inventory.updateInventory()
        console.log(characterDiv)
    }

    showItems():void{
        this._inventory.showItems()
    }
}

// DRIVER CODE
// const milad = new Character('milad', 'barbarian', 'melee')
// const sword = new Weapon('sword', 'sharp stick', 20.99, 10)
// const inventory1 = new Inventory([sword, bow])

// milad.addToInventory(sword)
// milad.addToInventory(bow)
// milad.printInventory()
// console.log("BREAK TIME")
// milad.removeFromInventory(sword)
// milad.printInventory()

