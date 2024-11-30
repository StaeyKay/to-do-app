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

    const response = await createTaskResponse.json();
    return response
}

// Function to get all the tasks
export async function getTasks () {
    const tasksResponse = await fetch(`${BASE_URL}/users/tasks`, {
        method: 'GET'
    });

    const response = await tasksResponse.json();
    console.log("response:", response)
    return response
}