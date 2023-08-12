import { URL } from "./URL"

export const getTasks = async () => {
  try {
    const fetchResponse = await fetch(`${URL}/tarea`)
    const data = await fetchResponse.json()

    return data
  } catch (err) {
    console.error('Ha ocurrido un error: ', err)
  }
}

export const postTask = async (body) => {
  try {
    const fetchResponse = await fetch(`${URL}/tarea`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    })
    const data = await fetchResponse.json()

    return data
  } catch (err) {
    console.error('Ha ocurrido un error: ', err)
  }
}

export const putTask = async (body, id) => {
  try {
    const fetchResponse = await fetch(`${URL}/tarea/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    })
    const data = await fetchResponse.json()

    return data
  } catch (err) {
    console.error('Ha ocurrido un error: ', err)
  }
}

export const deleteTask = async (id) => {
  try {
    const fetchResponse = await fetch(`${URL}/tarea/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    })
    const data = await fetchResponse.json()

    return data
  } catch (err) {
    console.error('Ha ocurrido un error: ', err)
  }
}