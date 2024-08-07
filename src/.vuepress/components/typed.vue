<template>
    <div>
        <div class="typedText">{{ typedText }}</div>
    </div>
</template>

<script lang="ts">
export default {
    name: "typed",
    props: {
        typedList: [],
        loop: {
            type: Boolean,
            default: true,
        },
        speed: {
            type: Number,
            default: 200,
        },
    },
   data() {
        return {
            typedText: "",
            typedLists: [],
        };
    },
    mounted() {
        this.typedLists = JSON.parse(JSON.stringify(this.typedList))
        this.start();
    },
    watch: {
        typedList(newValue) {
            this.typedLists = JSON.parse(JSON.stringify(newValue))
            this.start();
        },
    },
    methods: {
        start() {
            let j = 0;
            let k = 0;
            this.typedText = "";
            if (this.typedLists.length <= 0) {
                console.error("typedList数据缺失");
                return;
            }
            let arr = this.typedLists[k].split("");
            let timer = setInterval(() => {
                if (j < arr.length) {

                    this.typedText += arr[j++];
                } else {
                    if (k < this.typedLists.length - 1) {
                        k++;
                        j = 0;
                        this.typedText = "";
                        arr = this.typedLists[k].split("");
                    } else {
                        clearInterval(timer);
                        // if (this.loop) {
                        // this.start();
                        // }
                    }
                }
            }, this.speed);
        },
    },
};
</script>
<style lang="scss" scoped>
.typedText::after {
    content: "|";
    animation: blink 1s infinite;
}

@keyframes blink {
    from {
        opacity: 0;
    }

    to {
        opacity: 1;
    }
}
</style>
