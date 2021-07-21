<template>
  <div>
    <div v-if="error">{{ error.message }}</div>
    <div v-if="data">
      <pre>{{ data }} </pre>
    </div>
    <div v-if="!data && !error">Loading...</div>
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
      //console.log(response.json());

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
// ).then(resp => {
//   return resp && resp.json()
// }).then(data => {
//   if (data.message) {
//     throw new Error(data.message)
//   }
//   return data
// })

export default {
  // props: {
  //   org: {
  //     type: String,
  //     required: true,
  //   },
  // },
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
