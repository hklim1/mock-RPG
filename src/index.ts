import Character from './rpg/Character'
import Inventory from './rpg/Inventory'
import InventoryItem from './rpg/InventoryItem'
import Shop from './rpg/Shop'
import Weapon from './rpg/Weapon'

const submitBtn = document.getElementById("submit-button")
submitBtn?.addEventListener('click', () => {    
    const character = Character.createRPGCharacter()
    character.showItems()
    character.inventoryHTMLElement()
})


