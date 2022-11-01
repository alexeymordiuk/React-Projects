import star1 from '../../img/starships/1.png'
import star2 from '../../img/starships/2.png'
import star3 from '../../img/starships/3.png'
import star4 from '../../img/starships/4.png'


export type classes = {
    id: number,
    title: string
    text: string,
    img: string,
    about: string,
    desc: string,
    invent: string,
    inventory: string,
    link: string
}

export const shipsClass: classes[] = [
    {
        id: 0,
        link: '/aboutfirst',
        title: 'Fighter',
        text: 'More info',
        img: star1,
        about: 'The peculiarity of this type is that it has increased attack and defense, as it is designed for battles. These are the most recognizable ships in No Mans Sky and are also highly sought after by pirates in the game.',
        desc: 'Description',
        invent: 'Inventory',
        inventory: 'The inventory of representatives of this type is not very large: the small ones have 15-19, the medium ones have 20-29, and the large ones have 30-38.'
    },
    {
        id: 1,
        link: '/aboutfirst',
        title: 'Travaller',
        text: 'More info',
        img: star2,
        about: 'The main feature of this type is the high range of the hyperdrive. These starships have the most unusual appearance among all other types.',
        desc: 'Description',
        invent: 'Inventory',
        inventory: 'Starships of this type have an inventory size of 15-19 for small, 20-29 for medium, and 30-38 for large.'
    },
    {
        id: 2,
        link: '/aboutfirst',
        title: 'Tractor',
        text: 'More info',
        img: star3,
        about: 'Ships of this class are equipped with a class bonus - shield absorption, and also have the largest inventories. They are the largest of the starships, and may or may not have wing features. But this also means that they are one of the most expensive ships in the game, requiring over a million units to purchase, and they need to be repaired the most when they are broken.',
        desc: 'Description',
        invent: 'Inventory',
        inventory: 'The inventory of tractors is equal - for small 25-31, for medium 32-39, for large 40-48'
    },
    {
        id: 3,
        link: '/aboutfirst',
        title: 'Shuttle',
        text: 'More info',
        img: star4,
        about: 'Ships of this Archetype have balanced stats, with no significant class bonus compared to the other archetypes. These ships look typically blocky and small with a square-ish canopy, though some ships in this class do sometimes use a tube-like fuselage.',
        desc: 'Description',
        invent: 'Inventory',
        inventory: 'The inventory ranges for Shuttle are 18-23 for small and 19-28 for medium.'
    }
]