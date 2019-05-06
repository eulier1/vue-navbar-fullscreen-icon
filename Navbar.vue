<template>
  <nav class="flex items-center justify-between flex-wrap bg-home p-6 w-full">
    <div class="flex items-center flex-no-shrink text-white mr-6">
      <!-- <a href="/">
        <img src="/img/logo.svg" alt="logo image">
      </a>-->
      <span class="font-semibold text-xl tracking-tight"></span>
    </div>
    <div
      class="flex items-center lg:hidden"
      @click="toggleMenu = !toggleMenu"
      style="cursor:pointer"
    >
      <!-- Hambuger Icon -->
      <svg
        width="20"
        height="12"
        viewBox="0 0 20 12"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        v-if="!toggleMenu"
      >
        <rect x="4" width="16" height="2" fill="white"></rect>
        <rect y="5" width="20" height="2" fill="white"></rect>
        <rect x="4" y="10" width="16" height="2" fill="white"></rect>
      </svg>
      <!-- End Hambuger Icon -->
      <!-- Menu Title -->
      <svg
        class="ml-2"
        width="34"
        height="10"
        viewBox="0 0 34 10"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        v-if="!toggleMenu"
      >
        <path
          d="M7.05128 3.504H7.01528L6.40328 4.728L4.77128 7.692L3.17528 4.74L2.53928 3.42H2.50328V9H0.787281V0.624H2.71928L4.77128 4.548H4.79528L6.82328 0.624H8.76728V9H7.05128V3.504ZM10.6193 9V0.624H16.3193V2.244H12.4433V3.96H15.7673V5.568H12.4433V7.38H16.3193V9H10.6193ZM20.4644 5.04L19.6604 3.36H19.6244V9H17.9084V0.624H19.9004L22.1924 4.584L22.9964 6.264H23.0324V0.624H24.7484V9H22.7564L20.4644 5.04ZM28.32 0.624V5.76C28.32 6.352 28.436 6.796 28.668 7.092C28.9 7.38 29.288 7.524 29.832 7.524C30.376 7.524 30.764 7.38 30.996 7.092C31.228 6.796 31.344 6.352 31.344 5.76V0.624H33.12V5.568C33.12 6.184 33.06 6.72 32.94 7.176C32.828 7.624 32.64 7.996 32.376 8.292C32.112 8.58 31.772 8.796 31.356 8.94C30.94 9.076 30.432 9.144 29.832 9.144C29.232 9.144 28.724 9.076 28.308 8.94C27.892 8.796 27.552 8.58 27.288 8.292C27.024 7.996 26.832 7.624 26.712 7.176C26.6 6.72 26.544 6.184 26.544 5.568V0.624H28.32Z"
          fill="white"
        ></path>
      </svg>
      <!-- End Menu Title -->
      <!-- Close Icon -->
      <svg
        width="12"
        height="12"
        viewBox="0 0 12 12"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        v-if="toggleMenu"
      >
        <path
          d="M6 0C2.68548 0 0 2.68548 0 6C0 9.31452 2.68548 12 6 12C9.31452 12 12 9.31452 12 6C12 2.68548 9.31452 0 6 0ZM6 10.8387C3.31452 10.8387 1.16129 8.68548 1.16129 6C1.16129 3.33871 3.31452 1.16129 6 1.16129C8.66129 1.16129 10.8387 3.33871 10.8387 6C10.8387 8.68548 8.66129 10.8387 6 10.8387ZM8.44355 4.5C8.56452 4.40323 8.56452 4.20968 8.44355 4.08871L7.91129 3.55645C7.79032 3.43548 7.59677 3.43548 7.5 3.55645L6 5.05645L4.47581 3.55645C4.37903 3.43548 4.18548 3.43548 4.06452 3.55645L3.53226 4.08871C3.41129 4.20968 3.41129 4.40323 3.53226 4.5L5.03226 6L3.53226 7.52419C3.41129 7.62097 3.41129 7.81452 3.53226 7.93548L4.06452 8.46774C4.18548 8.58871 4.37903 8.58871 4.47581 8.46774L6 6.96774L7.5 8.46774C7.59677 8.58871 7.79032 8.58871 7.91129 8.46774L8.44355 7.93548C8.56452 7.81452 8.56452 7.62097 8.44355 7.52419L6.94355 6L8.44355 4.5Z"
          fill="white"
        ></path>
      </svg>
      <!-- End Close Icon -->
      <!-- Close Title -->
      <svg
        width="37"
        height="10"
        class="ml-2"
        viewBox="0 0 37 10"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        v-if="toggleMenu"
      >
        <path
          d="M4.31183 9.144C3.74383 9.144 3.23183 9.056 2.77583 8.88C2.31983 8.696 1.93183 8.428 1.61183 8.076C1.29183 7.716 1.04383 7.272 0.86783 6.744C0.69183 6.208 0.60383 5.584 0.60383 4.872C0.60383 4.168 0.69183 3.544 0.86783 3C1.04383 2.448 1.29183 1.988 1.61183 1.62C1.93183 1.244 2.31983 0.959999 2.77583 0.767999C3.23183 0.575999 3.74383 0.48 4.31183 0.48C5.08783 0.48 5.72783 0.64 6.23183 0.96C6.73583 1.272 7.13983 1.768 7.44383 2.448L5.87183 3.264C5.75983 2.912 5.58383 2.632 5.34383 2.424C5.11183 2.208 4.76783 2.1 4.31183 2.1C3.77583 2.1 3.34383 2.276 3.01583 2.628C2.69583 2.972 2.53583 3.476 2.53583 4.14V5.484C2.53583 6.148 2.69583 6.656 3.01583 7.008C3.34383 7.352 3.77583 7.524 4.31183 7.524C4.75983 7.524 5.11583 7.404 5.37983 7.164C5.65183 6.916 5.85183 6.62 5.97983 6.276L7.46783 7.14C7.15583 7.78 6.74383 8.276 6.23183 8.628C5.72783 8.972 5.08783 9.144 4.31183 9.144ZM8.74424 9V0.624H10.5682V7.38H13.7602V9H8.74424ZM17.987 9.144C17.435 9.144 16.931 9.052 16.475 8.868C16.019 8.684 15.631 8.412 15.311 8.052C14.991 7.684 14.743 7.232 14.567 6.696C14.391 6.152 14.303 5.524 14.303 4.812C14.303 4.1 14.391 3.476 14.567 2.94C14.743 2.396 14.991 1.944 15.311 1.584C15.631 1.216 16.019 0.94 16.475 0.756C16.931 0.572 17.435 0.48 17.987 0.48C18.539 0.48 19.043 0.572 19.499 0.756C19.955 0.94 20.343 1.216 20.663 1.584C20.983 1.944 21.231 2.396 21.407 2.94C21.583 3.476 21.671 4.1 21.671 4.812C21.671 5.524 21.583 6.152 21.407 6.696C21.231 7.232 20.983 7.684 20.663 8.052C20.343 8.412 19.955 8.684 19.499 8.868C19.043 9.052 18.539 9.144 17.987 9.144ZM17.987 7.524C18.539 7.524 18.967 7.344 19.271 6.984C19.583 6.624 19.739 6.108 19.739 5.436V4.188C19.739 3.516 19.583 3 19.271 2.64C18.967 2.28 18.539 2.1 17.987 2.1C17.435 2.1 17.003 2.28 16.691 2.64C16.387 3 16.235 3.516 16.235 4.188V5.436C16.235 6.108 16.387 6.624 16.691 6.984C17.003 7.344 17.435 7.524 17.987 7.524ZM25.8586 9.144C25.1226 9.144 24.4986 9.02 23.9866 8.772C23.4746 8.516 23.0386 8.188 22.6786 7.788L23.8786 6.576C24.4466 7.216 25.1466 7.536 25.9786 7.536C26.4266 7.536 26.7586 7.444 26.9746 7.26C27.1906 7.076 27.2986 6.832 27.2986 6.528C27.2986 6.296 27.2346 6.104 27.1066 5.952C26.9786 5.792 26.7186 5.684 26.3266 5.628L25.4986 5.52C24.6106 5.408 23.9586 5.14 23.5426 4.716C23.1346 4.292 22.9306 3.728 22.9306 3.024C22.9306 2.648 23.0026 2.304 23.1466 1.992C23.2906 1.68 23.4946 1.412 23.7586 1.188C24.0306 0.964 24.3586 0.792 24.7426 0.672C25.1346 0.544 25.5786 0.48 26.0746 0.48C26.7066 0.48 27.2626 0.579999 27.7426 0.779999C28.2226 0.98 28.6346 1.272 28.9786 1.656L27.7666 2.88C27.5666 2.648 27.3226 2.46 27.0346 2.316C26.7546 2.164 26.3986 2.088 25.9666 2.088C25.5586 2.088 25.2546 2.16 25.0546 2.304C24.8546 2.448 24.7546 2.648 24.7546 2.904C24.7546 3.192 24.8306 3.4 24.9826 3.528C25.1426 3.656 25.3986 3.748 25.7506 3.804L26.5786 3.936C27.4426 4.072 28.0826 4.34 28.4986 4.74C28.9146 5.132 29.1226 5.692 29.1226 6.42C29.1226 6.82 29.0506 7.188 28.9066 7.524C28.7626 7.86 28.5506 8.148 28.2706 8.388C27.9986 8.628 27.6586 8.816 27.2506 8.952C26.8426 9.08 26.3786 9.144 25.8586 9.144ZM30.6349 9V0.624H36.3349V2.244H32.4589V3.96H35.7829V5.568H32.4589V7.38H36.3349V9H30.6349Z"
          fill="white"
        ></path>
      </svg>
    </div>
    <!-- End Close Title -->
    <!-- Menu Mobile Devices -->
    <div v-if="isMobileViewport" class="w-full flex-grow lg:flex lg:items-center lg:w-auto">
      <div :class="{ 'show-on': toggleMenu, 'show-off': !toggleMenu }">
        <div
          v-if="toggleMenu"
          class="w-full h-screen flex content-center flex-wrap bg-grey-lighter justify-between"
        >
          <div
            v-for="(item, index) in menu"
            class="w-1/2 p-2 justify-center flex text-center flex-auto"
            :key="index + 10"
          >
            <a
              :href="item.routePath"
              class="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-white mr-4"
            >
              <img class="mb-2" :src="item.imageUrl" alt="icon for events page">
              {{item.title}}
            </a>
          </div>
        </div>
      </div>
    </div>
    <!-- End Menu Mobile Devices -->
    <!-- Menu Desktop or Superior Devices -->
    <div
      v-if="isDesktopViewport"
      class="w-full block flex-grow lg:flex lg:items-center lg:w-auto lg:justify-end"
    >
      <div class="text-sm lg:flex">
        <a
          v-for="(item, index) in menu"
          :key="index + 10"
          :href="item.routePath"
          class="mt-4 text-gray-300 lg:flex lg:items-center lg:justify-end lg:mt-0 text-secondary hover:text-indigo-300 mr-4"
        >
          <p v-if="item.title !== 'DONATE'">{{item.title}}</p>
          <button
            v-else
            class="bg-red-700 hover:bg-red-900 text-white font-bold py-2 px-4 rounded"
            style="box-shadow: 0px 5px 5px rgba(0, 0, 0, 0.2);"
          >DONATE</button>
        </a>
      </div>
    </div>
    <!-- End Menu Desktop or Superior Devices -->
  </nav>
</template>

<script>
export default {
  data() {
    return {
      toggleMenu: false,
      isMobileViewport: false,
      isDesktopViewport: false,
      menu: [
        {
          title: "EVENTS",
          imageUrl: "web/img/navbar/event.svg",
          routePath: "/events"
        },
        {
          title: "MEDIA",
          imageUrl: "web/img/navbar/media.svg",
          routePath: "/media"
        },
        {
          title: "ABOUT",
          imageUrl: "web/img/navbar/about.svg",
          routePath: "/about"
        },
        {
          title: "HOME",
          imageUrl: "web/img/navbar/home.svg",
          routePath: "/"
        },
        {
          title: "DONATE",
          imageUrl: "web/img/navbar/donate.svg",
          routePath: "/donate"
        }
      ]
    };
  },
  created: function() {
    window.addEventListener("resize", this.dispatchMenu);
    this.dispatchMenu();
  },
  updated: function() {
    this.$nextTick(function() {
      // Making
      console.log("updated");
      let el = document.querySelector("body");
      if (this.toggleMenu) {
        el.classList.add("overflow-hidden");
      } else {
        el.classList.remove("overflow-hidden");
      }
    });
  },
  methods: {
    dispatchMenu: function() {
      if (window.innerWidth < 1024) {
        this.isMobileViewport = true;
        this.isDesktopViewport = false;
      } else {
        this.isMobileViewport = false;
        this.isDesktopViewport = true;
      }
    }
  },
  destroyed: function() {
    window.removeEventListener("resize", this.dispatchMenu);
  }
};
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: all 0.5s ease-in-out;
}

.fade-enter-active {
  transition: all 0.3s ease-in-out;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
  transform: translateY(10px);
}

.show-off {
  height: 0;
  transition: all 0.3s ease-in-out;
}

.show-on {
  height: 100vh;
  transition: all 0.3s ease-in-out;
}
</style>
