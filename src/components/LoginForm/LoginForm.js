import axios from "axios"

export default {
    name: 'LoginForm', 

    data () {
        return {
            user: {
                email: '', 
                password: '', 
                error : false, 
                loading : false
            }
        }
    },

    methods: {
        emitColseLoginForm () {
            this.$emit('closeLoginForm', false)
        },

        login () {
            this.user.error = false;
            this.user.loading = true;
            axios.post('http://127.0.0.1:8000/api/user/login', {
                email : this.user.email, 
                password : this.user.password
            }).then(response => {
                console.log(response.data.token);
                if(response.data.token && response.data.user) {
                    localStorage.setItem('token', JSON.stringify(response.data.token));
                    localStorage.setItem('user', JSON.stringify(response.data.user));
                    this.$router.push({ name : 'NewsFeedPage' });
                } else {
                    this.user.error = true;
                }
            }).catch(err => {
                console.log(err);
            }).finally(() => {
                this.user.loading = false;
            })
        }
    }, 

    mounted() {
        this.$refs['inputEmail'].focus();
    }
}