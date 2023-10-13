import { v4 as uuidv4} from 'uuid'

export default abstract class InventoryItem{
    private readonly _id: string 
    private _name: string 
    private _description: string
    private _price: number

    constructor(name: string, description: string, price: number){
        this._id = uuidv4()
        this._name = name
        this._description = description
        this._price = price
    }

    public get itemId(){
        return this._id
    }

    public get item(){
        return `Item ID #${this._id}: ${this._name}`
    }

    public get itemDesc(){
        return `"${this._name}: ${this._description}"`
    }

    public set itemDesc(desc: string){
        this._description = desc
    }

    public get itemPrice(){
        return this._price
    }

    public set itemPrice(price: number){
        this._price = price >= 0 ? price : 0
    }
}