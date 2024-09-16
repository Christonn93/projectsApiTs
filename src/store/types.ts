export interface Product {
 name: string;
 price: number;
}

export interface User {
 name: string;
 role: "seller" | "buyer" | "management";
}
