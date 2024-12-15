const BASE_URL = "http://localhost:5040/api/v1";

// Function to add a task 
export async function addTask (task) {
    const createTaskResponse = await fetch(`${BASE_URL}/users/tasks`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(task)
    });
    console.log("createTakeResponse:", createTaskResponse)

    const response = await createTaskResponse.json();
    console.log("response:", response)
    return response
    
}

// Function to get all the tasks
export async function getTasks () {
    const tasksResponse = await fetch(`${BASE_URL}/users/tasks`, {
        method: 'GET'
    });

    const response = await tasksResponse.json();
    return response
}

// Function to edit the task
export async function editTask (updatedTask, taskId) {
    const updatedTaskResponse = await fetch(`${BASE_URL}/users/tasks/${taskId}`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(updatedTask)
    });

    const response = await updatedTaskResponse.json()
    return response
}

export async function deleteTask () {
    const deleteResponse = await fetch(`${BASE_URL}/users/tasks/${taskId}`, {
        method: 'DELETE'
    })
}