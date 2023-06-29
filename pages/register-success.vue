<template>
    <div class="container mx-auto h-screen flex justify-center items-center">
        <div class="w-full lg:w-1/3 px-10 lg:px-0">
            <h2 class="font-medium mb-3 text-3xl text-center">
                Welcome onboard!
            </h2>
            <p class="text-center font-light">
                Your account just registered
                <br />
                into our system
            </p>
            <div class="mb-4 mt-6">
                <div class="mb-3">
                    <button @click="$router.push({ path: '/' })"
                        class="block w-full bg-second-color hover:bg-primary-color border border-second-color hover:border-white text-black hover:text-second-color font-semibold px-6 py-4 text-lg rounded-full transition duration-300 ease-out hover:ease-in">
                        Start Explore
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    layout: 'success'
}
</script>
