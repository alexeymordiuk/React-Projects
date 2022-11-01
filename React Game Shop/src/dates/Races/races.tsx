import img1 from '../../img/races/35.jpg'
import img2 from '../../img/races/2.png'
import img3 from '../../img/races/42.jpg'
import img4 from '../../img/races/korva.png'
import img5 from '../../img/races/3132.png'
import img6 from '../../img/races/432423.png'


export type racesProps  = {
    id: number;
    img1: string;
    text1: string;
    head1: string;
    text2: string;
    head2: string;
    text3: string;
    head3: string;
    img2: string;
    title: string;
}

export const races: racesProps[] = [
    {
        id: 0,
        title: 'Gek',
        img1: img1,
        text1: 'An amphibious species native to the water-rich system Balaron close to the Galaxy Centre. They are now a mercantile race. Their ancestors once believed themselves to be the first and master race in the galaxies until they had slaughtered',
        head1: 'Summary',
        text2: 'The Gek are a small-statured race with bird-like eye placements and beaks, which often have metal plates, pointing back to their amphibious ancestry. They are bipedal with claw-like fingers, and have a variety of different head accessories.',
        head2: 'Appearance',
        text3: 'Typical Gek are commonly corporate and plutocratic in their mannerisms, with many of their titles tied to trading / industrial related terms. Most of the initial encounters with the species require units (currency). Most Gek monoliths demand players choose a pragmatic approach (putting tortured lifeforms out of their misery, exterminating distant entities etc).',
        head3: 'Culture',
        img2: img2
    },
    {
        id: 1,
        img1: img4,
        title: 'Corvax',
        text1: 'An amphibious species native to the water-rich system Balaron close to the Galaxy Centre. They are now a mercantile race. Their ancestors once believed themselves to be the first and master race in the galaxies until they had slaughtered',
        head1: 'Summary',
        text2: 'The Gek are a small-statured race with bird-like eye placements and beaks, which often have metal plates, pointing back to their amphibious ancestry. They are bipedal with claw-like fingers, and have a variety of different head accessories.',
        head2: 'Appearance',
        text3: 'Typical Gek are commonly corporate and plutocratic in their mannerisms, with many of their titles tied to trading / industrial related terms. Most of the initial encounters with the species require units (currency). Most Gek monoliths demand players choose a pragmatic approach (putting tortured lifeforms out of their misery, exterminating distant entities etc).',
        head3: 'Culture',
        img2: img3
    }, {
        id: 2,
        img1: img5,
        title: 'Vykeen',
        text1: 'An amphibious species native to the water-rich system Balaron close to the Galaxy Centre. They are now a mercantile race. Their ancestors once believed themselves to be the first and master race in the galaxies until they had slaughtered',
        head1: 'Summary',
        text2: 'The Gek are a small-statured race with bird-like eye placements and beaks, which often have metal plates, pointing back to their amphibious ancestry. They are bipedal with claw-like fingers, and have a variety of different head accessories.',
        head2: 'Appearance',
        text3: 'Typical Gek are commonly corporate and plutocratic in their mannerisms, with many of their titles tied to trading / industrial related terms. Most of the initial encounters with the species require units (currency). Most Gek monoliths demand players choose a pragmatic approach (putting tortured lifeforms out of their misery, exterminating distant entities etc).',
        head3: 'Culture',
        img2: img6
    }
]