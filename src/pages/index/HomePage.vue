<template>
    <div class="my-4 mx-auto flex w-1/2 flex-col items-center rounded-lg border p-4">
        <img src="../../images/logo.png" alt="" class="mb-4 h-24 w-24" />
        <h1 class="mb-4 text-2xl font-bold">Welcome to create-vue-tailwind!</h1>
        <p class="flex">
            <span class="rounded bg-green-50 px-2 text-green-400">
                npx tailwindcss -i ./src/css/input.css -o ./src/css/main.css --watch
            </span>
            <span class="mx-2">to start</span>
            <span class="rounded bg-blue-50 px-2 text-blue-400">tailwindcss</span>
        </p>
    </div>
</template>

<script>
export default {
    name: 'HomePage'
}
</script>
