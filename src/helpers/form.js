import React from 'react';
import './form.css'

function Form(props) {
    return (
        <form>
            
        </form>
    )
}
function InputField(props) {
    return (
        <div className="row">
            <div className="input-field col s12">
                <label htmlFor={props.id}>{props.name}</label>
                <input key={props.id} id={props.id} name={props.name} type={props.type} onChange={props.onChange} />
                <span className="helper-text red-text">{props.errorMessage}</span>
            </div>
        </div>
    )
}

function Button(props){
    return (
        <button className="btn waves-effect waves-light">{props.buttonText}</button>
    )
}

function SubmitButton(props){
    return (
        <button class="btn waves-effect waves-light" type="submit" name="action">Submit
            <i class="material-icons right">send</i>
        </button>
    )
}

function CancelButton(props){
    return (
        <button class="btn waves-effect waves-light" name="action">Cancel
            <i class="material-icons right">cancel</i>
        </button>
    )
}

function FacebookButton(props){
    return (
        <div className="row">
            <a href={props.url} className="waves-effect waves-light btn social facebook">
            <i className="fa fa-facebook"></i> {props.buttonText}</a>
        </div>
    )
}

function GoogleButton(props){
    return (
        <div className="row">
            <a href={props.url} className="waves-effect waves-light btn social google">
            <i className="fa fa-google"></i> {props.buttonText}</a>
        </div>
    )
}

function ErrorCard(props) {
    return (
        <div className="card-panel red lighten-4">
            {props.errorMessage}
        </div>
    )
}

export {
    Form,
    InputField,
    Button,
    SubmitButton,
    CancelButton,
    FacebookButton,
    GoogleButton,
    ErrorCard
}
