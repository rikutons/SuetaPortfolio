import React from 'react'

function Contact() {
    return (
        <div>
            <h1 id="contact">Contact</h1>
            <p>何かご相談があれば、気軽にお問い合わせください。</p>
            <a href="mailto:rikutonsueta5055@gmail.com">
                <button className="contact__button">
                    Mail
                </button> 
            </a>
            <div className="contact__section"/>
        </div>
    )
}

export default Contact