import React, { useState } from 'react'
import { Link } from 'react-router-dom'


type LoginFormState = {
    email: string;
    password: string;
    rememberMe: boolean;
};


const initialFormState = {
    email: '',
    password: '',
    rememberMe: false,
} as LoginFormState;


export const LoginPage: React.FC = () => {

    const [form, setForm] = useState(initialFormState);

    const onChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = target;
        setForm(
            {
                ...form,
                [name]: value,
            }
        );

    }

    const toggleCheck = () => {
        setForm(
            {
                ...form,
                rememberMe: !form.rememberMe,
            }
        );
    }

    const onSubmit = (ev: React.FormEvent) => {
        ev.preventDefault();
        console.log(form);
    }

    return (

        <form
            className="login100-form validate-form flex-sb flex-w"
            onSubmit={onSubmit}
        >
            <span className="login100-form-title mb-3">
                Chat - Ingreso
            </span>

            <div className="wrap-input100 validate-input mb-3">
                <input
                    className="input100"
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={form.email}
                    onChange={onChange}
                />
                <span className="focus-input100"></span>
            </div>


            <div className="wrap-input100 validate-input mb-3">
                <input
                    className="input100"
                    type="password"
                    name="password"
                    placeholder="Password"
                    onChange={onChange}
                    value={form.password}
                />
                <span className="focus-input100"></span>
            </div>

            <div className="row mb-3">
                <div
                    className="col"
                    onClick={toggleCheck}
                >
                    <input
                        name="rememberMe"
                        className="input-checkbox100"
                        id="ckb1"
                        type="checkbox"
                        checked={form.rememberMe}
                        onChange={onChange}
                    />
                    <label className="label-checkbox100">
                        Recordarme
                    </label>
                </div>

                <div className="col text-right">
                    <Link to="/auth/register" className="txt1">
                        Nueva cuenta?
                    </Link>
                </div>
            </div>

            <div className="container-login100-form-btn m-t-17">
                <button className="login100-form-btn">
                    Ingresar
                </button>
            </div>

        </form>

    )
}
