var dataModel = require('../models/dataModel.js');

/**
 * dataController.js
 *
 * @description :: Server-side logic for managing datas.
 */
module.exports = {

    /**
     * dataController.list()
     */
    list: function (req, res) {
        dataModel.find(function (err, datas) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting data.',
                    error: err
                });
            }
            return res.json(datas);
        });
    },

    /**
     * dataController.show()
     */
    show: function (req, res) {
        var id = req.params.id;
        dataModel.findOne({_id: id}, function (err, data) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting data.',
                    error: err
                });
            }
            if (!data) {
                return res.status(404).json({
                    message: 'No such data'
                });
            }
            return res.json(data);
        });
    },

    /**
     * dataController.create()
     */
    create: function (req, res) {
        var data = new dataModel({			temperature : req.body.temperature,			humidity : req.body.humidity,			pressure : req.body.pressure
        });

        data.save(function (err, data) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when creating data',
                    error: err
                });
            }
            return res.status(201).json(data);
        });
    },

    /**
     * dataController.update()
     */
    update: function (req, res) {
        var id = req.params.id;
        dataModel.findOne({_id: id}, function (err, data) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting data',
                    error: err
                });
            }
            if (!data) {
                return res.status(404).json({
                    message: 'No such data'
                });
            }

            data.temperature = req.body.temperature ? req.body.temperature : data.temperature;			data.humidity = req.body.humidity ? req.body.humidity : data.humidity;			data.pressure = req.body.pressure ? req.body.pressure : data.pressure;			
            data.save(function (err, data) {
                if (err) {
                    return res.status(500).json({
                        message: 'Error when updating data.',
                        error: err
                    });
                }

                return res.json(data);
            });
        });
    },

    /**
     * dataController.remove()
     */
    remove: function (req, res) {
        var id = req.params.id;
        dataModel.findByIdAndRemove(id, function (err, data) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when deleting the data.',
                    error: err
                });
            }
            return res.status(204).json();
        });
    }
};
