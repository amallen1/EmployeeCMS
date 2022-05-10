<template>
  <div class="container">
    <div>
      <h1>Add a new employee</h1>
      <form @submit.prevent="addEmployee">
        <div class="form-section">
          <label>ID</label>
          <input
            type="number"
            v-model="employee.id"
            placeholder="Enter ID"
            required
          />
        </div>

        <div class="form-section">
          <label>Name</label>
          <input
            type="text"
            v-model="employee.name"
            placeholder="Enter Fullname"
            required
          />
        </div>

        <div class="form-section">
          <label>Department</label>
          <select v-model="employee.department">
            <option disabled value="">Please select a dept</option>
            <option>Tech</option>
            <option>HR</option>
            <option>Marketing</option>
            <option>Finance</option>
            <option>Sales</option>
          </select>
        </div>

        <div class="form-section">
          <label>Salary</label>
          <input
            type="number"
            v-model="employee.salary"
            placeholder="Enter Salary"
            required
          />
        </div>

        <div class="form-section">
          <label>Location</label>
          <input
            type="text"
            v-model="employee.location"
            placeholder="Enter Location"
            required
          />
        </div>

        <div class="button-section">
          <button class="submit-btn" type="submit">Add</button>
          <router-link class="submit-btn" to="/view">View All</router-link>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      employee: {
        id: "",
        name: "",
        department: "",
        salary: "",
        location: "",
      },
    };
  },
  methods: {
    addEmployee() {
      const apiURL = "https://employeecms-vue.herokuapp.com/create-employee";

      axios
        .post(apiURL, this.employee)
        .then(() => {
          this.$router.push("/view");
          this.employee = {
            id: "",
            name: "",
            department: "",
            salary: "",
            location: "",
          };
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>

<style>
form {
  border-radius: 10px;
  padding: 2rem;
  border: 1px solid #cecece;
  box-shadow: 4px 4px 4px 0px rgba(0, 0, 0, 0.1);
  background-color: white;
}

form .submit-btn {
  text-align: center;
}

.container h1 {
  text-align: center;
  margin-bottom: 1rem;
}

input,
select {
  width: 100%;
  padding: 0.5rem;
}

.button-section {
  display: flex;
  flex-direction: column;
}

.submit-btn {
  padding: 0.75rem;
  background-color: #2589cc;
  border: none;
  border-radius: 5px;
  font-weight: bold;
  color: white;
  cursor: pointer;
  font-size: 12px;
  margin: 0.25rem 0rem;
  font-family: Avenir, Helvetica, Arial, sans-serif;
}

.submit-btn:hover {
  background-color: #1f71a8;
}

.form-section {
  margin: 1rem 0;
}
</style>
