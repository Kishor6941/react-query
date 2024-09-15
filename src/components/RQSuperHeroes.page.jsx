import axios from "axios"
import { useQuery } from "react-query"


const fetchSuperHeroes = () => {
  return axios.get("http://localhost:4000/superheroes")
}

const RQSuperHeroesPage = () => {
 const {isLoading, data, isError, error} = useQuery('super-heroes',fetchSuperHeroes)
  
  if(isLoading) {
    return <h2>Loading...</h2>
  }
  if(isError) {
    return <h2>{error.message}</h2>
  }
 
  return (
    <div>
      <h2>RQ Super Heroes Page</h2>
      {data?.data.length && 
        data?.data.map((hero) => {
          return <div key={hero?.id}>{hero?.name}</div>
        })
      }
    </div>
  )
}

export default RQSuperHeroesPage