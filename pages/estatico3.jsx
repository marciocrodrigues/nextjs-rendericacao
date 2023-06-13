// Quando retorna essa função componente o next entendi que é o componente é estatico
// chamando uma unica vez o resultado ou valor do props
export function getStaticProps() {
    return {
        revalidate: 7, //parametro para dizer de quanto em quanto tempo gera uma nova pagina estatica
        props: {
            numero: Math.random()
        }
    }
}

export default function Estatico3(props) {
    return (
        <div>
            <h1>Estatico #03</h1>
            <h2>{props.numero}</h2>
        </div>
    )
}