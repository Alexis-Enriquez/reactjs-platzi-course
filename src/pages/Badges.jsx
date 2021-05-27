import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import confLogo from '../images/badge-header.svg'
import BadgesList from '../components/BadgesList'
import PageLoading from '../components/PageLoading'
import PageError from '../components/PageError'

import '../components/styles/Badges.css'

import api from '../api'

class Badges extends Component{
    //el loading va primero 1.loading 2.error 3.datos recorda ese principio 
        state={
            loading:true,
            data:undefined
        }



    componentDidMount (){
        this.fetchData()

        this.intervalId = setInterval(this.fetchData, 5000) //polling ; tecnica para traer datos automaticamente //hay que cancelarlo en el willunmount para que no se quede ejecutando
    }

    componentWillUnmount(){
        clearInterval(this.intervalId)
    }

    fetchData = async () =>{
        this.setState({ loading: true , error: null })

        //hace una llamada a la api, devuelve una promesa 
        try{
            const data = await api.badges.list()
            this.setState({ loading:false,data:data })
        }catch(error){
            this.setState({ loading:false,error:error })

        }

    }

    render(){

        if(this.state.loading === true && !this.state.data){
            return <PageLoading/>
        }
        
        if(this.state.error){
            return <PageError error = {this.state.error}  />
        }


            return(
                <>
                    <div className="Badges">
                        <div className="Badges__hero">
                            <div className="Badges__container">
                                <img 
                                    className="Badges_conf-logo" 
                                    src={confLogo} 
                                    alt="logo"
                                />
                            </div>
                        </div>
                    </div>
    
                    <div className="Badges__container">
                        <div className="Badges__buttons">
                            <Link to="/badges/new" className="btn btn-primary">New Badge</Link>
                        </div>
                    </div>
    
    
                    <div className="Badges__list">
                        <div className="Badges__container">
                            <BadgesList badges={this.state.data} />
                        </div>
                    </div>
                </>
            )
        }


    }


export default  Badges