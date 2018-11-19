const theoryHorizontal  = Vue.component('theory-horizontal', {
    props: ['theory'],
    template: `
    <div class="post">
        <div id="divimg">
            <img :src="theory.urlImage" alt="Avatar" id="img">
            <p>{{ theory.titre }}</p>
        </div>

        <div id="date">09/11/2018</div>

        <div id="comments">12</div>

    </div>
      `
  })