import { useEffect, useState } from "react";

export const filterChanges = (dataTasks) => {
  const [filterState, setFilterState] = useState(0);
  const [updateTasks, setUpdatedTasks] = useState([]);

  useEffect(() => {
    if (Object.values(dataTasks).length > 0) {
      setUpdatedTasks(dataTasks);
      filterAllTasks()
    }
  }, [dataTasks]);

  const filterAllTasks = () => {
    setFilterState(0);
    setUpdatedTasks(dataTasks);
  };

  const filterCompletedTasks = () => {
    const newDataTasks = dataTasks?.filter(
      (task) => task.estado == "completado"
    );

    setFilterState(1);
    setUpdatedTasks(newDataTasks);
  };
  const filterPendientTasks = () => {
    const newDataTasks = dataTasks?.filter(
      (task) => task.estado == "pendiente"
    );

    setFilterState(2);
    setUpdatedTasks(newDataTasks);
  };

  return {
    updateTasks,
    filterState,
    filterAllTasks,
    filterCompletedTasks,
    filterPendientTasks,
  };
};