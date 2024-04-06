const URL_API_FACTS = "https://catfact.ninja/fact";

export const getRandomFact = () => {
  return fetch(URL_API_FACTS)
    .then((res) => res.json())
    .then((data) => {
      const { fact } = data;
      return fact;
    });
};
