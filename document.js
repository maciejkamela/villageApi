/**
 * Created by camel on 2016-01-04.
 */
module.exports =  function (routes, src) {
    var Table = require('cli-table');
    var table = new Table({ head: ["Method", "Name", "Path"] });
    console.log('\nAPI for this service');
    if(src == 'restify')
    {
        console.log('********************************************');
        console.log('\t\tRESTIFY');
        console.log('********************************************\n');
        for (var key in routes) {
            if (routes.hasOwnProperty(key)) {
                var val = routes[key];
                var _o = {};
                _o[val.method]  = [val.name, val.spec.path ];
                table.push(_o);
            }
        }
    }
    else
    {var table = new Table({ head: ["Method", "Path"] });
        console.log('\n********************************************');
        console.log('\t\tEXPRESS');
        console.log('********************************************\n');
        for (var key in routes) {
            if (routes.hasOwnProperty(key)) {
                var val = routes[key];
                if(val.route)
                {
                    val = val.route;
                    var tableData = {};
                    tableData[val.stack[0].method]  = [val.path ];
                    table.push(tableData);
                }
            }
        }
    }

    console.log('\tMethods amount: ' + table.length);
    console.log(table.toString());
    return table;
};