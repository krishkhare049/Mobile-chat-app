const { account } = require('../../../models/accountModel')
const { restrict_to_logged_in } = require("../../../middlewares/restrict_to_logged_in");
const { default: mongoose } = require('mongoose');



module.exports = function (app) {

    app.get('/user', restrict_to_logged_in, async (req, res) => {
        const user_id = req.user_id;
        // Using aggregation-
        const user = await account.aggregate([
            {
                $match: {
                    _id: new mongoose.Types.ObjectId(user_id),
                },
            },
            { $limit: 1 },
            {
                $project: {
                    _id: 1,
                    joineddowo: 1,
                    full_name: 1,
                    user_email: 1,
                    // msgsLen: { $size: "$msgs" },
                },
            },
        ]);

        let user_data_obj = user[0];
        // console.log(user_data_obj);

        res.send(user_data_obj);
    })
    app.get('/kk', async (req, res) => {

        res.send('kk');
    })

};