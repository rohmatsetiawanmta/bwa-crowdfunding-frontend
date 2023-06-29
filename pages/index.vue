<template>
  <div>
    <section class="pt-5">
      <div class="header__bg"></div>
      <div class="container mx-auto relative">
        <Navbar />
        <div class="flex items-center pt-10 px-5 md:px-0">
          <div class="w-1/2">
            <h1 class="text-4xl text-white mb-5 leading-tight">
              The <span class="font-semibold italic">ultimate crowdfunding</span> platform<br/>
              where you can <span class="font-semibold italic">support</span> your <br/>
              favorite campaigns and make <br/>a <span class="font-semibold italic">meaningful impact</span>.
            </h1>
            <button @click="$router.push({ path: '/' })"
              class="block bg-second-color hover:bg-primary-color border border-second-color hover:border-white text-black hover:text-second-color font-semibold px-12 py-3 text-xl rounded-full transition duration-300 ease-out hover:ease-in">
              Find a Project
            </button>
          </div>
          <div class="w-1/2 flex justify-center">
            <img src="/hero-image@2x.png" alt="crowdfunding project" />
          </div>
        </div>
      </div>
    </section>
    <section class="container mx-auto pt-24">
      <div class="flex justify-between items-center">
        <div class="w-auto">
          <h2 class="text-3xl text-gray-900 mb-8">
            Join these hottest campaigns of today
          </h2>
        </div>
        <div class="w-auto mt-5">
          <nuxt-link class="text-gray-900 hover:underline text-md font-medium" to="">View All</nuxt-link>
        </div>
      </div>
      <div class="flex mt-3 -mx-6">
        <div class="card-project w-1/3 mx-6 my-4 p-5 border border-gray-500 rounded-20">
          <div class="item">
            <figure class="item-image">
              <img src="/project-thumbnail-1.jpg" alt="" class="rounded-20 w-full" />
            </figure>
            <div class="item-meta">
              <h4 class="text-3xl font-medium text-gray-900 mt-5">
                Robotic Hand
              </h4>
              <p class="text-md font-light text-gray-900">
                Creating robotic hand for better movement
              </p>
              <div class="relative pt-4 progress-bar">
                <div class="overflow-hidden h-2 mb-4 text-xs flex rounded bg-gray-200 h-3 rounded-lg">
                  <div style="width: 20%"
                    class="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-primary-color progress-striped">
                  </div>
                </div>
              </div>
              <div class="flex progress-info">
                <div>20%</div>
                <div class="ml-auto font-semibold">Rp 100.000.000</div>
              </div>
            </div>
            <nuxt-link to="/projects/1"
              class="text-center mt-5 button-cta block w-full bg-second-color hover:bg-primary-color text-black hover:text-second-color font-semibold px-6 py-2 text-lg rounded-full">
              Fund Now
            </nuxt-link>
          </div>
        </div>
        <div class="card-project w-1/3 mx-6 my-4 p-5 border border-gray-500 rounded-20">
          <div class="item">
            <figure class="item-image">
              <img src="/project-thumbnail-2.jpg" alt="" class="rounded-20 w-full" />
            </figure>
            <div class="item-meta">
              <h4 class="text-3xl font-medium text-gray-900 mt-5">
                Auto Pilot Drone
              </h4>
              <p class="text-md font-light text-gray-900">
                Self driving drone, no worry to drive again
              </p>
              <div class="relative pt-4 progress-bar">
                <div class="overflow-hidden h-2 mb-4 text-xs flex rounded bg-gray-200 h-3 rounded-lg">
                  <div style="width: 45%"
                    class="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-primary-color progress-striped">
                  </div>
                </div>
              </div>
              <div class="flex progress-info">
                <div>45%</div>
                <div class="ml-auto font-semibold">Rp 80.000.000</div>
              </div>
              <nuxt-link to="/projects/2"
                class="text-center mt-5 button-cta block w-full bg-second-color hover:bg-primary-color text-black hover:text-second-color font-semibold px-6 py-2 text-lg rounded-full">
                Fund Now
              </nuxt-link>
            </div>
          </div>
        </div>
        <div class="card-project w-1/3 mx-6 my-4 p-5 border border-gray-500 rounded-20">
          <div class="item">
            <figure class="item-image">
              <img src="/project-thumbnail-3.jpg" alt="" class="rounded-20 w-full" />
            </figure>
            <div class="item-meta">
              <h4 class="text-3xl font-medium text-gray-900 mt-5">
                Wireboard
              </h4>
              <p class="text-md font-light text-gray-900">
                The new era of mechanical keyboard
              </p>
              <div class="relative pt-4 progress-bar">
                <div class="overflow-hidden h-2 mb-4 text-xs flex rounded bg-gray-200 h-3 rounded-lg">
                  <div style="width: 80%"
                    class="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-primary-color progress-striped">
                  </div>
                </div>
              </div>
              <div class="flex progress-info">
                <div>80%</div>
                <div class="ml-auto font-semibold">Rp 40.000.000</div>
              </div>
              <nuxt-link to="/projects/3"
                class="text-center mt-5 button-cta block w-full bg-second-color hover:bg-primary-color text-black hover:text-second-color font-semibold px-6 py-2 text-lg rounded-full">
                Fund Now
              </nuxt-link>
            </div>
          </div>
        </div>
      </div>
      <div class="flex mt-3 -mx-6">
        <div class="card-project w-1/3 mx-6 my-4 p-5 border border-gray-500 rounded-20">
          <div class="item">
            <figure class="item-image">
              <img src="/project-thumbnail-4.jpg" alt="" class="rounded-20 w-full" />
            </figure>
            <div class="item-meta">
              <h4 class="text-3xl font-medium text-gray-900 mt-5">
                Wireless Earphone
              </h4>
              <p class="text-md font-light text-gray-900">
                Just pair to phone and ready to set
              </p>
              <div class="relative pt-4 progress-bar">
                <div class="overflow-hidden h-2 mb-4 text-xs flex rounded bg-gray-200 h-3 rounded-lg">
                  <div style="width: 45%"
                    class="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-primary-color progress-striped">
                  </div>
                </div>
              </div>
              <div class="flex progress-info">
                <div>45%</div>
                <div class="ml-auto font-semibold">Rp 55.000.000</div>
              </div>
              <nuxt-link to="/projects/4"
                class="text-center mt-5 button-cta block w-full bg-second-color hover:bg-primary-color text-black hover:text-second-color font-semibold px-6 py-2 text-lg rounded-full">
                Fund Now
              </nuxt-link>
            </div>
          </div>
        </div>
        <div class="card-project w-1/3 mx-6 my-4 p-5 border border-gray-500 rounded-20">
          <div class="item">
            <figure class="item-image">
              <img src="/project-thumbnail-5.jpg" alt="" class="rounded-20 w-full" />
            </figure>
            <div class="item-meta">
              <h4 class="text-3xl font-medium text-gray-900 mt-5">
                Auto Heater
              </h4>
              <p class="text-md font-light text-gray-900">
                Make the room keep warm automatically
              </p>
              <div class="relative pt-4 progress-bar">
                <div class="overflow-hidden h-2 mb-4 text-xs flex rounded bg-gray-200 h-3 rounded-lg">
                  <div style="width: 70%"
                    class="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-primary-color progress-striped">
                  </div>
                </div>
              </div>
              <div class="flex progress-info">
                <div>70%</div>
                <div class="ml-auto font-semibold">Rp 75.000.000</div>
              </div>
              <nuxt-link to="/projects/5"
                class="text-center mt-5 button-cta block w-full bg-second-color hover:bg-primary-color text-black hover:text-second-color font-semibold px-6 py-2 text-lg rounded-full">
                Fund Now
              </nuxt-link>
            </div>
          </div>
        </div>
        <div class="card-project w-1/3 mx-6 my-4 p-5 border border-gray-500 rounded-20">
          <div class="item">
            <figure class="item-image">
              <img src="/project-thumbnail-6.jpg" alt="" class="rounded-20 w-full" />
            </figure>
            <div class="item-meta">
              <h4 class="text-3xl font-medium text-gray-900 mt-5">
                Smart Lock
              </h4>
              <p class="text-md font-light text-gray-900">
                Open the door with just one tap and click
              </p>
              <div class="relative pt-4 progress-bar">
                <div class="overflow-hidden h-2 mb-4 text-xs flex rounded bg-gray-200 h-3 rounded-lg">
                  <div style="width: 10%"
                    class="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-primary-color progress-striped">
                  </div>
                </div>
              </div>
              <div class="flex progress-info">
                <div>10%</div>
                <div class="ml-auto font-semibold">Rp 35.000.000</div>
              </div>
              <nuxt-link to="/projects/6"
                class="text-center mt-5 button-cta block w-full bg-second-color hover:bg-primary-color text-black hover:text-second-color font-semibold px-6 py-2 text-lg rounded-full">
                Fund Now
              </nuxt-link>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="container mx-auto pt-24">
      <div class="flex justify-between items-center">
        <div class="w-auto">
          <h2 class="text-3xl text-gray-900 mb-8">
            Our Happy Clients' Opinion
          </h2>
        </div>
      </div>
      <div class="flex mb-10">
        <div class="w-2/12 flex justify-center items-start">
          <img src="/testimonial-line.svg" alt="" />
        </div>
        <div class="w-8/12 mt-16">
          <h2 class="text-3xl text-gray-900 font-light">
            “Funding at Crowd/Funder is very easy and comfortable. <br />
            Just need to find an idea, click and already funding.”
          </h2>
          <div class="testimonial-info mt-8">
            <div class="name text-xl font-semibold">Shopie Nicole</div>
            <div class="title text-xl font-light text-gray-400">
              Project Manager
            </div>
          </div>
          <div class="testimonial-icon mt-10">
            <img src="/testimonial-1-icon.png" alt="" class="w-20 mr-5 inline-block testimonial-user rounded-full" />
            <img src="/testimonial-2-icon.png" alt="" class="w-20 mr-5 inline-block testimonial-user rounded-full" />
            <img src="/testimonial-3-icon.png" alt=""
              class="w-20 mr-5 inline-block testimonial-user active rounded-full" />
          </div>
        </div>
        <div class="w-2/12"></div>
      </div>
    </section>
    <div class="cta-clip -mt-20"></div>
    <CallToAction />
    <Footer />
  </div>
</template>

