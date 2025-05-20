import type { Order } from "../../sales/types/OrderType";
import type { OrderItem } from "../../sales/types/OrderType";

export interface Missing{
    OrderID: string,
    ItemId: string,
    hour: string; 
}