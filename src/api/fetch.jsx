/* GET villager */
export default async function fetchData(apiKey) {
  const fetchOptions = {
    method: "GET",
    headers: {
      'x-api-key': apiKey
    }
  }
  try {
    const response = await fetch(`https://api.nookipedia.com/villagers`, fetchOptions);
    const data = await response.json();
    return data;
  } catch (err) {
    console.error("Error fetching data: ", err);
  }
}; 