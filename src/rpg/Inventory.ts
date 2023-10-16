import InventoryItem from './InventoryItem'
import Character from './Character'
import Weapon from './Weapon'
import Armor from './Armor'

export default class Inventory {
    private _items: InventoryItem[]

    constructor(){
        this._items = Inventory.createRPGItems()
    }

    public get inventory(){
        return this._items
    }

    public set inventory(items: InventoryItem[]){
        this._items = items
    }

    showItems(): void{
        const shopDiv = document.getElementById('shop-stuff')
        let shopH = document.createElement('h2')
        shopH.innerText = 'Shop'
        if(shopDiv == null) {
            return;
        }
        shopDiv.innerHTML = ''
        shopDiv?.appendChild(shopH)
        this._items.forEach(currentItem => {
            let itemP = document.createElement('p')
            itemP.innerText = `${currentItem.item}`
            shopDiv?.appendChild(itemP)
    }) }

    removeAllFromInventory(item: InventoryItem): void{
        this._items = this._items.filter((currentItem) => currentItem.itemName != item.itemName)
    }

    removeSpecifiedQuantity (quantity: number, item: InventoryItem){
        let count = 0
        this._items = this._items.filter(i => {
            if (i === item && count < quantity){
                count++
                return false
            }
            return true
        })
    
    }
    displayInventory(): void{
        const characterInventoryDiv = document.getElementById('character-inventory');
        if(characterInventoryDiv == null) {
            return;
        }
        characterInventoryDiv.innerHTML = ''
        this._items.forEach(currentItem => {
            console.log(currentItem)
            const p = document.createElement('p')
            p.innerText = `${currentItem.item}`
            characterInventoryDiv.appendChild(p)
            let removeOneBtn = document.createElement('button')
            removeOneBtn.innerText = `-1`;
            removeOneBtn.addEventListener('click', () => {
                this.removeSpecifiedQuantity(1, currentItem)
                this.displayInventory()        
            })
            let removeAllBtn = document.createElement('button')
            removeAllBtn.innerText = 'Remove All'
            removeAllBtn.addEventListener('click', () => {
                this.removeAllFromInventory(currentItem)
                this.displayInventory()
            })
            characterInventoryDiv.appendChild(removeOneBtn)
            characterInventoryDiv.appendChild(removeAllBtn)
        })
    }

    updateInventory(): string | void{
        if (this._items.length == 0){
            return 'No items in inventory'
        }
        else {
            this.displayInventory()
        }
    }
    
    static createRPGItems(): InventoryItem[] {
        const sword = new Weapon('sword', 'sharp stick', 20.99, 10)
        const shield = new Armor('shield', 'big block', 15.00, 10)
        return [sword, shield]
    }
    // - Rename this method to static createRPGItems() to align with the RPG inventory context.
    // - Modify this method to create and return an array of InventoryItem instances to populate the character's initial inventory.
}