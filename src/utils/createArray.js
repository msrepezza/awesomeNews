
export function createArray(dataJson) {
    
    var array = [];
    var ids = Object.keys(dataJson);
    
    ids.forEach(function(id) {
      var items = Object.keys(dataJson[id]);

      items.forEach(function(item) {
        var newData = dataJson[id][item];
        array.push(newData);
      });

    });

    return array;
}