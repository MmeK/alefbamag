// export async function homePagePostsQuery(){
//     const response = await fetch(import.meta.env.WORDPRESS_API_URL, {
//         method: 'post', 
//         headers: {'Content-Type':'application/json'},
//         body: JSON.stringify({
//             query: `{
//                 posts {
//                   nodes {
//                     date
//                     uri
//                     title
//                     commentCount
//                     excerpt
//                     categories {
//                       nodes {
//                         name
//                         uri
//                       }
//                     }
//                     featuredImage {
//                       node {
//                         mediaItemUrl
//                         altText
//                       }
//                     }
//                   }
//                 }
//               }
//             `
//         })
//     });
//     const{ data } = await response.json();
//     return data;
// }