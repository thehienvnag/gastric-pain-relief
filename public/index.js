import { createApp } from 'https://unpkg.com/vue@3/dist/vue.esm-browser.prod.js';

createApp({
    data() {
        return {
            phoneNumber: '0971805593',
            linkFacebook: 'https://www.facebook.com/groups/484041169287513/?ref=share',
            linkTiktok: 'https://www.tiktok.com/@anthinhkenbar1',
            linkMessenger: 'https://m.me/thehienvnag',
            linkZalo: 'Http://zalo.me/0973983089',
            userFeedbacks: [
                {
                    userImage: 'https://via.placeholder.com/450x450',
                    userName: 'Phạm Thị D',
                    userFeedback: 'Tôi đã sử dụng sản phẩm của bạn và rất hài lòng với hiệu quả của nó. Sản phẩm của bạn thật sự giúp tôi giảm đau dạ dày một cách nhanh chóng và hiệu quả.'
                },
                {
                    userImage: 'https://via.placeholder.com/450x450',
                    userName: 'Phạm Thị D',
                    userFeedback: 'Tôi đã sử dụng sản phẩm của bạn và rất hài lòng với hiệu quả của nó. Sản phẩm của bạn thật sự giúp tôi giảm đau dạ dày một cách nhanh chóng và hiệu quả.'
                },
                {
                    userImage: 'https://via.placeholder.com/450x450',
                    userName: 'Phạm Thị D',
                    userFeedback: 'Tôi đã sử dụng sản phẩm của bạn và rất hài lòng với hiệu quả của nó. Sản phẩm của bạn thật sự giúp tôi giảm đau dạ dày một cách nhanh chóng và hiệu quả.'
                },
                {
                    userImage: 'https://via.placeholder.com/450x450',
                    userName: 'Phạm Thị D',
                    userFeedback: 'Tôi đã sử dụng sản phẩm của bạn và rất hài lòng với hiệu quả của nó. Sản phẩm của bạn thật sự giúp tôi giảm đau dạ dày một cách nhanh chóng và hiệu quả.'
                },
            ],
        }
    },
    mounted() {
        var navToggle = document.getElementById("nav-toggle");
        var navContent = document.getElementById("nav-content");

        navToggle.addEventListener("click", function () {
            if (navContent.classList.contains("hidden")) {
                navContent.classList.remove("hidden");
            } else {
                navContent.classList.add("hidden");
            }
        });
    }
}).mount('#app');