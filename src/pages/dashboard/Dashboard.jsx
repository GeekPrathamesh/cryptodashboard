import { useEffect } from "react"
import Dashboardlayout from "../../components/layout/Dashboardlayout"
import Mainlayout from "../../components/layout/Mainlayout"
import { fetchExample } from "../../api/query/examplequery"
import { useQueries, useQuery } from "@tanstack/react-query"



const Dashboard = () => {

const exampleQuery = useQuery({
  queryKey:["example"],
  queryFn:fetchExample,
})
console.log(exampleQuery.data);



  return (
<Dashboardlayout><Mainlayout/></Dashboardlayout>

  )
}

export default Dashboard
