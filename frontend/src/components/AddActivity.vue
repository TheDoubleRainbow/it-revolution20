<template>
  <div class="new-activity box">
    <div class="timepickers">
      <b-field label="Date">
        <b-datetimepicker v-model="date"
          class="date-picker"
          placeholder="Type or select a date..."
          icon="calendar-today"
          editable>
        </b-datetimepicker>
      </b-field>
      <b-field label="Duration">
        <b-timepicker
          v-model="time"
          placeholder="Type or select a date..."
          icon="clock"
          editable>
        </b-timepicker>
      </b-field>
    </div>
    <b-field label="Activity">
      <b-input
        v-model="activity"
        type="text"
        placeholder="Describe what did you do">
      </b-input>
    </b-field>
    <div class="satisfaction">
      <div class="satisfaction-label">Activity satisfaction</div>
      <div>
        <img class="satisfaction-img" v-show="satisfaction != 0" @click="satisfaction = 0" src="../../assets/0.svg" alt="">
        <img class="satisfaction-img" v-show="satisfaction === 0" @click="satisfaction = 0" src="../../assets/0a.svg" alt="">
        <img class="satisfaction-img" v-show="satisfaction != 1" @click="satisfaction = 1" src="../../assets/1.svg" alt="">
        <img class="satisfaction-img" v-show="satisfaction === 1" @click="satisfaction = 0" src="../../assets/1a.svg" alt="">
        <img class="satisfaction-img" v-show="satisfaction != 2" @click="satisfaction = 2" src="../../assets/2.svg" alt="">
        <img class="satisfaction-img" v-show="satisfaction === 2" @click="satisfaction = 0" src="../../assets/2a.svg" alt="">
        <img class="satisfaction-img" v-show="satisfaction != 3" @click="satisfaction = 3" src="../../assets/3.svg" alt="">
        <img class="satisfaction-img" v-show="satisfaction === 3" @click="satisfaction = 0" src="../../assets/3a.svg" alt="">
        <img class="satisfaction-img" v-show="satisfaction != 4" @click="satisfaction = 4" src="../../assets/4.svg" alt="">
        <img class="satisfaction-img" v-show="satisfaction === 4" @click="satisfaction = 0" src="../../assets/4a.svg" alt="">
      </div>
    </div>
    <b-button @click="addEvent()" class="add-button" type="is-dark is-fullwidth">Add activity</b-button>
  </div>
</template>

<script>
export default {
  name: 'addActivity',
  data: () => ({
    date: new Date(),
    time: new Date('01.01.2020 00:00'),
    activity: '',
    satisfaction: 2,
  }),
  methods: {
    addEvent() {
      this.$store.dispatch('addEvent', {
        date: this.date,
        duration: this.time.getHours() + this.time.getMinutes()/60,
        name: this.activity,
        satisfaction: this.satisfaction,
      })
    }
  }
}
</script>

<style lang="scss" scoped>
  .timepickers {
    display: flex;
  }

  .date-picker {
    margin-right: 20px;
  }

  .satisfaction-label {
    font-weight: bold;
    margin-bottom: 0.5em;
  }

  .add-button {
    margin-top: 20px;
  }

  .satisfaction-img {
    width: 32px;
    height: 32px;
    margin-right: 20px;
    }
</style>
