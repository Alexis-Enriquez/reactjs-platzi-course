import React from 'react'
import Modal from './Modal'


const DeleteBadgeModal = (props) => {
    return <Modal isOpen={props.isOpen} onClose={props.onClose} >
            <div className="DeleteBadgeModal">
                <h1>Are you Sure ?</h1>
                <div>
                    <button onClick={props.onDeleteBadge} className="btn btn-danger mr-4" >delete</button>
                    <button onClick={props.onClose} className="btn btn-primary" >cancel</button>
                </div>
            </div>
        </Modal>
}

export default DeleteBadgeModal