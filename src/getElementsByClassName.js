// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className
) {
  var results = [];
  var checkNode = function (node) {
    if ( node.elements.contains(className) ) {
      results.push(node);
    }
    if (node.childNode.contains(className)) {
      node.childNode.forEach(function(item) {
        checkNode(item);
      });

    }
  };
  //compare classname of the node to classname
  // save node if it matches
  // itterate through children nodes
  //for each child we check node
  return results;
};
