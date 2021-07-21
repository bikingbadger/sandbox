<template>
  <div>
    <h1>SWRV Jokes</h1>
    <p>
      The cool thing about SWRV is that the data will refresh if you switch tabs
      or unfocus the browser, then refocusing will refetch so you don't have to
      poll
    </p>
    <div>
      <div v-if="error">{{ error.message }}</div>
      <div v-if="data">
        <blockquote>{{ data }}</blockquote>
      </div>
      <div v-if="!data && !error">Loading...</div>
    </div>
  </div>
</template>

<script>
import useSWRV from 'swrv';

const fetcher = (key) =>
  fetch(key, {
    method: 'GET',
    headers: {
      accept: 'application/json',
    },
  })
    .then((response) => {
      return response && response.json();
    })
    .then((data) => {
      if (data.message) {
        throw new Error(data.message);
      }
      return data.joke;
    })
    .catch((err) => {
      console.error(err);
    });

export default {
  setup() {
    const endpoint = `https://icanhazdadjoke.com`;
    const { data, error } = useSWRV(endpoint, fetcher);

    return {
      data,
      error,
    };
  },
};
</script>

<style scoped>
@import 'https://cdn.jsdelivr.net/npm/water.css@2/out/water.css';

body {
  font-size: 1rem;
}
</style>
