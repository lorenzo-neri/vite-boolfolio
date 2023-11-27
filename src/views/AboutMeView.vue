<script>
import '../style.scss';

export default {
    name: 'AboutMeView',
    components: {

    },

    setup() {
        return {
        };
    },

    data() {
        return {
        }
    },
    methods: {

    },
    mounted() {

    }

}
</script>

<template>
    <!-- {{ message }} -->

    <!--  <div v-if="projects.title"> -->

    <div class="min-vh-100">


        <div class="p-5 mb-4 bg-black sw_warning">
            <div class="container py-5">
                <div class="display-5 fw-bold">
                    Vuoi farmi qualche domanda?
                </div>
                <router-link to="/contacts" class="display-5 fw-bold text-black btn btn-danger mt-4">
                    Contattami
                </router-link>
            </div>
        </div>


        <div class="container p-2">

            <div class="row align-items-center row-cols-md-2 row-cols-1 px-3 px-md-0">

                <div class="col sw_warning">
                    <div class="box">

                        <h2>Ciao! 🚀</h2>
                        <div class="fs-3 py-2">Benvenuti nel mio piccolo angolo di galassia 🪐</div>
                        <p class="fs-4">
                            Sono Lorenzo, ho 23 anni e da sempre sono un appassionato della tecnologia e come si capisce da
                            questo portfolio, anche del cinema 😁
                            <br>
                            Non mi arrendo mai e lotto sempre per ciò che desidero, se ho un problema trovo sempre il modo
                            di superarlo!
                        </p>
                        <p class="fs-4">
                            Mi trovo molto bene a lavorare anche in team, adoro aiutare gli altri e non mi faccio nessun
                            problema a farmi aiutare se ne ho bisogno.
                            <br>
                            Adoro programmare, mi diverte, mi stimola e non mi annoia mai, mi sembra sempre come un
                            videogioco, che tra parantesi è un'altra mia grande passione 🎮
                        </p>
                        <p class="fs-4">
                            Se vi va di vedere alcuni progetti a cui ho lavorato schiacciate il bottone!
                        </p>
                    </div>
                    <router-link to="/projects" class="w-100 mb-2 text-black btn btn-danger mt-4">
                        Projects
                    </router-link>
                </div>
                <!-- /.col -->
                <div class="col">
                    <div>
                        <img class="img-fluid" src="../assets/img/lollo.jpeg" alt="Image of me">
                    </div>
                </div>
                <!-- /.col -->

            </div>
            <!-- /.row -->

        </div>
    </div>
</template>

<style lang=scss>
.box {
    background-color: rgba(0, 0, 0, 0.59);
}
</style>
