import { API } from 'aws-amplify';

async function callLuaScript() {
  try {
    const response = await API.post('YourApiName', '/path', { body: {/* Payload if needed */} });
    console.log('Response from Lua:', response);
  } catch (error) {
    console.error('Error calling Lua script:', error);
  }
}
