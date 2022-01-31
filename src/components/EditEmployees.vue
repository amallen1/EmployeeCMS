<template>
  <div class="container">
    <div>
      <h1>Update Employee</h1>
      <div>
        <form @submit.prevent="updateEmployee">
          <div class="form-section">
            <label>ID</label>
            <input type="number" v-model="employee.id" required />
          </div>

          <div class="form-section">
            <label>Name</label>
            <input type="text" v-model="employee.name" required />
          </div>

          <div class="form-section">
            <label>Department</label>
            <select v-model="employee.department">
              <option>Tech</option>
              <option>HR</option>
              <option>Marketing</option>
              <option>Finance</option>
            </select>
          </div>

          <div class="form-section">
            <label>Salary</label>
            <input type="number" v-model="employee.salary" rquired />
          </div>

          <div class="form-section">
            <label>Location</label>
            <input type="text" v-model="employee.location" required />
          </div>

          <div class="button-section">
            <button class="submit-btn" type="submit">Submit</button>
            <router-link class="submit-btn" to="/view">Cancel</router-link>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      employee: {},
    };
  },
  created() {
    //fetches the data so that we can see it when it update
    axios.get(`/edit-employee/${this.$route.params.id}`).then((res) => {
      this.employee = res.data;
    });
  },
  methods: {
    updateEmployee() {
      axios
        .put(`/update-employee/${this.$route.params.id}`, this.employee)
        .then((res) => {
          console.log(res);
          this.$router.push("/view");
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>

<style>
.container {
  height: calc(100vh - 50px);
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgb(223, 232, 236);
}

form {
  width: 450px;
}

label {
  font-weight: 700;
}

.flex-col {
  flex-direction: column;
}
</style>
