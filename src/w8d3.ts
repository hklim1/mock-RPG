import { v4 as uuidv4} from 'uuid'

// SETTING UP TYPES =====================================================================================

type InventoryItem = {
    id: string
    name: string
    description: string
    value: number
} 
    
type Armor = InventoryItem & {
    damage: number
    defense: number
} 
    
type Weapon = InventoryItem & {
    damage: number
    defense: number
} 
    
type RPGCharacter = {
    id: string
    name: string
    archtype:  string
    fightingStyle: 'range' | 'melee'
    inventory: InventoryItem[]
}
    

// CREATING FUNCTIONS =====================================================================================

function createCharacter(name: string, archtype: string, fightingStyle: 'melee' | 'range'): RPGCharacter {
    return {id:uuidv4(), name:name, archtype:archtype, fightingStyle:fightingStyle, inventory:[]}
}
    
function createInventoryItem(name:string, description: string, value:number): Weapon | Armor {
    return {id:uuidv4(), name:name, description:description, value: value, damage: Math.random()*10, defense: Math.random()*10}
}

function addToInventory(obj: Weapon | Armor, character: RPGCharacter): void {
    character.inventory.push(obj)
}

function removeFromInventory(item: InventoryItem, character: RPGCharacter):void{
    character.inventory = character.inventory.filter((currentItem) => currentItem.id != item.id)
}

function inventoryValue(character: RPGCharacter):number {
    let totalValue = 0
    character.inventory.forEach(currentItem => {
        totalValue += currentItem.value
    })
    // for (let i = 0; i < character.inventory.length; i++){
    //     totalValue += character.inventory[i].value
    // }
    return totalValue
}

function printInventory(character: RPGCharacter): void{
    character.inventory.forEach(currentItem => {
        console.log(currentItem)
    })
}


// DRIVER CODE (EMULATING FRONT-END USER) ==================================================================

// - Create an RPGCharacter.
const milad = createCharacter('milad', 'barbarian', 'melee')
console.log(milad)


// - Create 3 InventoryItems (e.g., Sword, Bow, Club)
const sword: Weapon = createInventoryItem('sword', 'sharp stick', 20.00)
const bow: Weapon = createInventoryItem('bow', 'sharp stick with slingshot', 9.99)
const club: Weapon = createInventoryItem('club', 'dull big stick', 5.00)
console.log(sword, bow, club)

// - Add Sword to the character's inventory:
addToInventory(sword, milad)
//     - Print the contents of the character's inventory.
printInventory(milad)
//     - Print the total value of the character's inventory.
console.log(inventoryValue(milad))


// - Add Bows to the character's inventory:
addToInventory(bow, milad)
// - Print the contents of the character's inventory.
printInventory(milad)
// - Print the total value of the character's inventory.
console.log(inventoryValue(milad))


// - Add Clubs to the character's inventory:
addToInventory(club, milad)
// - Print the contents of the character's inventory.
printInventory(milad)
// - Print the total value of the character's inventory.
console.log(inventoryValue(milad))


// - Add Armor to the character's inventory:
const armor: Armor = createInventoryItem('armor', 'body shield made of sticks', 50.00)
addToInventory(armor, milad)
// - Print the contents of the character's inventory.
printInventory(milad)
// - Print the total value of the character's inventory.
console.log(inventoryValue(milad))


// - Use the removeFromInventory function to remove all Swords from the character's inventory:
removeFromInventory(sword, milad)
// - Print the contents of the character's inventory.
printInventory(milad)
// - Print the total value of the character's inventory.
console.log(inventoryValue(milad))