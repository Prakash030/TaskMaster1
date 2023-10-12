const express = require('express');
const router = express.Router();
const User = require('../Models/UserSchema');
const List = require('../Models/ListSchema');


// Create
router.post('/addTask', async (req, res) => {
    try {
        const { title, body, id } = req.body;
        const existingUser = await User.findById(id);

        if (existingUser) {
            const list = new List({ title, body, user: existingUser });
            await list.save().then(() => {
                res.status(200).json({
                    list
                })
            });
            existingUser.list.push(list);
            existingUser.save();
        }
    } catch (error) {
        console.log(error);

    }
})

// Update
router.put('/updateTask/:id', async (req, res) => {
    try {
        const { title, body } = req.body;
        // const existingUser = await User.findOne({ email });
        const list = await List.findByIdAndUpdate(req.params.id, { title, body });
        list.save().then(() => res.status(200).json({ mesaage: "Task updated successfully" }));

    } catch (error) {
        console.log(error);

    }
})

// Delete

router.delete('/deleteTask/:id', async (req, res) => {
    try {
        const { id } = req.body;
        const existingUser = await User.findByIdAndUpdate(id, { $pull: { list: req.params.id } });

        if (existingUser) {
            const list = await List.findByIdAndDelete(req.params.id).then(() => res.status(200).json({ mesaage: "Task Deleted successfully" }));
        }
    } catch (error) {
        console.log(error);

    }
})

// Get Tasks

router.get('/getTask/:id', async (req, res) => {
    const list = await List.find({ user: req.params.id }).sort({ createdAt: -1 });
    if (list.length > 0)
        res.status(200).json({ list: list });
    else
        res.status(404).json({ message: "No Task found" });
})

module.exports = router;