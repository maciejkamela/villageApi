/**
 * Created by camel on 2016-01-16.
 */
function MyModel(model) {
    this.model = model;
}

MyModel.prototype.getRecords = function (start, count, orderType) {
    console.log('limit',arguments);
    return this.model.findAndCountAll({
        order: [
            ['cd', orderType]
        ],
        offset:start,
        limit:count
    });
};
MyModel.prototype.getSingleRecord = function (id) {
    console.log('modellll',this.model);
    return this.model.findByPrimary(id);
};
module.exports = MyModel;
