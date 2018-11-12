const Create  = Vue.component('create-theory', {
    props: ['theory'],
    template: `
    <div class="carre3">
        <form action="C:\">
                <p style="padding-bottom:2%">
                    <textarea class="boxTitle" placeholder="Enter title"></textarea>
                </p>
                <p style="padding-bottom:2%">
                    <textarea class="boxDesc" placeholder="Enter description..."></textarea>
                </p>
                <p>
                    <textarea class="boxPicture" placeholder="Select a picture" font-size="3%"></textarea><input type="submit" id="submit" value="Browse"  style="height: 5%; border-style: solid; border-radius: 5px; position: absolute"/>
                </p>
        </form>
    </div>
      `
  })

  