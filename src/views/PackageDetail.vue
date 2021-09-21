<template>
    <div>
        <div class="heading">
            <div class="heading__image w-100">
                <img class="w-100" :src="pack.bg_image" alt="">
            </div>
            <div class="heading__paragraph text-white">
                <div class="row p-5">
                    <div class="col col-md-6">
                        <h1 class="package-name">{{ pack.name }}</h1>
                        <p>{{ pack.short_description }}</p>
                        <div class="package-price mt-5">
                            <h1 class="success">£{{ pack.price }}</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="p-5">
            <div class="package-description row">
                <div class="col col-md-6">
                    <h3 class="text-primary">{{pack.title}}</h3>
                    <p v-html="pack.description"></p>
                </div>
                <div class="col col-md-6 p-5">
                    <h4 class="text-success">Benefits</h4>
                    <p v-for="(benefit,index) in benefits" :key="index">{{benefit.name}}</p>
                </div>
            </div>
        </div>
        <div class="p-5">
            <v-carousel show-delimiters :show-arrows="false">
                <v-carousel-item
                v-for="(image,i) in pack.images"
                :key="i"
                :src="image.image"
                ></v-carousel-item>
            </v-carousel>
        </div>
    </div>
</template>

<script>
import PackageService from '@/services/PackageService.js';
export default {
    props: {
        package_id: {
            required: true
        },
    },
    data() {
        return {
            pack: null,
            benefits: [Array,Object]
        }
    },
    created(){
        this.getPackageDetail()
        this.getBenefits()
    },
    methods: {
        getPackageDetail(){
            return PackageService.packageDetail(this.package_id)
            .then((result) => {
                this.pack = result.data.data
            }).catch((err) => {
                console.log(err);
            });
        },
        getBenefits(){
            return PackageService.getBenefits()
            .then((result) => {
                this.benefits = result.data.data
            }).catch((err) => {
                console.log(err.response);
            });
        }
    }
}
</script>

<style scoped>

.heading__paragraph {
    margin-top: -25%;
}

.package-description {
    border-bottom: 10px solid rgb(194, 92, 92);
}

</style>