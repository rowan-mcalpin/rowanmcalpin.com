import headshot from '../assets/headshot.jpg'
import SmallGap from "./SmallGap.jsx";

export default function Intro() {
    return(
        <div>
            <img src={ headshot } alt="Headshot" className="headshot" />
            <SmallGap />
            <h1>Hi, I&#39;m <highlight>Rowan McAlpin</highlight>!</h1>
            <h4><em>Guitarist, software developer, acrobat, sailor</em></h4>

        </div>
    )
}