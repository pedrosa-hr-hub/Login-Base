export async function authenticate(req, res, next) {
    if (req.session.isAuthenticated) {
        next();
    } else {
        res.status(401).json({ message: 'Não autenticado.' });
    }
}
