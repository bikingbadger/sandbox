<template>
  <div>
    <div v-if="error">failed to load</div>
    <div v-if="!data">loading...</div>
    <div v-else>hello {{ data.name }}</div>
  </div>
</template>

<script>
import useSWRV from 'swrv';

const todoistKey = '6e08baa1cd5fe4c4ac67d43d724f4684377b4517';
const allTaskURL = 'https://api.todoist.com/rest/v1/tasks?filter=today';
const fetcher = (key) => {
  console.log(key, todoistKey);
  fetch(key, {
    method: 'GET',
    headers: { Authorization: `Bearer ${todoistKey}` },
  })
    .then((resp) => {
      return resp && resp.json();
    })
    .then((data) => {
      return data;
    });
};
// fetch(key).then(resp => {
//   return resp && resp.json()
// }).then(data => {
//   if (data.message) {
//     throw new Error(data.message)
//   }
//   return data
// })

export default {
  setup() {
    const { data, error } = useSWRV(allTaskURL, fetcher);

    return {
      data,
      error,
    };
  },
};
</script>
