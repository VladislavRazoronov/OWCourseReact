//import logo from './logo.svg';
import './App.css';
import {Simpson} from './components/Simpsons/Simpson';
import {Character} from './components/RickAndMorty/RnMCharacters'

const App = () => {
    const simpsons =[
        {name:"Homer Simpson",age:36,image:"https://upload.wikimedia.org/wikipedia/en/0/02/Homer_Simpson_2006.png",description:"Homer Jay Simpson (voiced by Dan Castellaneta) is the protagonist of the show and the father of the Simpson family. He embodies several American working class stereotypes: he is crude, overweight, incompetent, clumsy, thoughtless and a borderline alcoholic.[18] He has occasionally displayed flashes of great intellect and fitness whenever the situation calls for it, and an integrity reflecting his own values, including a fierce devotion to and protectiveness of his family. His voice started out as an impression of Walter Matthau but eventually evolved into a more robust voice during the second and third season of the half-hour show, allowing Homer to cover a fuller range of emotions.[11] Homer has since become one of the most influential fictional characters and has been described by the UK newspaper The Sunday Times as the greatest comedic creation of modern time."},
        {name:"Marge Simpson",age:34,image:"https://upload.wikimedia.org/wikipedia/en/0/0b/Marge_Simpson.png",description:"Marjorie Jacqueline \"Marge\" Simpson (née Bouvier, voiced by Julie Kavner) is the well-meaning and extremely patient wife of Homer and mother of Bart, Lisa and Maggie. She often acts as the voice of reason, but displays exaggerated behavior traits of stereotypical mothers and takes the blatant dysfunctionality of her family for granted,[21] unlike the other family members, who are aware that they are eccentric. Her most notable physical feature is her blue hair, styled into an improbably high beehive."},
        {name:"Bart Simpson",age:10,image:"https://upload.wikimedia.org/wikipedia/en/a/aa/Bart_Simpson_200px.png",description:"Bartholomew Jojo \"Bart\" Simpson (voiced by Nancy Cartwright) is the eldest child and only son in the family—at age 10. Bart's most prominent character traits are his mischievousness, rebelliousness, disrespect for authority and sharp wit. During the first two seasons of The Simpsons, Bart was the show's main character. The name \"Bart\" is an anagram of the word \"brat\".[28] Groening conceived Bart as an extreme version of the typical misbehaving child character, merging all of the extreme traits of characters such as Tom Sawyer and Huckleberry Finn into one person.[28] Groening's older brother Mark provided most of the inspiration for Bart.[29][30] Bart's catchphrase \"Eat My Shorts\" was an ad-lib by Cartwright in one of the original table readings, harking back to an incident when she was at college."},
        {name:"Lisa Simpson",age:8,image:"https://upload.wikimedia.org/wikipedia/en/e/ec/Lisa_Simpson.png",description:"Lisa Marie Simpson (voiced by Yeardley Smith) is the eldest daughter and middle child of the family. She is an extremely intelligent 8-year-old girl, one of the most intelligent characters on the show. Lisa's political convictions are generally socially liberal.[36] She is a vegetarian, and a supporter of the Free Tibet movement,[37] and while still supportive of the Christian church in which she was raised,[38] Lisa became a practicing Buddhist following her decision to follow the Noble Eightfold Path.[39] She is musically proficient on the saxophone; besides the occasional riff during the opening credit sequence Carole King's Jazzman and Gerry Rafferty's Baker Street have been prominently placed during episodes. In the Tracey Ullman Show shorts, Lisa was more of a \"female Bart\" and was equally mischievous. As the series progressed, Lisa began to develop into a more intelligent and more emotional character with \"Krusty Gets Busted\" being one of the first episodes where her true intelligence is fully shown."},
        {name:"Maggie Simpson",age:1,image:"https://upload.wikimedia.org/wikipedia/en/9/9d/Maggie_Simpson.png",description:"Margaret Evelyn Lenny \"Maggie\" Simpson is the youngest of the five main family members and is almost always seen as a baby. She has blonde spiked hair like Lisa. Her first word was \"daddy\", shown at one point after Homer tucks her in. She is almost 2 years old and still uses a pacifier despite teething, although this was mentioned in a Treehouse of Horror episode (\"Starship Poopers\") and is not considered canon. She was quite prominent in the Tracey Ullman Show shorts, often being featured alongside Bart and Lisa but has since become the least seen and heard of the five main Simpsons."}
    ]
    const RnMCharacters =[
        {id: 1, name: "Rick Sanchez", status: "Alive", species: "Human",gender: "Male",image: "https://rickandmortyapi.com/api/character/avatar/1.jpeg"},
        {id:2,name:"Morty Smith",status:"Alive",species:"Human",gender:"Male",image:"https://rickandmortyapi.com/api/character/avatar/2.jpeg"},
        {id:3,name:"Summer Smith",status:"Alive",species:"Human",gender:"Female",image:"https://rickandmortyapi.com/api/character/avatar/3.jpeg"},
        {id:4,name:"Beth Smith",status:"Alive",species:"Human",gender:"Female",image:"https://rickandmortyapi.com/api/character/avatar/4.jpeg"},
        {id:5,name:"Jerry Smith",status:"Alive",species:"Human",gender:"Male",image:"https://rickandmortyapi.com/api/character/avatar/5.jpeg"},
        {id:6,name:"Abadango Cluster Princess",status:"Alive",species:"Alien",gender:"Female",image:"https://rickandmortyapi.com/api/character/avatar/6.jpeg"}
        ]
  return (
    <div className="App">
        <h3>The Simpsons:<br/></h3>
        {simpsons.map(simpson =><Simpson props={simpson}/>)}
        <h3>Rick and Morty Characters:<br/></h3>
        {RnMCharacters.map(character =><Character data={character}/>)}
    </div>
  );
}

export {App};
