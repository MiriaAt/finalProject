
// export  class  ProductService {

//     getProductsSmall() {
//         return  (
//                         fetch(`http://localhost:3010/Babies`)
//                             .then(Response => {
//                                 if (Response.ok && Response.status === 200) {
//                                     return Response.json();
//                                 }
//                             })
//                             .then(data => {
//                                 if (data) {
//                                     console.log(data)

//                                     return data
//                                     // showGroups(data)
//                                 }
//                                 else {
//                                     alert("error");
//                                 }
//                             })
//                             // .then(d => d.data)
//                             );
//     }

//      getProducts() {
//         return fetch('data/products.json').then(res => res.json()).then(d => d.data);
//     }

//      getProductsWithOrdersSmall() {
//         return fetch('data/products-orders-small.json').then(res => res.json()).then(d => d.data);
//     }
// }