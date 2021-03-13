/********************Produit vectoriels + Orthogonal***********************/
let obj = {
  Product: 0,
};
function dot_product(v1, v2, obj) {
  for (let i = 0; i < v1.length; i++) {
    obj.Product += v1[i] * v2[i];
  }
}

function Orthogonal() {
  dot_product(v1, v2, obj);
  if (obj.Product == 0) {
    return "Orthogonal true";
  } else {
    return "Orthogonal false";
  }
}

let v1 = [3, 2.5, 2, 0],
  v2 = [-2, 2, 0.5, 0],
  v3 = [-2, 2, 0.5, 1],
  v4 = [3, 2.5, 2, -1];
Orthogonal();
console.log(Orthogonal(dot_product(v1, v2, obj))); //v3 et v4 false
