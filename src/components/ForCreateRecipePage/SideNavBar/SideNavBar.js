export default {
    name : 'SideNavBar', 

    data () {
        return {
            refs: []
        }
    },


    mounted () {
        this.refs.push(this.$refs.ref1);
        this.refs.push(this.$refs.ref2);
        this.refs.push(this.$refs.ref3);
        this.refs.push(this.$refs.ref4);
    }, 

    methods: {
        navigate (pageNumber) {
            this.refs.forEach(element => {
                element.classList.remove('active');
            });

            this.refs[pageNumber].classList.add('active');
            this.$emit('navigate', pageNumber);
        }
    }
}