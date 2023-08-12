import { useEffect, useState } from 'react'
import { getTasks } from '../helpers/ApiTasks'

export const getAllTask = () => {
  const [dataTasks, setDataTasks] = useState([])
  const [isLoaded, setIsLoaded] = useState(false)
  const [refreshData, setRefreshData] = useState(false)

  const handleRefresh = () => {
    setRefreshData(!refreshData)
  }

  useEffect(() => {
    getTasks().then(res => {
      if (res.status) {
        setDataTasks(res.content)
      }
      setIsLoaded(true)
    })
  }, [refreshData])
  
  dataTasks?.sort((a, b) => (a.estado === 'pendiente' ? -1 : 1));

  return {
    dataTasks,
    setDataTasks,
    isLoaded,
    handleRefresh
  }
}
