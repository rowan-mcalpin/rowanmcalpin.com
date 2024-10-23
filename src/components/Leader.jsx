import SmallGap from "./SmallGap.jsx";
import ExternalLink from './icons/ExternalLink.jsx'

export default function Leader() {
    return (
        <div className="accomplishment-item">
            <h3>LEADER</h3>
            <p>I am in a central leadership position on my high school’s robotics team, Atomic Robotics, which involves
                high levels of team and project management. Additionally, I am the only member on the team that has more
                than a year of programming experience, although I’m working to train members so they can step in when I
                graduate!</p>
            <SmallGap />
            <p>I am one of 7 members of the leadership team for the <a href="https://northcs.org/"
                                                                       className="external-link" rel="nofollow"
                                                                       target="_blank">CS Club at North Seattle
                College <ExternalLink /></a>.
                We run events and workshops for students at North Seattle College, as well as manage a Discord server
                with over 850 members.
            </p>
        </div>
    )
}