
var app = new Vue({
    el: '#app',
    data:{
       employeName: 'Mitch',
       employeId: 'AB1012',
       employeJob: 'Developer',
       employeGender: 'Male'
    },
    methods:{
      greet: function(time){
        return 'Good ' + time;
      }
    }
});
