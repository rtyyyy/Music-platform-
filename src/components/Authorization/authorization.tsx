import { ChangeEvent, useState } from "react";
import "./authorization.css";
import { Link } from "react-router-dom";

const strengthLabels = ["weak", "medium", "strong"];

const Authorization = () => {
    const [strength, setStrength] = useState("");

    const getStrength = (password: string) => {
        console.log(password);

        let strengthIndicator: number = -1;

        let upper = false,
            lower = false,
            numbers = false;

        for (let index = 0; index < password.length; index++) {
            let char = password.charCodeAt(index);
            if (!upper && char >= 65 && char <= 90) {
                upper = true;
                strengthIndicator++;
            }

            if (!numbers && char >= 48 && char <= 57) {
                numbers = true;
                strengthIndicator++;
            }

            if (!lower && char >= 97 && char <= 122) {
                lower = true;
                strengthIndicator++;
            }
        }

        setStrength(strengthLabels[strengthIndicator] ?? "");
    };

    const handleChange = (event: ChangeEvent<HTMLInputElement>) =>
        getStrength(event.target.value);

    return (
        <div className="main" style={{ background: '#300658a4' }}>
            <div className="login-card">
                <h2>Регистрация</h2>
                <form className="login-form">
                    <div className="username">
                        <input
                            autoComplete="off"
                            spellCheck="false"
                            className="control"
                            type="email"
                            placeholder="Email"
                        />
                        <div id="spinner" className="spinner"></div>
                    </div>
                    <input
                        name="password"
                        spellCheck="false"
                        className="control"
                        type="password"
                        placeholder="Password"
                        onChange={handleChange}
                    />

                    <div className={`bars ${strength}`}>
                        <div></div>
                    </div>
                    <div className="strength">{strength && <>{strength} password</>}</div>
                    <button className="control" type="button" ><Link to={'/'} style={{color:"white"}}>
                        Зарегестрироваться</Link>
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Authorization;
