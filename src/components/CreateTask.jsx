import React, { useEffect, useState } from "react";
import { useInput } from "../hooks/useInput";
import { postTask } from "../helpers/ApiTasks";
import { Button } from "./Button";
import { Input } from "./Input";
import { Toast } from "./Toast";
import HoverButton from "./HoverButton";
import { IconAllTasks } from "../assets/icons/IconAllTasks";
import { IconCompleteTasks } from "../assets/icons/IconCompleteTasks";
import { IconPendientTask } from "../assets/icons/IconPendientTask";

const initialState = {
  descripcion: "",
  estado: "pendiente",
};

export const CreateTask = ({ handleRefresh, filterValues }) => {
  const [inputForm, setInputForm] = useState(initialState);

  const { filterState, filterAllTasks, filterCompletedTasks, filterPendientTasks } = filterValues

  const { handleChange } = useInput(setInputForm);

  const handleAddTask = (event) => {
    event.preventDefault();

    postTask(inputForm).then((res) => {
      if (res.status) {
        handleRefresh();
        setInputForm(initialState);
        Toast.fire({
          title: "Se ha creado correctamente la tarea",
          icon: "success",
        });
      } else {
        Toast.fire({
          title: "Ha ocurrido un error",
          icon: "error",
        });
      }
    });
  };

  return (
    <article className="w-full flex flex-col md:flex-row justify-between items-center">
      <form
        onSubmit={handleAddTask}
        className="my-4 w-full flex flex-col md:flex-row justify-center md:justify-start items-center gap-4"
        action=""
      >
        <div className="w-full md:w-96">
          <Input
            required={true}
            value={inputForm.descripcion}
            onChange={handleChange}
            name="descripcion"
            placeholder="Agregar tarea..."
          />
        </div>
        <Button>Agregar</Button>
      </form>
      <article className="flex gap-4 mb-4 md:mb-0">
        <HoverButton
          onClick={filterAllTasks}
          colorChange={`${filterState == 0 && "bg-blue-500"}`}
          dialog="Todos"
        >
          <IconAllTasks isActive={filterState == 0} colorChange="#fff" />
        </HoverButton>
        <HoverButton
          onClick={filterCompletedTasks}
          colorChange={`${filterState == 1 && "bg-blue-500"}`}
          dialog="Completados"
        >
          <IconCompleteTasks isActive={filterState == 1} colorChange="#fff" />
        </HoverButton>
        <HoverButton
          onClick={filterPendientTasks}
          colorChange={`${filterState == 2 && "bg-blue-500"}`}
          dialog="Pendientes"
        >
          <IconPendientTask isActive={filterState == 2} colorChange="#fff" />
        </HoverButton>
      </article>
    </article>
  );
};
