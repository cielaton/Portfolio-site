<script>
    let positions = [{
        role: "Front-end developer",
        color: "bg-Teal"
    }, {role: "Back-end developer", color: "bg-Red"}, {
        role: "Linux administration",
        color: "bg-Green"
    }, {role: "Embedded developer", color: "bg-Lavender"}]


</script>

<section id="About me" class="min-h-screen flex items-center pt-10 lg:pt-20">
    <div class="grid grid-cols-2 gap-20">
        <img class=" place-self-center h-[calc(100vh/2)]" src="assets/Main/About_me/illustration.png"
             alt="illustration"/>
        <div class="flex flex-col gap-5">
            <h1 class="leading-none text-6xl font-bold">About <span class="text-Teal">Me</span></h1>
            <p class="text-xl">Concentration is one of the strengths that I'm self-assured. This helps me make use of as
                much time and effort as possible to complete the project ahead of time. Another advantage is that I'm
                not afraid to acquire new technology, especially when understanding the basics.</p>
            <div class="flex gap-2 text-xl leading-none place-items-center">
                <p>I will be your</p>
                <i class="ri-arrow-down-circle-line mt-1"></i>
            </div>
            <div class="mr-auto grid grid-cols-2 gap-5">
                {#each positions as position}
                    <div class={"px-5 py-4 rounded-lg " + position.color}>
                        <p class="leading-none text-xl font-medium text-Base">{position.role}</p>
                    </div>
                {/each}
            </div>
        </div>
    </div>
</section>
