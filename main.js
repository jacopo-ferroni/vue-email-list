 console.log(`ok js`);

 const app = new Vue({
    el : `#app`,

    data : {
        emails : [],
        i : 0,
    },

    created()  {
        this.randomEmail();
    },

    methods : {
        randomEmail () {

            const self = this;

            while(self.i < 10) {

                axios.get('/user?ID=12345')

                .then(function (response) {
                    // handle success
                    console.log(response);
                    self.emails.push(response.data.response)
                    self.i++;
                })

                .catch(function (error) {
                    // handle error
                    console.log(error);
                })

                .then(function () {
                    // always executed
                });

            }

        }
    
    }
});