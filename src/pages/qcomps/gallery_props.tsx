import {ScientistProfile} from "@/types/scientist-profile";

function Profile({person, unOrderList}: ScientistProfile) {

    return (
        <section className="profile">
            <h2>{person.scientistName}</h2>
            <img
                className="avatar"
                src={person.imageSrc}
                alt={person.scientistName}
                width={70}
                height={70}
            />
            <ul>
                <li>
                    <b>Profession: </b>
                    {unOrderList.professionStr}
                </li>
                <li>
                    <b>Awards: {unOrderList.awardNum} </b>
                    {unOrderList.awardDescription}
                </li>
                <li>
                    <b>Discovered: </b>
                    {unOrderList.scientificDiscovery}
                </li>
            </ul>
        </section>
    );

}

export default function Gallery() {
    return (
        <div>
            <Profile
                person={{scientistName: "Maria Skłodowska-Curie", imageSrc: "https://i.imgur.com/szV5sdGs.jpg"}}
                unOrderList={{
                    professionStr: "physicist and chemist",
                    awardNum: 4,
                    awardDescription: "(Nobel Prize in Physics, Nobel Prize in Chemistry, Davy Medal, Matteucci Medal)",
                    scientificDiscovery: "polonium (element)"
                }}/>

            <Profile
                person={{scientistName: "Katsuko Saruhashi", imageSrc: "https://i.imgur.com/YfeOqp2s.jpg"}}
                unOrderList={{
                    professionStr: "geochemist",
                    awardNum: 2,
                    awardDescription: "(Miyake Prize for geochemistry, Tanaka Prize)",
                    scientificDiscovery: "a method for measuring carbon dioxide in seawater"
                }}/>
        </div>
    );
}