import React, { useState } from "react";
import { deleteTask, putTask } from "../helpers/ApiTasks";
import { Toast } from "./Toast";
import { Switch } from "./Switch";
import { Button } from "./Button";

export const Task = ({ index, taskDescription, handleRefresh, handleOpenModal }) => {
  const [isSubmiting, setIsSubmiting] = useState(false)
  const [isChecked, setIsChecked] = useState(booleanState[taskDescription?.estado] || false)

  const handleDelete = () => {
    setIsSubmiting(true)
    deleteTask(taskDescription.id)
      .then((res) => {
        if (res.status) {
          Toast.fire({
            title: `La tarea ${
              res.content.descripcion || ""
            } ha sido eliminada.`,
            icon: "success",
          });
          handleRefresh()
          setIsSubmiting(false)
        }
      })
      .catch((error) => {
        Toast.fire({
          title: "Ha ocurrido un error",
          icon: "error",
        });
        setIsSubmiting(false)
        console.error("Ha ocurrido un error:", error);
      });
  };

  const handleCompleteTask = () => {
    setIsSubmiting(true)
    setIsChecked(!isChecked)

    const updateTask = {
      ...taskDescription,
      estado: stringState[isChecked]
    }

    putTask(updateTask, taskDescription.id)
      .then((res) => {
        if (res.status) {
          Toast.fire({
            title: `La tarea ha sido actualizada correctamente`,
            icon: "success",
          });
          handleRefresh()
          setIsSubmiting(false)
        }
      })
      .catch((error) => {
        Toast.fire({
          title: "Ha ocurrido un error",
          icon: "error",
        });
        setIsSubmiting(false)
        console.error("Ha ocurrido un error:", error);
      });
  }

  return (
    <tr className="border border-gray-200">
      <td className="text-center border border-gray-200">
        <p className="py-3">
          {index + 1}  
        </p>      
      </td>
      <td className="py-3 border border-gray-200 max-w-[20rem]">
        <p className="capitalize text-justify mx-2">
          {taskDescription?.descripcion}
        </p>
      </td>
      <td className="py-3 border border-gray-200">
        <Switch isChecked={isChecked} onChange={handleCompleteTask} />
      </td>
      <td className="flex justify-center gap-2 py-3">
        <Button disabled={isSubmiting} onClick={handleDelete}>Eliminar</Button>
        <Button disabled={isSubmiting || isChecked} onClick={handleCompleteTask}>Completar</Button>
        <Button disabled={isSubmiting} onClick={() => handleOpenModal(taskDescription)}>Editar</Button>
      </td>
    </tr>
  );
};

const booleanState = {
  pendiente: false,
  completado: true,
};

const stringState = {
  false: 'completado',
  true: 'pendiente'
}
