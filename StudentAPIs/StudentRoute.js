const express = require('express');
const router = express.Router();
const StudentDetail = require('./Models/model');

router.get('/', async (req, res) => {
    try {
        const data = await StudentDetail.find()
        if (data)
            return res.status(200).send(data)
        else
            return res.status(400).send('No Data found')
    } catch (e) {
        return res.status(500).send(e)
    }
});

router.get('/:id', async (req, res) => {
    try {
        const {id} = req.params;
        if (StudentDetail.id) {
            const data = await StudentDetail.findById(id)
            return res.status(200).send(data)
        } else {
            return res.status(404).send('User not found')
        }
    } catch (error) {
        res.status(500).send(error)
    }
})

router.post('/add', (req, res) => {
    try {

        const data = new StudentDetail(req.body)
        data.save()
        return res.status(200).send(data);
    } catch (error) {
        res.status(500).send(error)
    }
});

router.put('/edit/:id', async(req,res) => {
    try{
        const {id} = req.params;
        if(id) {
            const data = await StudentDetail.findByIdAndUpdate(id,req.body)
            return res.status(200).send(data)
        }
        else{
            return res.status(404).send('User not found')
        }
    }
    catch (e) {
        return res.status(500).send(e)
    }
})

router.delete('/delete/:id', async (req, res) => {
    const {id} = req.params;
    try {
        if (StudentDetail.id) {
            await StudentDetail.findByIdAndDelete(id);
            return res.status(200).send('Deleted Successfully')
        } else {
            return res.status(404).send('User Not Found')
        }

    } catch (error) {
        res.status(500).send(error)
    }
})

module.exports = router