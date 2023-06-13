// Quando retorna essa função componente o next entendi que é o componente é estatico
// chamando uma unica vez o resultado ou valor do props
export function getStaticProps() {
    return {
        props: {
            numero: Math.random()
        }
    }
}

export default function Estatico2(props) {
    return (
        <div>
            <h1>Estatico #02</h1>
            <h2>{props.numero}</h2>
        </div>
    )
}