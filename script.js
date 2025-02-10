document.addEventListener("DOMContentLoaded", function() {
    const categories = [
        { name: "目", file: "eye.html", image: "eye.png" },
        { name: "鼻", file: "nose.html", image: "nose.png" },
        { name: "口", file: "mouth.html", image: "mouth.png" },
        { name: "頭", file: "head.html", image: "head.png" },
        { name: "のど", file: "throat.html", image: "throat.png" },
        { name: "肩", file: "shoulder.html", image: "shoulder.png" },
        { name: "腰", file: "waist.html", image: "waist.png" },
        { name: "筋肉", file: "muscle.html", image: "muscle.png" },
        { name: "胃・腸", file: "stomach.html", image: "stomach.png" },
        { name: "皮膚", file: "skin.html", image: "skin.png" },
        { name: "肺", file: "lungs.html", image: "lungs.png" },
        { name: "発熱", file: "fever.html", image: "fever.png" },
        { name: "酔い止め・眠気", file: "sleep.html", image: "sleep.png" },
        { name: "その他", file: "other.html", image: "other.png" }
    ];

    const buttonsContainer = document.getElementById("buttons-container");
    const searchBox = document.getElementById("search-box");

    categories.forEach(category => {
        const listItem = document.createElement("li");
        const link = document.createElement("a");
        link.classList.add("category-button");
        link.href = category.file; // 各カテゴリーのHTMLページへ遷移
        link.innerHTML = `<img src="${category.image}" alt="${category.name}"><br>${category.name}`;

        listItem.appendChild(link);
        buttonsContainer.appendChild(listItem);
    });

    // 検索機能
    searchBox.addEventListener("input", function() {
        const searchText = searchBox.value.toLowerCase();
        const links = document.querySelectorAll(".category-button");

        links.forEach(link => {
            const categoryName = link.textContent.toLowerCase();
            link.parentElement.style.display = categoryName.includes(searchText) ? "block" : "none";
        });
    });
});
