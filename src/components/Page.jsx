import Intro from "./Intro.jsx";
import Student from "./Student.jsx";
import Leader from "./Leader.jsx";
import Guitarist from "./Guitarist.jsx";
import Sailor from "./Sailor.jsx";
import Acrobat from "./Acrobat.jsx";
import Buttons from "./Buttons.jsx";

export default function Page() {
    return (
        <div className="page">
            <Intro/>
            <hr />
            <Buttons />
            <hr />
            <Student/>
            <Leader/>
            <Guitarist/>
            <Sailor/>
            <Acrobat/>
        </div>
    )
}