import Vue from "vue";

// 전역에서 eventBus를 사용하기 위해 context로 eventBus를 등록한다.
const _eventBus = new Vue();

const EventBus = {}
EventBus.install = function (Vue) {
  Vue.eventBus = _eventBus;
  window.eventBus = _eventBus;
  Object.defineProperties(Vue.prototype, {
    eventBus: {
      get() {
        return _eventBus;
      }
    },
    $eventBus: {
      get() {
        return _eventBus;
      }
    }
  })
};

Vue.use(EventBus)

export default EventBus;
