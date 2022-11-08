
import './App.css';
import React from 'react';


    const initialFormData = Object.freeze({
        login: "",
        password: ""
    });
    const App = () => {
        const [formData, updateFormData] = React.useState(initialFormData);

        const handleChange = (e) => {
            updateFormData({
                ...formData,

                // Trimming any whitespace
                [e.target.name]: e.target.value.trim()
            });
        };

        const handleSubmit = (e) => {
            e.preventDefault()
            console.log(formData);
            // ... submit to API or something
        };

        return (
            <div>
                <label>
                    Login
                    <input name="login" onChange={handleChange} />
                </label>
                <br />
                <label>
                    Password
                    <input name="password" onChange={handleChange} type={"password"} />
                </label>
                <br />
                <button onClick={handleSubmit}>Submit</button>
            </div>
        );

}
export default App;
