const axios = require('axios');

export async function catchStock(req, res) {
    try {
        if (req.ticker === null) {
            res.status(400).json({
                message: 'No ticker in bory, verify requisition',
            });
        } else {
            await axios
                .get(
                    `https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${req.ticker}&apikey=${process.env.ALPHA_KEY}`
                )
                .then((response_api) => {
                    const data = response_api;

                    res.status(200).json({ data: data });
                })
                .catch((error) => {
                    res.status(400).json({ erro: error });
                });
        }
    } catch (error) {
        res.status(500).json({ error_msg: error });
    }
}
