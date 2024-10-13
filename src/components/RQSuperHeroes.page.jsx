import { useQuery } from "@tanstack/react-query"
import axios from "axios"



const RQSuperHeroesPage = () => {

  const fetchSuperHeroes = async () => {
    // return axios.get("http://localhost:4000/superheroes")
    // return useQuery({
    //   queryKey: ['heroes'],
    //   queryFn: async () => {
    //     const response = await fetch('http://localhost:4000/superheroes')
    //     return await response.json()
    //   },
    // })
  
    let response = await axios.get("http://localhost:4000/superheroes")
    return response?.data
  }

//  const {isLoading, error , data} = useQuery('super-heroes',fetchSuperHeroes)
 let {isLoading, error , data} = useQuery({
  queryKey : ['super-heroes'],
  queryFn : fetchSuperHeroes
 })
  
 console.log(data)
  if(isLoading) {
    return <h2>Loading...</h2>
  }
  if(error) {
    return <h2>{error?.message}</h2>
  }
 
  return (
    <div>
      <h2>RQ Super Heroes Page</h2>
      {data?.length && 
        data?.map((hero) => {
          return <div key={hero?.id}>{hero?.name}</div>
        })
      }
    </div>
  )
}

export default RQSuperHeroesPage