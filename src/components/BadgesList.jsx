import React,{Component} from 'react'
import {Link} from 'react-router-dom'
import './styles/BadgesList.css'
class BadgesList extends Component{
    render(){

        if(this.props.badges.length === 0){
           return <div>
                <h3>no encontramos ningun badge</h3>
                <Link className="btn btn-primary" to="/badges/new">crea tu badge </Link>
            </div>
        }


        return (
            <ul className="list-unstyled BadgesList">
                {this.props.badges.map((badge)=>{
                    return(
                            <Link to={`/badges/${badge.id}`}>
                        <li key={badge.id} className="BadgesListItem ">
                                <img src={badge.avatarUrl} alt="" className="BadgesListItem__avatar"/>
                                <div className="text-reset text-decoration-none">
                                    <div>
                                        <strong>{badge.firstName} {badge.lastName}</strong>
                                    </div>
                                    <div className="Twitter__name">
                                        <span className="Twitter__logo">    </span>@{badge.twitter}
                                    </div>
                                    <div>   {badge.jobTitle}    </div>
                                </div>
                        </li>
                            </Link>
                    )
                })}
            </ul>
        )
    }
}

export default BadgesList