<template>
  <div>
    <full-page ref="fullpage" :options="options" id="fullpage">
      <div class="section rev"></div>
      <div class="section">
        <div class="track tra">
          <div class="icon"></div>
          <h1>TRA</h1>
        </div>
      </div>
      <div class="section">
        <div class="track iqnis">
          <div class="icon"></div>
          <h1>IQNIS</h1>
        </div>
      </div>
      <div class="section">
        <div class="track kalis">
          <div class="icon"></div>
          <h1>KALIS</h1>
        </div>
      </div>
      <div class="section">
        <div class="track ahkoave">
          <div class="icon"></div>
          <h1>AHKOAVE</h1>
        </div>
      </div>
      <div class="section">
        <div class="empty"></div>
        <ExFooter>© 2020 Eximia Studios.</ExFooter>
      </div>
    </full-page>
  </div>
</template>

<script>
import ExFooter from "@/components/ExFooter.vue";

export default {
  components: {
    ExFooter
  }
};
</script>

<style>
.rev {
  background: #312b2b;
  background-image: url("../assets/Renvmn.svg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  height: 100vh;
}

.track {
  text-align: center;
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
}

.track h1 {
  flex-grow: 2;
  font-size: 5em;
}

.icon {
  flex-grow: 1;
  background-position: center;
  background-repeat: no-repeat;
  height: 100%;
}

.tra {
  background: rgba(138, 109, 88, 0.25);
}

.tra .icon {
  background-image: url("../assets/tra.png");
}

.iqnis {
  background: rgba(237, 23, 75, 0.25);
}

.iqnis .icon {
  background-image: url("../assets/iqnis.png");
}

.kalis {
  background: rgba(254, 241, 225, 0.25);
}

.kalis .icon {
  background-image: url("../assets/kalis.png");
}

.ahkoave {
  background: rgba(32, 143, 208, 0.25);
}

.ahkoave .icon {
  background-image: url("../assets/ahkoave.png");
}

.empty {
  height: 100%;
}
</style>
