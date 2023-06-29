<template>
    <div>
        <header class="flex items-center justify-between">
            <h2 class="text-white font-bold text-2xl py-4">Crowd/Funder</h2>
            <div>
                <ul class="flex">
                    <li>
                        <nuxt-link to="/" class="text-white font-medium text-lg px-4 hover:text-second-color">Home</nuxt-link>
                    </li>
                    <li>
                        <nuxt-link to="#"
                            class="text-white font-medium text-lg px-4 hover:text-second-color">Projects</nuxt-link>
                    </li>
                    <li>
                        <nuxt-link to="#"
                            class="text-white font-medium text-lg px-4 hover:text-second-color">Features</nuxt-link>
                    </li>
                    <li>
                        <nuxt-link to="#" class="text-white font-medium text-lg px-4 hover:text-second-color">Blog</nuxt-link>
                    </li>
                </ul>
            </div>
            <div>
                <ul class="flex">
                    <li>
                        <nuxt-link to="/register"
                            class="inline-block w-40 text-white font-medium text-lg text-center py-2 mx-3 border border-white rounded-full hover:text-primary-color hover:bg-second-color hover:border-second-color transition duration-300 ease-out hover:ease-in">
                            Sign Up
                        </nuxt-link>
                    </li>
                    <li>
                        <nuxt-link to="/login"
                            class="inline-block w-40 text-primary-color bg-second-color font-medium text-lg text-center py-2 border border-second-color hover:border-white rounded-full hover:text-white hover:bg-primary-color transition duration-300 ease-out hover:ease-in">
                            Sign In
                        </nuxt-link>
                    </li>
                </ul>
            </div>
        </header>
    </div>
</template>