import img1 from '../../img/gallery/1.jpg'
import img2 from '../../img/gallery/2.jpg'
import img3 from '../../img/gallery/3.jpg'
import img4 from '../../img/gallery/4.jpg'

export type imagesProps = {
    id: number;
    img: string;
}

export const images: imagesProps[] = [
    {
        id: 0,
        img: img1
    },
    {
        id: 1,
        img: img2
    },
    {
        id: 2,
        img: img3
    },
    {
        id: 3,
        img: img4
    }
]