import React,{Component} from 'react'
import confLogo from '../images/badge-header.svg'
import Gravatar from './Gravatar'
import "./styles/Badge.css"

class Badge extends Component {
    render(){
        return(
            <div className="badge">
                <div className="badge__header">
                    <img  src={confLogo} alt="logo de la conferencia"/>
                </div>
                <div className="badge__section-name">
                    <Gravatar className="badge__avatar" email={this.props.email} alt="avatar"/>
                    <h1>{this.props.firstName} <br/> {this.props.lastName} </h1>
                </div>
                <div className="badge__section-info">
                    <h3>{this.props.jobTitle}</h3>
                    <div>{this.props.twitter}</div>
                </div>
                <div className="badge__footer">
                    #platziconf
                </div>
            </div>
        )
    }
}

export default Badge