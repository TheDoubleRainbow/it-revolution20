<template>
  <div class="new-activity box">
    <div class="timepickers">
      <b-field label="Date">
        <b-datetimepicker
          class="date-picker"
          placeholder="Type or select a date..."
          icon="calendar-today"
          editable>
        </b-datetimepicker>
      </b-field>
      <b-field label="Duration">
        <b-timepicker
          placeholder="Type or select a date..."
          icon="clock"
          editable>
        </b-timepicker>
      </b-field>
    </div>
    <b-field label="Activity">
      <b-input
        type="text"
        placeholder="Describe what did you do">
      </b-input>
    </b-field>
    <div class="satisfaction">
      <div class="satisfaction-label">Activity satisfaction</div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .timepickers {
    display: flex;
  }

  .date-picker {
    margin-right: 20px;
  }

  .satisfaction-label {
    font-weight: bold;
  }
</style>
