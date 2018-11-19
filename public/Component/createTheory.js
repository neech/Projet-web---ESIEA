const Create = Vue.component('create-theory', {
    props: ['theory'],
    data: function () {
        return {
            newtheory: { id: -1, nbComment: 0, id_user: -100, titre: "", description: "", urlImage: "", date: null }
        }
    },
    methods: {
        create: function (e) {
            if (!store.getters.isUserConnected)
                alert('You have to be login to send a theory');
            else if (this.newtheory.titre && this.newtheory.description && this.newtheory.urlImage) {
                this.newtheory.id_user = store.state.profil_user.id
                axios.post(`theory`, { theory: this.newtheory }).then(response => router.push('/home'))
            }
            else
                alert('Verify each fields');
        }
    },
    template: `
    <div id="carre3">
        <h3 id="header"> CREATE </h3>

        <form  id="form"
        @submit.prevent="create">
                <p id="textarea">
                    <textarea class="areaTitle" v-model.trim="newtheory.titre"  placeholder="Enter your title"></textarea>
                </p>
                <p id="textarea">
                    <textarea class="areaDesc" v-model.trim="newtheory.description"  placeholder="Enter a description..."></textarea>
                </p>
                <p>
                    <textarea class="areaPicture" v-model.trim="newtheory.urlImage"  placeholder="Select a picture"></textarea><input type="submit" id="submit" value="Create"  style="height: 5%; border-style: solid; border-radius: 5px; position: absolute"/>
                </p>
        </form>
    </div>
      `
  })

  