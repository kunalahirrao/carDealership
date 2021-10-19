import { Fragment, useRef, useEffect, useState } from "react";
import "./index.css"
import Modal from "../Modal/Modal"
import axios from "axios"


function Showcase() {
    const modalRef = useRef(null)
    let [cars, setCars] = useState([])
    useEffect(async () => {
        const getCars = async () => {
            const { data } = await axios.get("http://localhost:3001/car-management/cars")
            setCars(data.result)
        }
        getCars()
    }, [])

    const openModal = () => {
        modalRef.current.style.display = "block";
    }
    return <Fragment>
        <div className="scrollmenu">
            {
                cars.map((car) => {
                    return <><img src={car.img} alt="Italian Trulli" onClick={openModal} ></img><Modal ref={modalRef} txt={car.description}></Modal></>
                })
            }
        </div>        
    </Fragment>
}

export default Showcase