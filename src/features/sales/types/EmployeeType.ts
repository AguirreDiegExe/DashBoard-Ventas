import type { Order } from "./OrderType";

export interface Employee {
    id:string;
    firstName?:string;
    lastName?:string; 
    OrderId: string; 
    OrderDate?: string;
    OrderItems: Order[];
}