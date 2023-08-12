import { useState } from "react";
import { putTask } from "../helpers/ApiTasks";
import { Toast } from "./Toast";
import { Input } from "./Input";
import { useInput } from "../hooks/useInput";
import { Button } from "./Button";

export const ModalTask = ({ taskInfo = {}, handleCloseModal, handleRefresh }) => {
  const [dataTask, setDataTask] = useState(taskInfo);
  const [isSubmiting, setIsSubmiting] = useState(false);

  const { handleChange } = useInput(setDataTask)

  const handleUpdate = () => {
    setIsSubmiting(true);
    putTask(dataTask, dataTask.id)
      .then((res) => {
        if (res.status) {
          Toast.fire({
            title: "Se ha actualizado correctamente",
            icon: "success",
          });
          handleRefresh();
          handleCloseModal();
          setIsSubmiting(false);
        }
      })
      .catch((error) => {
        Toast.fire({
          title: "Ha ocurrido un error",
          icon: "error",
        }); 
        setIsSubmiting(false);
        console.error("Ha ocurrido un error:", error);
      });
  };

  return (
    <form className="flex flex-col items-center gap-2">
      <div className="w-full md:w-96">
        <Input
          value={dataTask.descripcion}
          onChange={handleChange}
          label="Descripción"
          required={true}
          name="descripcion"
          placeholder="Agregar tarea..."
        />
      </div>

      <Button onClick={handleUpdate} disabled={isSubmiting}>
        Guardar
      </Button>
    </form>
  );
};