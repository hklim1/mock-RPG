import InventoryItem from './InventoryItem'

export default class Weapon extends InventoryItem {
    private _damage: number

    constructor(name: string, description: string, price: number, damage: number){
        super(name, description, price)
        this._damage = damage
    }

    public get weaponDamage(){
        return this._damage
    }

    public set weaponDamage(damage: number){
        if (damage < 0) {
            throw new Error('Weapon damage cannot be negative. Please enter a valid number.')
        }
        else (this._damage = damage)
    }
}