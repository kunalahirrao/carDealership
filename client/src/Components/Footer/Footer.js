import "./index.css"

const Footer = () => {
    const currentYear = () => {
        return new Date().getFullYear()
    }
    return <>
        <div class="clr"></div>
        <footer id="main-footer">
            <p>Car Mall &copy; {currentYear()} All Rights Reserved</p>
        </footer>
    </>
}

export default Footer