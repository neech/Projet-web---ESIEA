const Create  = Vue.component('create-theory', {
    props: ['theory'],
    template: `
    <div class="carre3">
        <h3 style="text-align:center; margin-top: 2%"> CREATE </h3>

        <form action="C:\" style="margin-top: 3%">
                <p style="padding-bottom:2%">
                    <textarea class="boxTitle" placeholder="Enter your title"></textarea>
                </p>
                <p style="padding-bottom:2%">
                    <textarea class="boxDesc" placeholder="Enter a description..."></textarea>
                </p>
                <p>
                    <textarea class="boxPicture" placeholder="Select a picture" font-size="3%"></textarea><input type="submit" id="submit" value="Browse"  style="height: 5%; border-style: solid; border-radius: 5px; position: absolute"/>
                </p>
        </form>
    </div>
      `
  })

  