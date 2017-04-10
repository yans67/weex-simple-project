/**
 * Created by huangyg on 2017/4/10.
 */
export default {
    methods: {
        jump(to) {
            if(this.$router){
                this.$router.push(to)
            }
        }
    }
}