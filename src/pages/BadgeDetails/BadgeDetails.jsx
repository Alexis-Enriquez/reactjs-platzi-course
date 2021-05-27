import React from 'react'
import confLogo from '../../images/platziconf-logo.svg'
import Badge from '../../components/Badge'
import { Link } from 'react-router-dom'
import DeleteBadgeModal from '../../components/DeleteBadgeModal'
import '../../components/styles/BadgeDetails.css'

const BadgeDetails = (props) => {


    return (
        <div>
        <div className="BadgeDetails__hero">
            <div className="container">
                <div className="row">
                    <div className="col-6">
                        <img src={confLogo} alt="logo conferencia"/>
                    </div>
                    <div className="col-6 BadgeDetails__hero-attendant-name">
                        <h1>{props.state.data.firstName} {props.state.data.lastName}</h1>
                    </div>
                </div>
            </div>
        </div>
    
        <div className="container">
            <div className="row">
                <div className="col">
                    <Badge 
                        firstName={props.state.data.firstName}
                        lastName={props.state.data.lastName} 
                        email={props.state.data.email} 
                        twitter={props.state.data.twitter} 
                        jobTitle={props.state.data.jobTitle} 
                        />
                </div>
                <div className="col">
                    <h2>actions</h2>
                    <div>
                        <Link to={`/badges/${props.badgeId}/edit`}>
                            <button className="btn btn-primary mb-4">edit</button> 
                        </Link>
                    </div>
                    <div>
                        <button className="btn btn-danger" onClick={props.onOpenModal}> delete</button>
                        <DeleteBadgeModal 
                            isOpen={props.modalIsOpen} 
                            onClose={props.onCloseModal}
                            onOpen={props.onOpenModal}
                            onDeleteBadge={props.onDeleteBadge}
                            />
                    
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}

export default BadgeDetails