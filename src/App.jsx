import { useState } from "react";
import { getAllTask } from "./services/getTask";
import { Task } from "./components/Task";
import { Modal } from "./components/Modal";
import { ModalTask } from "./components/ModalTask";
import { CreateTask } from "./components/CreateTask";
import './scrollbar.css'
import { filterChanges } from "./utils/filterChanges";

function App() {
  const [taskInfo, setTaskInfo] = useState({});
  const [isOpen, setIsOpen] = useState(false);

  
  const handleOpenModal = (taskDescription) => {
    setTaskInfo(taskDescription);
    setIsOpen(true);
  };
  
  const handleCloseModal = () => {
    setTaskInfo({});
    setIsOpen(false);
  };
  
  
  const { dataTasks, setDataTasks, isLoaded, handleRefresh } = getAllTask();
  
  const filterValues = filterChanges(dataTasks)

  return (
    <section className="max-w-[1500px] mx-auto p-4 md:p-16">
      <h1 className="text-3xl text-center md:text-start font-semibold">TodoList</h1>

      <CreateTask handleRefresh={handleRefresh} filterValues={filterValues} dataTasks={dataTasks} setDataTasks={setDataTasks} />

      {isLoaded ? (
        <div className="overflow-x-auto overflow-y-hidden">
          <table className="w-full min-w-[1200px]">
            <thead>
              <tr className="border border-gray-200">
                <th className="py-2 border border-gray-200">Orden</th>
                <th className="py-2 border border-gray-200">Descripción</th>
                <th className="py-2 border border-gray-200">Estado</th>
                <th className="py-2 border border-gray-200">Acciones</th>
              </tr>
            </thead>
            <tbody>
              {filterValues.updateTasks &&
                filterValues.updateTasks.length > 0 &&
                filterValues.updateTasks.map((task, index) => (
                  <Task
                    key={task.id}
                    index={index}
                    taskDescription={task}
                    handleRefresh={handleRefresh}
                    handleOpenModal={handleOpenModal}
                  />
                ))}
            </tbody>
          </table>
        </div>
      ) : (
        <p className="text-center">Cargando...</p>
      )}
      <Modal isOpen={isOpen} onClose={handleCloseModal}>
        <ModalTask
          taskInfo={taskInfo}
          handleCloseModal={handleCloseModal}
          handleRefresh={handleRefresh}
        />
      </Modal>
    </section>
  );
}

export default App;
