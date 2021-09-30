export default function handler(req, res) {
    const code = req.query.code
    
    res.status(200).json({
        id: code,
        name: `Juliana ${}`,
        email: `juliana12oliver${}@gmail.com`

    })
}