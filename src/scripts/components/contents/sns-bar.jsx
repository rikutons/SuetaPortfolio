import React from 'react'

function SNSBar() {
    return (
        <div className="sns-bar">
            <a href="https://twitter.com/sue_in_mct">
                <img className="sns-bar__icon" src="images/sns-icons/Twitter_Logo_Blue.svg"/>
            </a>
            <a href="mailto:rikutonsueta5055@gmail.com">
                <img className="sns-bar__icon" src="images/sns-icons/mail.svg"/>
            </a>
            <a href="https://github.com/rikutons">
                <img className="sns-bar__icon" src="images/sns-icons/GitHub-Mark-Small.svg"/>
            </a>
        </div>
    )
}

export default SNSBar
