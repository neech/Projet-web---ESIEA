const Create  = Vue.component('create-theory', {
    props: ['theory'],
    template: `
    <div id="carre3">
        <h3 id="header"> CREATE </h3>

        <form action="C:\" id="form">
                <p id="textarea">
                    <textarea class="areaTitle" placeholder="Enter your title"></textarea>
                </p>
                <p id="textarea">
                    <textarea class="areaDesc" placeholder="Enter a description..."></textarea>
                </p>
                <p>
                    <textarea class="areaPicture" placeholder="Select a picture"></textarea><input type="submit" id="submit" value="Browse"  style="height: 5%; border-style: solid; border-radius: 5px; position: absolute"/>
                </p>
        </form>
    </div>
      `
  })

  