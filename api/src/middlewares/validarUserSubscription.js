const DataWorkers = require('../models/DataWorkers');
const Publications = require('../models/Publications');
const User = require('../models/User');

const validarSubscriptionForCreatePost = async (req, res, next) => {
    const { user } = req.body;

    try {
        if(!user) throw new Error('"user" is required');

        const worker = await DataWorkers.findOne({ userId: user })
            .populate('subscription_type', 'name');

        if(!worker) throw new Error('The User no is Worker');
        if(!worker.subscription_type.name) throw new Error('No valid subscription');
        if(!worker.subscribed) throw new Error('Worker no subscribed');

        const posts = await Publications.count({ user, active:true });

        switch(worker.subscription_type.name){
            case 'Standard':
                if (posts < 3) req.body.active = true;
                else req.body.active = false;
                break;
            case 'Premium':
                req.body.active = true;
                break;
            default:
                req.body.active = false;
        }

        next();
    } catch (error) {
        return res.status(400).json({
            ok: false,
            msg: error.message
        });
    };
};

const validarSubscriptionForChangeStatus = async (req, res, next) => {
    const { id } = req.params;

    try {
        const post = await Publications.findById(id);
        
        if(!post) throw new Error('Publication not found');

        const worker = await DataWorkers.findOne({ userId: post.user})
            .populate('subscription_type', 'name');

        if(!worker){
            const cur_user = await User.findById(post.user)
                .populate('user_role', 'name');

            if (!cur_user) throw new Error('The User no exist');
            if (cur_user.user_role.name !== 'admin') throw new Error('The user not is Worker or Admin');
        } else {
            throw new Error('The User no is Worker');
            if(!worker.subscription_type.name) throw new Error('No valid subscription');
            if(!worker.subscribed) throw new Error('Worker no subscribed');
        }
        const posts = await Publications.count({ user: post.user, active: true });

        if (req.body.active){
            switch(worker.subscription_type.name){
                case 'Standard':
                    if (posts >= 3) throw new Error('The Standard plan only allows you to activate 3 publications');
                case 'Premium':
                    break;
                default:
                    throw new Error('You are not allowed to activate publications');
            }
        }

        next();
    } catch (error) {
        return res.status(400).json({
            ok: false,
            msg: error.message
        });
    };
};

    
module.exports = {
    validarSubscriptionForCreatePost,
    validarSubscriptionForChangeStatus
};