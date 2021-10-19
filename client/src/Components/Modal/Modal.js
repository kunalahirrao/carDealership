import { forwardRef } from "react"
import "./index.css"
const Modal = forwardRef((props, ref) => {
    const closeModal = () => {
        ref.current.style.display = "none"; 
        
    }
    return <>
        <div id="myModal" class="modal" ref={ref}>
            <div class="modal-content">
                <span class="close" onClick={closeModal}>&times;</span>
                <p>{props.txt}</p>
            </div>
        </div>
    </>
})

export default Modal