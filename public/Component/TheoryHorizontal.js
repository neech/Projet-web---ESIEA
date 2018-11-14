const theoryHorizontal  = Vue.component('theory-horizontal', {
    props: ['theory'],
    template: `
    <div class="theoryHorizontal" style="height: 60px; margin-bottom: 1%">
        <div style="width: 33%; float: left">
            <img :src="theory.urlImage" alt="Avatar"  style="border-style: solid; border-width: 2px; border-color: grey; width: 80px; height: 55px; border-radius: 4px; margin: 0.5%; margin-left: 0px; float: left">
            <!--onmouseover="this.style.width='160px'; this.style.height='110px'; this.style.float='none'; this.style.position='absolute'" onmouseout="this.style.width='80px'; this.style.height='55px';this.style.float='left'; this.style.position='relative'"-->            <p>{{ theory.titre }}</p>
        </div>

        <div style="float: left; text-align: center; width: 33.6%">09/11/2018</div>

        <div style="float: left; width: 33.3%; text-align: right">12</div>

    </div>
      `
  })