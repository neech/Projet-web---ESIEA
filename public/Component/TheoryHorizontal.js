const theoryHorizontal  = Vue.component('theory-horizontal', {
    props: ['theory'],
    template: `
    <div class="post">
        <div id="divimg">
            <img :src="theory.urlImage" alt="Avatar" id="img">
            <p>{{ theory.titre }}</p>
        </div>

        <div id="date">{{ theory.date }}</div>

        <div id="comments">{{ theory.nbComment }}</div>

    </div>
      `
  })