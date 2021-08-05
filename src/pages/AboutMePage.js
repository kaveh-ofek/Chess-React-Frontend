import Header from "../components/Header";
import GitLinkedButtons from "../components/GitLinkedButtons";

const AboutMePage = () => {
    return (
        <div>
            <Header></Header>
            <div className='first-about-me'>Hi</div>
            <div className='introduction'>It's Ofek</div>
            <div className='introduction'>I Am a 3rd Year Computer Science With Minor In Biology Student At The Hebrew University Of Jerusalem</div>
            <div className='introduction'>This Is My First Ever React.js Project So I Hope You Enjoy!</div>
            <div className='introduction'>If You Wanna See More:</div>
            <GitLinkedButtons></GitLinkedButtons>
        </div>
    )

}
export default AboutMePage;