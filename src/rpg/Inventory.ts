import InventoryItem from './InventoryItem'

export default class Inventory {
    private _items: InventoryItem[]

    constructor(items: InventoryItem[]){
        this._items = items
    }

    public get inventory(){
        return this._items
    }
}