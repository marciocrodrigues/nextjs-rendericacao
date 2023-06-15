export default function handler(req, res) {
    const id = +req.query.id
    return res.status(200).json({
        id: id,
        nome: `João Almeida ${id}`,
        email: `teste${id}@teste.com.br`
    })
}