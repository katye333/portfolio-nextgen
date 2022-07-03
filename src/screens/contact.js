import React from 'react';
import { InputText, } from 'primereact/inputtext';
import { InputMask } from 'primereact/inputmask';
import { InputTextarea } from 'primereact/inputtextarea';
import { Button } from 'primereact/button';

import '../App.css';

const Contact = () => {
    const [name, setName] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [phone, setPhone] = React.useState('');
    const [message, setMessage] = React.useState('');


    return (
        <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'center', flex: 1, marginTop: 50, zIndex: 1000}}>
            <div className='contact-container'>
                <h1>Contact Me</h1>
                <hr />

                <form>
                    <span className="p-float-label p-input-icon-left" style={{marginTop: 15, display: 'flex', flexDirection: 'row'}}>
                        <i className="fas fa-user" />
                        <InputText id="contact_name" className='p-inputtext p-component' value={name} onChange={(e) => setName(e.target.value)} />
                        <label htmlFor="contact_name">Name</label>
                    </span>
                    <span className="p-float-label p-input-icon-left" style={{marginTop: 25, display: 'flex', flexDirection: 'row'}}>
                        <i className="fas fa-envelope" />
                        <InputText id="contact_email" className='p-inputtext p-component' value={email} onChange={(e) => setEmail(e.target.value)} />
                        <label htmlFor="contact_email">Email</label>
                    </span>

                    <span className="p-float-label p-input-icon-left" style={{marginTop: 25, display: 'flex', flexDirection: 'row'}}>
                        <i className="fas fa-phone" />
                        <InputMask id="contact_phone" className='p-inputtext p-component' value={phone} onChange={(e) => setPhone(e.value)} mask="(999) 999-9999" />
                        <label htmlFor="contact_phone">Phone Number</label>
                    </span>
                    <span className="p-float-label" style={{marginTop: 25, display: 'flex', flexDirection: 'row', marginBottom: 55}}>
                        <InputTextarea id="contact_message" className='p-inputtextarea' rows={5} cols={50} value={name} onChange={(e) => setName(e.target.value)} />
                        <label htmlFor="contact_message">Message</label>
                    </span>

                    <Button label='Send Message' className='p-button-raised p-button-rounded p-button-block p-button-gradient' icon='fas fa-paper-plane' />
                </form>                
            </div>
        </div>
    )
}

export default Contact;