<template>
  <div class="container flex-col">
    <div>
      <div class="add-section">
        <router-link class="link" to="/">Add Employee</router-link>
      </div>

      <div class="search">
        <input
          type="text"
          class="search-bar"
          placeholder="Search for an employee..."
          v-model="searchValue"
        />
      </div>
      <table class="table">
        <thead>
          <tr>
            <th>Employee ID</th>
            <th>Name</th>
            <th>Department</th>
            <th>Salary</th>
            <th>Location</th>
            <th>Actions</th>
          </tr>
        </thead>

        <!-- Rendering the data from the database -->
        <tr v-for="employee in filteredEmployees" :key="employee.id">
          <td>
            {{ employee.id }}
          </td>
          <td>
            {{ employee.name }}
          </td>
          <td>
            {{ employee.department }}
          </td>
          <td>
            {{ employee.salary }}
          </td>
          <td>
            {{ employee.location }}
          </td>
          <td>
            <router-link
              :to="{ name: 'edit', params: { id: employee._id } }"
              class="btn edit"
              >Edit
            </router-link>
            <button
              @click.prevent="deleteEmployee(employee._id)"
              class="btn delete"
            >
              Delete
            </button>
          </td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      searchValue: "",
      employees: [],
    };
  },
  created() {
    axios
      .get("https://employeecms-vue.herokuapp.com")
      .then((res) => {
        this.employees = res.data;
      })
      .catch((error) => {
        console.log(error);
      });
  },
  methods: {
    deleteEmployee(id) {
      axios
        .delete(`https://employeecms-vue.herokuapp.com/delete-employee/${id}`)
        .then(() => {
          this.employees = this.employees.filter(
            (employee) => employee._id !== id
          );
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },

  computed: {
    //allows users to search for a specific employee
    filteredEmployees() {
      let tempEmployees = this.employees;
      if (this.searchValue !== "" && this.searchValue) {
        tempEmployees = tempEmployees.filter((employee) => {
          return employee.name.includes(this.searchValue);
        });
      }
      return tempEmployees;
    },
  },
};
</script>

<style>
tr {
  border: 1px solid black;
}

table {
  padding: 2rem;
  box-shadow: 4px 4px 4px 0px rgba(0, 0, 0, 0.1);
  border-collapse: collapse;
  text-align: center;
}

th {
  padding: 1rem;
  background-color: #004f6e;
  color: white;
}

tr:nth-child(even) {
  background-color: #f2f2f2;
}

tr:hover {
  background-color: #ddd;
}

td {
  padding: 0.5rem;
}

.btn {
  padding: 0.5rem 0.75rem;
  border: none;
  font-weight: bold;
  border-radius: 10px;
  font-size: 12px;
  margin: 0 0.5rem;
}

.edit {
  background-color: green;
}

.edit:hover {
  background-color: rgb(1, 95, 1);
}

.delete {
  background-color: rgb(155, 35, 35);
  color: white;
  cursor: pointer;
}

.delete:hover {
  background-color: rgb(105, 23, 23);
}

.add-section {
  width: 100%;
  display: flex;
}

.link {
  border: 2px solid green;
  margin: 1rem 0;
  border-radius: 10px;
  color: green;
  padding: 0.75rem;
}

.link:hover {
  background-color: green;
  color: white;
}

.search-bar {
  margin-bottom: 1rem;
  padding: 0.75rem;
  border-radius: 10px;
  border: 1px solid #cecece;
}
</style>
