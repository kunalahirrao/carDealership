import "./index.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarTimes, faCoffee, faLocationArrow, faTaxi } from '@fortawesome/free-solid-svg-icons'
const Features = () => {
    return <>
        <section id="features">
            <div class="box bg-light">
            <FontAwesomeIcon icon={faTaxi} size="3x" />
                <h3>Great Service</h3>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Est,
                    dignissimos.
                </p>
            </div>
            <div class="box bg-primary">
            <FontAwesomeIcon icon={faLocationArrow} size="3x" />
                <h3>Great Location</h3>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Est,
                    dignissimos.
                </p>
            </div>
            <div class="box bg-light">
            <FontAwesomeIcon icon={faCalendarTimes} size="3x" />
                <h3>On Time Delivery</h3>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Est,
                    dignissimos.
                </p>
            </div>
        </section>
    </>
}

export default Features