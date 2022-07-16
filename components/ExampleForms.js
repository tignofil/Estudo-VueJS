const exampleForm = {
    template: `
            <form action="#" method="post" @submit.prevent="saveData">
                <label for="">
                    Nome
                    <input v-model="name" type="text" name="name" id="name" placeholder="Nome">
                    <div v-if="errors.name">{{ errors.name }}</div>
                </label>
                <label for="">
                    Sexo
                    <select v-model="sexo" name="sexo" id="sexo">
                        <option value="">Escolha</option>
                        <option value="M">Masculino</option>
                        <option value="F">Feminino</option>
                        </select>
                </label>
                <label for="">
                    Descrição:
                    <textarea v-model="description" name="description" id="description" cols="30" rows="10" placeholder="Descrição"></textarea>
                </label>
                <label for="">
                    <input v-model="agree" type="checkbox" name="agree" id="agree">
                    Concordo
                </label>
                    <button type="submit">Enviar</button>
            </form>
    `,

    data() {
        return {
            name: 'Fabio Gomes',
            sexo: '',
            description: '',
            agree: true,

            errors: {
                name:''
            }
        }
    },

    methods: {
        saveData(){
            this.reset()
            
            if(this.name === ''){
                this.errors.name = 'Informe um valor par o nome';
                return
            }

            console.log(this.name)
            console.log(this.sexo)
            console.log(this.description)
            console.log(this.agree)
        },

        reset(){
            this.errors = {
                name:''
            }
        }
    },
}

app.component('example-form', exampleForm);