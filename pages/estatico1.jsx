import {useEffect, useState} from "react"

export default function Estatico1() {
    // const [num, setNum] = useState(0)
    // caos tenha algo que altere o valor, utilizar o useEffect para o next compreender que o conteudo é dinamico e não mais estatico
    // useEffect(() => {
    //     setNum(Math.random())
    // }, [])

    return (
        <div>
            <h1>Estático #01</h1>
            {/* <h2>{num}</h2> */}
        </div>
    )
}