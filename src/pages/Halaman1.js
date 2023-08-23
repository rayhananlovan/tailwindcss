import { useNavigate } from "react-router-dom"
const Halaman1 = () => {
    const navigate = useNavigate()
    return (
        <div>
            <>
            <h2 class="text-6xl">Utility</h2>
            <button class="m-10 bg-black text-white border-solid" onClick={() => navigate('/about')}>Halaman2</button>
            </>
            <section>
                <h2>Halo</h2>
                <div>margin</div>
            </section>  
         </div> 
    )
    }
    
       
    export default Halaman1