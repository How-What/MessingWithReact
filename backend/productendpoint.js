import Express from 'express';
const router = Express.Router();


router.get('/', (req, res) => {
    res.send("Yo Yo")
})

export default router;