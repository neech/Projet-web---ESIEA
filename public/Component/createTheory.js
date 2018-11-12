Vue.component('create-theory', {
    props: ['theory'],
    template: `
    <div class="carre1">
    <form style="margin-top: 10%">
            <p >
                Title :
            </p>
            <p>
                <input type="text" id="titre" style="width: 200px; height: 30px;" />
            </p>
            <p >
                Description :
            </p>
            <p>
                <input type="text" id="descritpion" class="box"/>
            </p>
            <p >
            Picture :
            </p>
            <p>
                <input type="text" id="img" class="box"/><input type="submit" id="submit" value="Browse"  style="border-style: solid; border-radius: 5px"/>
            </p> 
        </form>
        </div>
      `
  })

  