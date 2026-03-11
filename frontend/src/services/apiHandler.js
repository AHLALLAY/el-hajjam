const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000/api/v1';

async function fetchEndPoint(endpoint, method = "GET", body = null, token = null) {
    try {

        if (!endpoint) {
            throw new Error('Endpoint is required');
        }

        const headers = {};
        const methodsWithBody = ['POST', 'PUT', 'PATCH'];
        
        if (methodsWithBody.includes(method.toUpperCase()) && body) {
            headers['Content-Type'] = 'application/json';
        }

        if (token) {
            headers['Authorization'] = `Bearer ${token}`;
        }

        const requestBody = body ? JSON.stringify(body) : null;
        const url = endpoint.startsWith('http') ? endpoint : `${API_BASE_URL}${endpoint}`;
        const response = await fetch(url, {
            method: method.toUpperCase(),
            headers: headers,
            body: requestBody
        });

        if (!response.ok) {
            const errorData = await response.json().catch(() => ({ message: 'Unknown error' }));
            throw new Error(errorData.message || `HTTP error! status: ${response.status}`);
        }

        return await response.json();
    } catch (err) {
        console.error('API Error:', err);
        throw err;
    }
}

export default fetchEndPoint;