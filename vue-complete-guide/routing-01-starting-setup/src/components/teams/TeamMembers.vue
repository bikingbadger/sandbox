<template>
  <section>
    <h2>{{ teamName }}</h2>
    <ul>
      <user-item
        v-for="member in members"
        :key="member.id"
        :name="member.fullName"
        :role="member.role"
      ></user-item>
    </ul>
  </section>
</template>

<script>
import UserItem from '../users/UserItem.vue';

export default {
  components: {
    UserItem
  },
  inject: ['teams', 'users'],
  props: ['teamId']
  ,
  data() {
    return {
      teamName: 'Test',
      members: [
        { id: 'u1', fullName: 'Max Schwarz', role: 'Engineer' },
        { id: 'u2', fullName: 'Max Schwarz', role: 'Engineer' }
      ]
    };
  },
  methods: {
    loadMembers(teamId) {
      
      const team = this.teams.find(team => team.id === teamId);
      this.teamName = team.name;
      const currentMembers = [];
      for (let index = 0; index < team.members.length; index++) {
        const memberId = team.members[index];
        const member = this.users.find(user => user.id === memberId);
        currentMembers.push(member);
      }
      this.members = currentMembers;
    }
  },
  created() {
    this.loadMembers(this.teamId);
  },
  watch: {
    teamId(newId) {
      this.loadMembers(newId);
    }
  }
};
</script>

<style scoped>
section {
  margin: 2rem auto;
  max-width: 40rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
  border-radius: 12px;
}

h2 {
  margin: 0.5rem 0;
}

ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
</style>
