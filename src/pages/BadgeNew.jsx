import React, { Component } from 'react'
import header from '../images/platziconf-logo.svg'
import Badge from '../components/Badge'
import BadgeForm from '../components/BadgeForm'
import api from '../api'
import PageLoading from '../components/PageLoading'
import '../components/styles/BadgeNew.css'

class BadgeNew extends Component {

    state = {
        loading:false,
        error:null,
        form:{
            firstName:'',
            lastName:'',
            email:'',
            jobTitle:'',
            twitter:'',
        }
    }

    handleChange = e => {
        /* const nextForm = this.state.form
        nextForm[e.target.name] = e.target.value */

        this.setState({
            form:{
                ... this.state.form,
                [e.target.name]: e.target.value
            }
        })
    }

    handleSubmit = async e =>{
        e.preventDefault()
        this.setState({loading:true, error:null})

        try{
            await api.badges.create(this.state.form)
            this.setState({loading:false})
            this.props.history.push('/badges')
        }catch(error){
            this.setState({loading:false, error:error})
        }
    }

    

    render(){

        if(this.state.loading){
            return <PageLoading/>

        }



        return(
            <>
                 
                <div className="BadgeNew__hero">
                    <img className="BadgeNew_hero-image img-fluid" src={header} alt="header"/>
                </div>

                <div className="containter">
                    <div className="row">
                        <div className="col">
                            <Badge 
                                firstName = {this.state.form.firstName || 'FIRST_NAME'} 
                                lastName={this.state.form.lastName || 'LAST_NAME'} 
                                jobTitle={this.state.form.jobTitle || 'JOB_TITLE'} 
                                twitter={this.state.form.twitter || 'TWITTER'} 
                                email={this.state.form.email || 'EMAIL'} 
                                avatar="https://es.gravatar.com/userimage/144312285/a6276aa40956899d13fd703f31da6a66.jpeg"
                            />
                        </div>
                        <div className="col">
                        <h1>New attendant</h1>
                            <BadgeForm 
                                onChange={this.handleChange} 
                                onSubmit ={this.handleSubmit}
                                formValues = {this.state.form}
                                error={this.state.error}
                                />
                        </div>
                    </div>
                </div>
            </>
            )
    }
}

export default BadgeNew