// Quando retorna essa função componente o next entendi que é o componente é estatico
// chamando uma unica vez o resultado ou valor do props
export async function getServerSideProps() {
    const resp = await fetch('http://localhost:3000/api/produtos')
    const produtos = await resp.json()
    console.log(produtos)
    return {
        props: {
            produtos
        }
    }
}

export default function Dinamico2(props) {
    function renderizarProdutos() {
        return props.produtos.map((produto) => {
            return <li key={produto.id}>
                {produto.id} - {produto.nome} tem preço de R${produto.preco}
            </li>
        })
    }

    return (
        <div>
            <h1>Dinânimco #02</h1>
            <ul>
                {renderizarProdutos()}
            </ul>
        </div>
    )
}