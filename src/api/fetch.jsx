/* GET villager */
export default async function fetchData(apiKey) {
  const fetchOptions = {
    method: "GET",
    headers: {
      'x-api-key': apiKey,
    }
  }

  try {
    const response = await fetch(`https://api.nookipedia.com/villagers`, fetchOptions);
    if (response.ok) { // if HTTP-status is 200-299, then villager data is returned
      const data = await response.json();
      return data;
    } else { // if HTTP-status is not 200-299, return the status
      return response.status;
    }
  } catch (err) { // if fetch fails, return 500
    return 500;
  }
}; 
