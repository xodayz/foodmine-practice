import { Food } from "./app/shared/models/Food";
import { Tags } from "./app/shared/models/Tags";

export const sample_foods: Food[] = [
    {
        id: "1",
        name: "Pizza",
        price: 9.99,
        tags: ["Fast Food", "Italian Food", "Pizza"],
        favorite: true,
        stars: 4.0,
        imageURL: '/food-1.jpg',
        origins: ["Italy"],
        cookTime: "30 minutes"
    },
    {
        id: "2",
        name: "Burger",
        price: 5.99,
        tags: ["Fast Food", "USA Food", "Hamburger"],
        favorite: false,
        stars: 3.0,
        imageURL: "/food-2.jpg",
        origins: ["USA"],
        cookTime: "20 minutes"
    },
    {
        id: "3",
        name: "Sushi",
        price: 12.99,
        tags: ["Japanese Food", "SlowFood"],
        favorite: true,
        stars: 5.0,
        imageURL: "/food-3.jpg",
        origins: ["Japan"],
        cookTime: "40 minutes"
    }
]

export const sample_tags: Tags[] = [
    {name: "All", count: 3},
    {name: "Fast Food", count: 2},
    {name: "Japanese Food", count: 1},
    {name: "SlowFood", count: 1},
    {name: "Pizza", count: 1},
    {name: "Hamburger", count: 1},
    {name: "USA Food", count: 1},
    {name: "Italian Food", count: 1},
]