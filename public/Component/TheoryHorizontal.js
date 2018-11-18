const theoryHorizontal  = Vue.component('theory-horizontal', {
    props: ['theory'],
    template: `
    <div class="post">
        <div id="divimg">
            <img :src="theory.urlImage" alt="Avatar" id="img">
            <!--onmouseover="this.style.width='160px'; this.style.height='110px'; this.style.float='none'; this.style.position='absolute'" onmouseout="this.style.width='80px'; this.style.height='55px';this.style.float='left'; this.style.position='relative'"-->            <p>{{ theory.titre }}</p>
        </div>

        <div id="date">{{ theory.date }}</div>

        <div id="comments">{{ theory.nbComment }}</div>

    </div>
      `
  })