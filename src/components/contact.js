import React from "react";

const Contact = () => {
    return (
        <>
            {/* Container 1 */}
            <h2>Let's make things happen</h2>
            <p>
                Now that you’ve seen what i can do, let’s get in touch and start
                making magic together!
            </p>
            <a href="mailto: pedrcg835@gmail.com">pedrcg835@gmail.com</a>
            {/* Container 1 */}

            {/* form container */}
            <form>
                <label>What's your name?</label>
                <input type="text" name="name" />
                <label>Provide me your email</label>
                <input type="email" name="email" />
                <label>What's up</label>
                <input type="textarea" name="info" />
            </form>
            {/* form container */}
        </>
    );
};

export default Contact;
