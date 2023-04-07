import dotenv from 'dotenv';
dotenv.config();
const API_URL = process.env.WP_URL;

async function fetchAPI(query, { variables } = {}) {
    const headers = { 'Content-Type': 'application/json' };
    const res = await fetch(API_URL, {
      method: 'POST',
      headers,
      body: JSON.stringify({ query, variables }),
    });
  
    const json = await res.json();
    if (json.errors) {
      console.log(json.errors);
      throw new Error('Failed to fetch API');
    }
  
    return json.data;
}


export async function getAllMagazines(){
  const data= await fetchAPI(`{
    magazines(where:{ orderby: { field: DATE, order: DESC } }) {
      edges {
        node {
          content
          id
          title
          slug
          featuredImage {
            node {
              mediaItemUrl
            }
          }
          alefbaa {
            date
            fidibo
            idpay
            taaghche
          }
        }
      }
    }
  }
  `);

  return data?.magazines.edges.map((item) => {
    return {
        bookImage: item.node.featuredImage.node.mediaItemUrl,
        bookTitle: item.node.title,
        publishDate: item.node.alefbaa.date,
        bookSubtitle: item.node.content.split('>')[1].split('<')[0].substring(0,100)+"...",
        content: item.node.content,
        fidiboUrl: item.node.alefbaa.fidibo,
        buyUrl: item.node.alefbaa.idpay,
        TaagcheUrl: item.node.alefbaa.taaghche,
    };
});
}
export async function getAllNews(){
  const data = await fetchAPI(
    `
    {
      allNews(where:{ orderby: { field: DATE, order: DESC } }) {
        edges {
          node {
            date
            title
            featuredImage {
              node {
                mediaItemUrl
              }
            }
            content
          }
        }
      }
    }
    `
  );

  return data?.allNews.edges.map((item) => {
    return {
        image: item.node.featuredImage.node.mediaItemUrl,
        title: item.node.title,
        date: item.node.date,
        excerpt: item.node.content.split('>')[1].split('<')[0].substring(0,100)+"...",
        content: item.node.content
    };
  })
}
export async function getAllPosts(){}