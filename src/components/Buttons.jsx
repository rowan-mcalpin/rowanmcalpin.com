import LinkedIn from "./icons/LinkedIn.jsx";
import GitHub from "./icons/GitHub.jsx";
import Email from "./icons/Email.jsx";

export default function Buttons() {
    return (
        <div>
            <a href="https://www.linkedin.com/in/rowan-mcalpin/" rel="nofollow" target="_blank"><LinkedIn /></a>
            <a href="https://github.com/rowan-mcalpin/" rel="nofollow" target="_blank"><GitHub /></a>
            <a href="mailto:contact@rowanmcalpin.com" rel="nofollow" target="_blank"><Email /></a>
        </div>
    )
}