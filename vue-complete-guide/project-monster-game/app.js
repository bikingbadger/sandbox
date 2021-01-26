const app = Vue.createApp({
  data() {
    return {
      monsterHealth: 100,
      userHealth: 100,
      healRate: 3,
      healCount: 3,
      specialCount: 3,
      roundWinner: '',
      attackLog: [],
    };
  },
  computed: {
    monsterHealthStyle() {
      return {
        width: this.monsterHealth + '%',
        backgroundColor:
          this.monsterHealth > 60
            ? '#00a876'
            : this.monsterHealth > 30
            ? 'orange'
            : 'red',
      };
    },
    userHealthStyle() {
      return {
        width: this.userHealth + '%',
        backgroundColor:
          this.userHealth > 60
            ? '#00a876'
            : this.userHealth > 30
            ? 'orange'
            : 'red',
      };
    },
  },
  methods: {
    attack(hitRate) {
      const monsterHit = Math.round(Math.random() * hitRate);
      this.monsterHealth -= monsterHit;
      if (this.monsterHealth <= 0) {
        this.declareWinner('user');
        return;
      }
      const userHit = Math.round(Math.random() * hitRate);
      this.userHealth -= userHit;
      if (this.userHealth <= 0) {
        this.declareWinner('monster');
        return;
      }
      this.attackLog.push(`Monster hit ${monsterHit} User hit ${userHit}`);
    },
    heal() {
      const userHeal = Math.round(Math.random() * this.healRate);
      this.userHealth += userHeal;
      this.attackLog.push(`User heals ${userHeal}`);
    },
    declareWinner(winner) {
      this.roundWinner = winner;
      setTimeout(() => {
        this.monsterHealth = 100;
        this.userHealth = 100;
        this.roundWinner = '';
      }, 2000);
    },
  },
});

app.mount('#app');
