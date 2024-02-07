import { useState, useEffect } from "react";

const Event = () => {
    const [teste, setTeste] = useState(true)

    // React.DOMAttributes<HTMLButtonElement>.onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined

    function mudar(event: React.MouseEvent<HTMLButtonElement>) {
        event
        if(teste === true) {
            setTeste(false)
            return
        } 
        setTeste(true)
    }

    useEffect(() => {
        console.log(teste)
    }, [teste])

    return ( 
        <div>
            <div>
                {teste}
                <button onClick={mudar}>Trocando</button>
            </div>
        </div>
     );
}
 
export default Event;