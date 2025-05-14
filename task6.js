async function getData(url, timeout) {
  const controller = new AbortController();
  const signal = controller.signal;

  const timeoutId = setTimeout(() => controller.abort(), timeout);

  try {
    const response = await fetch(url, { signal });
    clearTimeout(timeoutId);

    if (!response.ok) {
      throw new Error(response.status);
    }

    return await response.json();
  } catch (error) {
    if (error.name === "AbortError") {
      throw new Error("Request time out");
    }
    throw error;
  }
}

getData("https://jsonplaceholder.typicode.com/posts/1", 5000) // in his case api works and there is no request time out
  .then((data) => console.log(data))
  .catch((error) => console.error(error));
