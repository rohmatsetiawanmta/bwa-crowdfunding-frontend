<template>
    <section class="call-to-action bg-primary-color pt-64 pb-10">
        <div class="container mx-auto">
            <div class="w-full text-center">
                <h1 class="text-5xl text-white font-semibold">
                    Easy way to funding
                    <br />
                    best idea and innovation
                </h1>
                <button @click="$router.push({ path: '/register' })"
                    class="inline-block bg-second-color hover:bg-primary-color border border-second-color hover:border-white text-black hover:text-second-color font-semibold px-6 py-4 mt-8 text-lg rounded-full transition duration-300 ease-out hover:ease-in">
                    Getting Start
                </button>
            </div>
        </div>
    </section>
</template>