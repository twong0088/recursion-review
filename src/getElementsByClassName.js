// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
// var getElementsByClassName = function(className
// ) {
//   var results = [];
//   var checkNode = function (node) {
//     var elementClasses = node.classList;
//     if (elementClasses.contains(className)) {
//       results.push(node);

//     }
//     if (node.childNodes) {
//       for (var i = 0; i < node.children.length; i++) {
//         checkNode(node.children[i]);
//       }
//     }

//   };


//   checkNode(document.body);
//   return results;
// };



var getElementsByClassName = function(className
) {
  var results = [];
  var checkNode = function (node) {
    if (node.classList.contains(className) ) {
      results.push(node);
    }
    for (var i = 0; i < node.children.length; i++) {
      checkNode(node.children[i]);
    }

  };

  checkNode(document.body);
  return results;
};