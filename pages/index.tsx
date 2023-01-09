import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
import PageLayout from './components/PageLayout'


const inter = Inter({ subsets: ['latin'] })

// interface IArticle {
//   author: string,
//   title: string,
//   description: string,
//   url: string,
//   urlToImage: string,
//   publishedAt: Date,
//   content: string
// }

export default function Home({articles}: any) {

  return (
    <PageLayout title='NewsApp - Home'>
      <div className={styles.container}>
          {articles.length === 0 && <p>Articles not found</p>}
          {articles.length > 0 && articles.map((article: any, index: number)=>(
          <article key={index}>
            {/* <img src={article.urlToImage} 
                  alt={`Image for the article ${article.title}`}/> */}
            <h2>{article.title}</h2>
            <p>{article.description}</p>
          </article>
        ))}
      </div>
    </PageLayout>
  )
}

//* N - requests -> se ejecuta 1 vez en build time (o al refrescar la página)
// export async function getStaticProps() {
//   const response = await  fetch('https://newsapi.org/v2/everything?q=tesla&from=2022-12-08&sortBy=publishedAt&apiKey=fc444e84049841d48d9acd5bc405ebd5')
//     const {articles} = await response.json()
//     console.log(articles);
//     return{
//       props:{
//         articles
//       }
//     }
//   }
//* N - requests -> se ejecuta N veces
//* Se utiliza para datos que necesita de constante cambio y son muy dinámicos
export async function getServerSideProps() {
  const response: any = await  fetch('https://newsapi.org/v2/everything?q=tesla&from=2022-12-09&sortBy=publishedAt&apiKey=fc444e84049841d48d9acd5bc405ebd5')
  const {articles} = await response.json()
    return{
      props:{
        articles
      }
    }
}