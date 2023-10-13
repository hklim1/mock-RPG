import InventoryItem from './InventoryItem'

export default class Armor extends InventoryItem {
    private _defense: number

    constructor(name: string, description: string, price: number, defense: number){
        super(name, description, price)
        this._defense = defense
    }

    public get armorDefense(){
        return this._defense
    }

    public set armorDefense(defense: number){
        if (defense < 0) {
            throw new Error('Armor defense cannot be negative. Please enter a valid number.')
        }
        else (this._defense = defense)
    }
}