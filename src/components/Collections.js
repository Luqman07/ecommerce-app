import men from '../images/men-shadow.png'
import access from '../images/access-shadow.png'
import women from '../images/her.png'

const Collections = () => {
    return ( 
        <section className="collections my-5">
            <p className="text-center col-header mb-4">NEW COLLECTIONS</p>
            <div >
                <div className="imag">
                    <img src={men} alt="" width="50px"/>
                    <p className="text-white text h2">MEN</p>
                </div>
                <div className="imag">
                    <img src={access} alt="" width="50px"/>
                    <p className="text-white text h2">ACCESSORIES</p>
                </div>
                <div className="imag">
                    <img src={women} alt="" width="50px"/>
                    <p className="text-white text h2">HER</p>
                </div>
            </div>
        </section>
     );
}
 
export default Collections;