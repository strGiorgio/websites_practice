<template>
    <div class="main-dashboard">
        <div v-if="!this.$store.state.isAdmin">
            <p>Caso não seja admin, verá essa mensagem!</p>
        </div>
        <div v-else class="box-admin">
            <div class="card-user" v-for="user in users" :key="user.id">
                <div class="wrapper-infos">
                    <p>User Name: <span>{{ user.name }}</span></p>
                    <p>User email: <span>{{ user.email }}</span></p>
                    <p>Permission Level: <span>{{ user.permissionLevel }}</span></p>
                </div>
                <div class="wrapper-action">
                    <a href="#" @click="adminAction(1, user.id)">Promote</a>
                    <a href="#" @click="adminAction(2, user.id)">Delete</a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'mainDashboard',
    data() {
        return {
            users: []
        }
    },
    methods: {
        async getUsers() {
            const req = await fetch('http://localhost:3000/users');
            const res = await req.json();

            this.users = res;
            console.log(this.users)
        },

        async adminAction(action, id) {
            if (action == 1) {  
                console.log('promoted', id)
            } else {
                console.log('deleted', id)
            }
            
        }
    },
    created() {
        this.getUsers()
    }
}
</script>

<style scoped>
    .box-admin {
        border: 2px solid var(--blue-primary);
        width: 70%;
        margin: 0 auto;
        border-radius: 20px;
        box-shadow: 10px 10px 10px var(--grey-secondary);
        padding: 20px;
    }

    .card-user {
        border: 2px solid var(--blue-primary);
        border-radius: 20px;
        margin-bottom: 20px;
        display: flex;
        justify-content: space-between;
        align-content: center;
        padding: 0 40px;
    }
    
    .card-user p {
        font: 1.2rem Helvetica, sans-serif;
        color: var(--white-primary);
        text-align: start;
    }

    .card-user span {
        font-weight: bold;
        text-decoration: underline;
    }

    .card-user .wrapper-action {
        display: flex;
        flex-direction: column;
        justify-content: space-around;
    }

    .card-user .wrapper-action a {
        font: 1.1rem Helvetica, sans-serif;
        color: var(--white-primary);
        text-decoration: none;
        padding: 5px 10px;
        box-sizing: border-box ;
        border-radius: 20px;
    }

    .card-user .wrapper-action a:hover {
        background-color: var(--white-low);
    }

    p {
        color: var(--white-primary);
    }
</style>