/**
 * Created by camel on 2016-01-16.
 */
function NewModel(model) {
    this.model = model;
}

NewModel.prototype.getRecords = function (start, count, orderType) {
    console.log('limit', arguments);
    return this.model.findAndCountAll({
        order: [
            ['cd', orderType]
        ],
        offset: start,
        limit: count
    });
};
NewModel.prototype.getSingleRecord = function (id, myModel) {
    return this.model.findByPrimary(id, {
        include: [{
            model: myModel
        }]
    });
};
NewModel.prototype.getRecordsWithIncludeModel = function (myModel, start, count, orderType) {
    return this.model.findAndCountAll({
        include: [{
            model: myModel
        }],
        order: [
            ['cd', orderType]
        ],
        offset: start,
        limit: count
    });
};
module.exports = NewModel;
