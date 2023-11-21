document.addEventListener("DOMContentLoaded", () => {
    let filters = document.querySelectorAll("#filters div");

    for (let filter of filters) {
        filter.addEventListener("click", function () {
            filters.forEach((f) => f.classList.remove("clicked"));
            this.classList.add("clicked");

            let tag = this.id;
            let images = document.querySelectorAll("#gallery img");

            for (let image of images) {
                image.classList.remove("active");
                if (tag in image.dataset || tag === "all") {
                    image.classList.add("active");
                }
            }
        });
    }
});
