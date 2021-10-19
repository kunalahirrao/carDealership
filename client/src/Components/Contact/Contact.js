import React, { useState } from 'react'
import axios from "axios"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import "./index.css"

function Contact() {
    let [profile, setProfile] = useState({
        name: "",
        email: "",
        message: ""
    })
    const handleChange = async (event) => {
        event.preventDefault();
        const { name, value } = event.target
        setProfile({ ...profile, [name]: value })
    }
    const onSubmit = async () => {
        await axios.post("http://localhost:3001/car-management/contact",{ ...profile })
        setProfile({
            name: "",
            email: "",
            message: ""
        })
    }
    const formFields = [
        {
            name: "Name",
            field: "name",
        },
        {
            name: "Email",
            field: "email",
        },
        {
            name: "Message",
            field: "message",
        }
    ]
    return (
        <div>
            <section id="contact-form" class="py-3">
                <div class="container">
                    <h1 class="l-heading"><span class="primary-text">Contact</span> Us</h1>
                    <p>Please fill out the form below to contact us</p>
                    <form action="">
                        {
                            formFields.map((item) => {
                                return <>
                                    <div class="form-group">
                                        <label for="name">{item.name}</label>
                                        <input type="name" name={item.field} id={item.field} onChange={handleChange} />
                                    </div>
                                </>
                            })
                        }
                        <button type="submit" class="btn" onClick={onSubmit} >Submit</button>
                    </form>
                </div>
            </section>


            <section id="contact-info" class="bg-dark">
                <div class="container">
                    <div class="box">
                        <FontAwesomeIcon icon={faCoffee} size="3x" />
                        <h3>Location</h3>
                        <p>
                            61,R.K,Nasik-422009
                        </p>
                    </div>
                    <div class="box">
                        <FontAwesomeIcon icon={faCoffee} size="3x" />
                        <h3>Phone No</h3>
                        <p>
                            123456789
                        </p>
                    </div>
                    <div class="box">
                        <FontAwesomeIcon icon={faCoffee} size="3x" />
                        <h3>Email</h3>
                        <p>
                            ka@gmail.com
                        </p>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Contact
