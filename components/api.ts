// api.ts
const API_BASE_URL = 'https://cqw95x062l.execute-api.us-east-1.amazonaws.com'; // Replace with your API Gateway URL

export async function fetchTasks() {
  const response = await fetch(`${API_BASE_URL}/tasks`);
  if (!response.ok) throw new Error('Failed to fetch tasks');
  return response.json();
}

export async function createTask(text: string) {
  const response = await fetch(`${API_BASE_URL}/tasks`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ text }),
  });
  if (!response.ok) throw new Error('Failed to create task');
  return response.json();
}

export async function updateTask(id: string, completed: boolean) {
  const response = await fetch(`${API_BASE_URL}/tasks/${id}`, {
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ completed }),
  });
  if (!response.ok) throw new Error('Failed to update task');
  return response.json();
}

export async function deleteTask(id: string) {
  const response = await fetch(`${API_BASE_URL}/tasks/${id}`, {
    method: 'DELETE',
  });
  if (!response.ok) throw new Error('Failed to delete task');
}
