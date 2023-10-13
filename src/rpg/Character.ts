import { v4 as uuidv4} from 'uuid'
import Inventory from './Inventory'
import Weapon from './Weapon'
import Armor from './Armor'
import InventoryItem from './InventoryItem'

class Character {
    private readonly _id: string
    private _name: string
    private _archtype:  string
    private _fightingStyle: 'range' | 'melee'
    private _inventory: InventoryItem[]

    constructor (name: string, archtype: string, fightingStyle: "range"|"melee"){
        this._id = uuidv4()
        this._name = name
        this._archtype = archtype
        this._fightingStyle = fightingStyle
        this._inventory = []
    }

    public get characterArchtype(){
        return `${this._name}'s archtype is: ${this._archtype}`
    }

    public set characterArchtype(archtype: string){
        this._archtype = archtype
    }

    public get characterFightingStyle(){
        return `${this._fightingStyle}`
    }

    public set characterFightingStyle(fightingStyle: "range" | "melee"){
        this._fightingStyle = fightingStyle
    }

    addToInventory(obj: Weapon | Armor | InventoryItem): void {
        this._inventory.push(obj)
    }

    removeFromInventory(item: Weapon | Armor | InventoryItem): void{
        this._inventory = this._inventory.filter((currentItem) => currentItem.itemId != item.itemId)
    }

    inventoryValue():number {
        let totalValue = 0
        this._inventory.forEach(currentItem => {
            totalValue += currentItem.itemPrice
        })
        return totalValue
    }
    
    printInventory(): void{
        this._inventory.forEach(currentItem => {
            console.log(currentItem)
        })
    }
}

// DRIVER CODE
const milad = new Character('milad', 'barbarian', 'melee')
const sword = new Weapon('sword', 'sharp stick', 20.99, 10)
const bow = new Weapon('bow', 'sharp stick with slingshot', 9.99, 5)
const club = new Weapon('club', 'dull big stick', 5.00, 15)
const inventory1 = new Inventory([sword, bow])

milad.addToInventory(sword)
milad.addToInventory(bow)
milad.printInventory()
console.log("BREAK TIME")
milad.removeFromInventory(sword)
milad.printInventory()
