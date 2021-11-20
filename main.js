 console.log(`ok js`);

 const app = new Vue({
    el : `#app`,

    data : {
        emails : [],
        counter : 0,
    },

    created()  {
        this.randomEmail();
    },

    methods : {
        randomEmail () {

            for(let i = 0; i < 10; i++) {

                axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
    
                .then((response) => {
                    // handle success
                    console.log(response.data.response);
                    this.emails.push(response.data.response)
                    this.counter++;
                })
    
                .catch(function (error) {
                    // handle error
                    console.log(error);
                })
    
                .then(function () {
                    // always executed
                });
                
            }


        },


    }
    

});