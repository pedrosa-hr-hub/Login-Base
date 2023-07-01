export async function auth(req, res, next) {
    if (req.session.isAuthenticated) {
        next();
    } else {
        res.status(401).json({ message: 'Unauthenticated. Plase, verify' });
    }
}
