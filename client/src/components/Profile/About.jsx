const About = ({data})=>{
    return <div>
        <p>Campus: {data.campus}</p>
        <p>Passing year: {data.passingYear}</p>
        {data.workingCity?<p>{data.workingCity}</p>:null}
        {data.workingCountry?<p>{data.workingCountry}</p>:null}
    </div>
}
export default About;