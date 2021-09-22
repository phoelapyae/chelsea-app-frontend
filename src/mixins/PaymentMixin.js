import PaymentService from '@/services/PaymentService.js';
import PackageService from '@/services/PackageService.js';

import ChoosePackageHeading from '@/components/ChoosePackageHeading.vue';


export const PaymentMixin = {
    components: { ChoosePackageHeading },
    data() {
        return {
            pack: null,
            match: null,
            payments: [Array,Object]
        }
    },
    created(){
        this.getPackageDetail()
        this.getPaymentTypes()
    },
    methods: {
        getPackageDetail(){
            const package_id = this.$route.query.package_id
            const match_id = this.$route.query.match_id
 
            return PackageService.packageDetail(package_id)
            .then((result) => {
                const response = result.data.data
                const matches = response.matches
                this.pack = response
                this.match = matches.find(match => match.id == match_id)
            }).catch((err) => {
                console.log(err.response);
            });
        },
        getPaymentTypes(){
            return PaymentService.paymentTypes()
            .then((result) => {
                this.payments = result.data.data
            }).catch((err) => {
                console.log(err.response);
            });
        }
    }
}