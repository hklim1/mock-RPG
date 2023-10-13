import InventoryItem from './InventoryItem'
import Weapon from './Weapon'
import Armor from './Armor'

export default class Shop {
    private _items: InventoryItem[]

    constructor(item1: InventoryItem, item2: InventoryItem, item3: InventoryItem){
        this._items = [item1, item2, item3]
    }

    public get shopItems(){
        return this._items
    }
}

const sword = new Weapon('sword', 'sharp stick', 20.99, 10)
const bow = new Weapon('bow', 'sharp stick with slingshot', 9.99, 5)
const club = new Weapon('club', 'dull big stick', 5.00, 15)

const shop1 = new Shop(sword, bow, club)

console.log(shop1.shopItems)