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
        <img class="satisfaction-img" @click="" src="../../assets/1.png" alt="">
        <img class="satisfaction-img" @click="" src="../../assets/2.png" alt="">
        <img class="satisfaction-img" @click="" src="../../assets/3.png" alt="">
        <img class="satisfaction-img" @click="" src="../../assets/4.png" alt="">
        <img class="satisfaction-img" @click="" src="../../assets/5.png" alt="">
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
    satisfaction: 4,
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
